<script>
	export let tree = [];
</script>

<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width" />
		<title>Component Party</title>
		<link rel="icon" href="/favicon.png" />
		<meta name="description" content="Web component JS frameworks overview by their syntax and features." />
		<style>
			#main-content h1:hover .header-anchor,
			#main-content h2:hover .header-anchor {
				opacity: 100;
			}

			#main-content .astro-code {
				border-top-left-radius: 0px;
				font-size: 1rem;
			}

			#main-content .missing-snippet {
				font-size: 0.8571429rem;
			}

			#main-content .header-anchor {
				float: left;
				margin-left: -0.87em;
				padding-right: 0.23em;
				font-weight: 500;
				transition: color 0.25s, opacity 0.25s;
				opacity: 0;
				text-decoration: none;
			}
		</style>
	</head>
	<body class="bg-gray-900 text-white">
		<header class="border-b border-gray-700 z-10 fixed w-full top-0 backdrop-blur">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between items-center py-3">
					<a class="font-semibold text-lg flex items-center space-x-3" href="#reactivity">
						<img src="favicon.png" alt="logo" class="w-5 h-5" />
						<span>Component party</span>
					</a>

					<div>
						<a href="https://github.com/matschik/component-party" title="Contribute on Github" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 text-white">
								<path
									d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
								/>
							</svg>
							<span class="sr-only">github</span>
						</a>
					</div>
				</div>
			</div>
		</header>

		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
			<div class="flex">
				<aside class="fixed mt-10 hidden lg:block">
					<nav class="font-semibold text-sm space-y-4">
						{#each tree as treeNode}
							<ul>
								<li>
									<a href={`#${treeNode.id}`} class="inline-block py-1 text-white opacity-90 hover:opacity-100 transition-opacity">
										{treeNode.title}
									</a>
									<ul>
										{#each treeNode.sections as section}
											<li>
												<a href={`#${section.id}`} class="inline-block py-1 text-white opacity-50 hover:opacity-90 transition-opacity">
													{section.title}
												</a>
											</li>
										{/each}
									</ul>
								</li>
							</ul>
						{/each}
					</nav>
				</aside>
				<main id="main-content" class="prose prose-sm prose-invert prose-h1:scroll-mt-20 prose-pre:mt-0 prose-h2:scroll-mt-20 w-full mx-auto pb-8 mt-10">
					<slot />
				</main>
			</div>
		</div>
	</body>
</html>
