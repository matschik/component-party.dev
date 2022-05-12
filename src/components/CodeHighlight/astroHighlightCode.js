import { getHighlighter } from '@/components/CodeHighlight/Shiki.js';

export default async function astroHighlightCode({ code, lang = 'plaintext', theme = 'github-dark', wrap = false }) {
	/** Replace the shiki class name with a custom astro class name. */
	function repairShikiTheme(html) {
		// Replace "shiki" class naming with "astro" and add "is:raw".
		html = html.replace('<pre class="shiki"', '<pre is:raw class="astro-code"');
		// Replace "shiki" css variable naming with "astro".
		html = html.replace(/style="(background-)?color: var\(--shiki-/g, 'style="$1color: var(--astro-code-');
		// Handle code wrapping
		// if wrap=null, do nothing.
		if (wrap === false) {
			html = html.replace(/style="(.*?)"/, 'style="$1; overflow-x: auto;"');
		} else if (wrap === true) {
			html = html.replace(/style="(.*?)"/, 'style="$1; overflow-x: auto; white-space: pre-wrap; word-wrap: break-word;"');
		}
		return html;
	}

	const highlighter = await getHighlighter({
		theme,
		// Load custom lang if passed an object, otherwise load the default
		langs: typeof lang !== 'string' ? [lang] : undefined,
	});
	const _html = highlighter.codeToHtml(code, { lang: typeof lang === 'string' ? lang : lang.id });
	const html = repairShikiTheme(_html);

	return html;
}
