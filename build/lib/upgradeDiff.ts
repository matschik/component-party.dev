/**
 * Line diff between 2 versions of one example, for upgrade pages (e.g. Solid 1
 * to Solid 2). Files pair by exact name, then by base name, so Ember's
 * `name.hbs` + `name.js` pair with `name.gjs`. A file left without a pair is
 * fully removed or fully added.
 */

export interface SourceFile {
  fileName: string;
  content: string;
}

/** 1-based line numbers, keyed by file name. */
export type LinesByFile = Record<string, number[]>;

export interface UpgradeDiff {
  changed: boolean;
  removedLines: LinesByFile;
  addedLines: LinesByFile;
}

interface Line {
  fileName: string;
  lineNumber: number;
  text: string;
}

function toLines(files: SourceFile[]): Line[] {
  return files.flatMap((file) =>
    file.content
      .replace(/\n+$/, "")
      .split("\n")
      .map((text, i) => ({ fileName: file.fileName, lineNumber: i + 1, text: text.trimEnd() })),
  );
}

/** Indexes of the lines of `a` and `b` that are not in their longest common subsequence. */
function diffLines(a: string[], b: string[]): { removed: number[]; added: number[] } {
  const lcs: number[][] = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      lcs[i][j] = a[i] === b[j] ? lcs[i + 1][j + 1] + 1 : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }
  const removed: number[] = [];
  const added: number[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
    } else if (lcs[i + 1][j] >= lcs[i][j + 1]) {
      removed.push(i++);
    } else {
      added.push(j++);
    }
  }
  while (i < a.length) removed.push(i++);
  while (j < b.length) added.push(j++);
  return { removed, added };
}

const baseName = (fileName: string) => fileName.replace(/\.[^.]+$/, "");

/** Groups of old and new files that diff against each other, in input order. */
function pairFiles(oldFiles: SourceFile[], newFiles: SourceFile[]): [SourceFile[], SourceFile[]][] {
  const groups: [SourceFile[], SourceFile[]][] = [];
  const oldLeft = [...oldFiles];
  const newLeft = [...newFiles];

  for (const file of [...oldLeft]) {
    const match = newLeft.find((n) => n.fileName === file.fileName);
    if (match) {
      groups.push([[file], [match]]);
      oldLeft.splice(oldLeft.indexOf(file), 1);
      newLeft.splice(newLeft.indexOf(match), 1);
    }
  }

  for (const name of new Set(oldLeft.map((f) => baseName(f.fileName)))) {
    const olds = oldLeft.filter((f) => baseName(f.fileName) === name);
    const news = newLeft.filter((f) => baseName(f.fileName) === name);
    if (news.length === 0) continue;
    groups.push([olds, news]);
    for (const f of olds) oldLeft.splice(oldLeft.indexOf(f), 1);
    for (const f of news) newLeft.splice(newLeft.indexOf(f), 1);
  }

  for (const file of oldLeft) groups.push([[file], []]);
  for (const file of newLeft) groups.push([[], [file]]);
  return groups;
}

function push(target: LinesByFile, line: Line): void {
  (target[line.fileName] ??= []).push(line.lineNumber);
}

export function diffUpgrade(oldFiles: SourceFile[], newFiles: SourceFile[]): UpgradeDiff {
  const removedLines: LinesByFile = {};
  const addedLines: LinesByFile = {};

  for (const [olds, news] of pairFiles(oldFiles, newFiles)) {
    const oldLines = toLines(olds);
    const newLines = toLines(news);
    const { removed, added } = diffLines(
      oldLines.map((l) => l.text),
      newLines.map((l) => l.text),
    );
    // A blank line carries no change worth a tint.
    for (const i of removed) if (oldLines[i].text.trim()) push(removedLines, oldLines[i]);
    for (const j of added) if (newLines[j].text.trim()) push(addedLines, newLines[j]);
  }

  // "Unchanged" means byte for byte: the page then shows the code once.
  const changed =
    oldFiles.length !== newFiles.length ||
    oldFiles.some(
      (file) => newFiles.find((n) => n.fileName === file.fileName)?.content !== file.content,
    );

  return { changed, removedLines, addedLines };
}
