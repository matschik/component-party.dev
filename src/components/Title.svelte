<script>
	import kebabCase from 'lodash.kebabcase';

	export let as = 'h1';
	export let content = '';
	$: id = kebabCase(content);
</script>

<svelte:element this={as} {id}>{content}<a class="header-anchor" href={'#' + id} aria-hidden="true" tabindex="-1">#</a></svelte:element>
