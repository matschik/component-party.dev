import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { diffUpgrade, type SourceFile } from "./upgradeDiff";

function read(dir: string): SourceFile[] {
  const full = path.join("content", dir);
  return fs
    .readdirSync(full)
    .sort()
    .map((fileName) => ({ fileName, content: fs.readFileSync(path.join(full, fileName), "utf8") }));
}

describe("diffUpgrade", () => {
  it("marks the lines Solid 2 changes in update-state", () => {
    const diff = diffUpgrade(
      read("1-reactivity/2-update-state/solid1"),
      read("1-reactivity/2-update-state/solid2"),
    );
    expect(diff.changed).toBe(true);
    // Solid 1 line 5: `setName("Jane");` in the component body.
    expect(diff.removedLines["Name.jsx"]).toEqual([1, 5]);
    // Solid 2: the import with onSettled, then the onSettled block.
    expect(diff.addedLines["Name.jsx"]).toEqual([1, 6, 7, 8]);
  });

  it("reports an identical example as unchanged", () => {
    const diff = diffUpgrade(
      read("1-reactivity/1-declare-state/solid1"),
      read("1-reactivity/1-declare-state/solid2"),
    );
    expect(diff).toEqual({ changed: false, removedLines: {}, addedLines: {} });
  });

  it("diffs Ember's .hbs + .js pair against the matching .gjs", () => {
    const oldFiles = [
      { fileName: "name.hbs", content: "<h1>{{this.name}}</h1>\n" },
      { fileName: "name.js", content: "export default class Name {}\n" },
    ];
    const newFiles = [
      {
        fileName: "name.gjs",
        content: "export default class Name {}\n<template><h1>x</h1></template>\n",
      },
    ];
    const diff = diffUpgrade(oldFiles, newFiles);
    expect(diff.removedLines).toEqual({ "name.hbs": [1] });
    expect(diff.addedLines).toEqual({ "name.gjs": [2] });
  });

  it("marks a file only one version has as fully removed or added", () => {
    const diff = diffUpgrade(
      [
        { fileName: "app.module.ts", content: "a\nb\n" },
        { fileName: "app.ts", content: "x\n" },
      ],
      [{ fileName: "app.ts", content: "x\n" }],
    );
    expect(diff.changed).toBe(true);
    expect(diff.removedLines).toEqual({ "app.module.ts": [1, 2] });
    expect(diff.addedLines).toEqual({});
  });

  it("counts a blank-line-only change as changed, without tinting it", () => {
    const diff = diffUpgrade(
      [{ fileName: "a.js", content: "x\ny\n" }],
      [{ fileName: "a.js", content: "x\n\ny\n" }],
    );
    expect(diff).toEqual({ changed: true, removedLines: {}, addedLines: {} });
  });

  it("pairs base names whatever their case", () => {
    const diff = diffUpgrade(
      [{ fileName: "app.js", content: "same\n" }],
      [{ fileName: "App.gjs", content: "same\n" }],
    );
    expect(diff).toEqual({ changed: true, removedLines: {}, addedLines: {} });
  });
});
