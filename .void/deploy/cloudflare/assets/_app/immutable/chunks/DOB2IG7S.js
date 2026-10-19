var s = [
  {
    frameworkId: "svelte5",
    snippetId: "declare-state",
    files: [
      {
        fileName: "Name.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> name</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"John"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello </span><span style="color:#C678DD">{</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE23NwQrCMBAE0F8JgweFYuk1xoLgQfwF4yGWlRbWbUhWUUr_XdKDJ48zvGEm6KBMsDhSxyGRyRqUUOE-MGXYywT9xAJKgQoSHiUdYtzmF_FibyHTv74bRUk0w8LlLg1RWy_GMKkp3OzNarlbe5zHXjw2Oy-u_lEvrm_aEzGPZiqL2dV903pBBaW3wmp60nydvyOBp83HAAAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/1-declare-state/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "update-state",
    files: [
      {
        fileName: "Name.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> name</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"John"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#E06C75">  name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Jane"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello </span><span style="color:#C678DD">{</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22NsQrCQBBEf-UYLBSCIe0lBuwkvZVrccaVBM7NkVtFCfl3uSBWljPvDTNBe_UMi2O4OmUT1Skjw633HGFPE_QdEk8FMoi7p7QPYRuf7Bf34iL_69tBlEUjLKrYjn3QmsQYz2qSbnZmtdytCc3QCWFTJv5lhMYJE0qSKv_NSaquqA_s_WCmZM5V3hU1CTIovxRWxwfP5_kDK5j3MtoAAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/2-update-state/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "computed-state",
    files: [
      {
        fileName: "DoubleCount.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> count</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">10</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> doubleCount</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">derived</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">count</span><span style="color:#56B6C2"> *</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">{</span><span style="color:#E06C75">doubleCount</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22NQQrCMBBFrxIGF1WKVZcxFqTHsC7aZIRAnIRmUpTSu0sqiguX8_77fyZgyw5BQuPvITEaEbljhBJu1mEEeZmAnyEbGUAJ1N3zdQ5hG0d0i9t3Ef9x7YmROIIEFfVgA9ctCeGQhfaJWJzEavlX7HfrY460p8jC-NQ7bD6KwcGOaIp3ZyMO2VXVd7ElZexYTz-1WVUZtQQlMD4YJA8J5-v8AnWFsufyAAAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/3-computed-state/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "minimal-template",
    files: [
      {
        fileName: "HelloWorld.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello world&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE23KTQrCMBRF4a2UOw5Kp6EUnDlxBeog6pUGXl5C8_yjdO8Sxw7Px1lg0YTwOESNKUhnTEWCEQ73KKzwxwX2Ke1pAAcNqdWulE19Un7vJVT-82tWo1qFxzD1454iuXvlWW7DdurHk8LB-DZ4mx9cz-sXvBTxL5IAAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/1-minimal-template/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "styling",
    files: [
      {
        fileName: "CssStyle.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#D19A66"> class</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"title"</span><span style="color:#ABB2BF">>I am red&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 10rem;"</span><span style="color:#ABB2BF">>I am a button&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#D19A66">  .title</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">    color: </span><span style="color:#D19A66">red</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">style</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22NwQ6CMAyGX6XpGUWuc5B49OzReZhYhGR0ZCtGJLy7mYSbp7Zf_z_fjNKJI1R4kcl1_MQMm85RRHWdUaYhvRLADNn26ToNwz6-yElidxvpH689C7FEVKjbAmpnYyzNKjNYncH2EOih87aoDOv7KOIZokyOSoONZ9nF7kMKikOg_rhVLKxJna-zMmxY_2qVYYD9TwBz2gFq73xQyXNMYDGs8y2LGQq9BZWEkZbb8gWeaYnpCQEAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/2-styling/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "loop",
    files: [
      {
        fileName: "Colors.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {#</span><span style="color:#C678DD">each</span><span style="color:#E06C75"> colors</span><span style="color:#C678DD"> as</span><span style="color:#E06C75"> color</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">color</span><span style="color:#ABB2BF">)}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">{</span><span style="color:#E06C75">color</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {/</span><span style="color:#C678DD">each</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22MwQrCMBBEf2UZLwrF3msUvPsHxkONqwZiEpKtKCX_LmnRk6edfcy8EWLFMTocQohocLWOM7rjCHnHyitAA98_6rePcZ2f7KSyc5_5HzfBC3vJ6KCySTbKTnsiE3wWMsGFlGlLR43EF42GNG6J2c_x7AbWOG20V-1vrL0a3CQZF9yb-9fS5znRcjqrUitEytndOJGiWmfnYVuHpWonFRoIvwSdpIHLqXwAsUPXRAoBAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/3-loop/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "event-click",
    files: [
      {
        fileName: "Counter.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> count</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> incrementCount</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E06C75">    count</span><span style="color:#56B6C2">++</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Counter: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">count</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> onclick</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">incrementCount</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">>+1&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22PwWrDMBBEf2VZekiwqdurohhK6VdUPThiA6LKWljjkCD070UOFAo9zry3A1sYAVHY8MdVFORj8N_c8zlEyWw-C-OeGm4F96zTpaW3lJ7zVSJad5qy_Nf7WSGKzIZt9ktIGJ0SRQH5eVXQkZ4yJsjuZX9w2th5VY8wKwX1i1xE8d7M3Z5Kw_Q47LpDS9WpHX6Hndo0brYshsomVjuk0ak9rcCsNOv23rH8Xa9j92qHhzM65Z4hN7DBskr9qj9zD2x1IwEAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/4-event-click/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "dom-ref",
    files: [
      {
        fileName: "InputFocused.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> inputElement</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  $</span><span style="color:#61AFEF">effect</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">    inputElement</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">focus</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">  });</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">inputElement</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE23MzwrCMAwG8FcJwcMGw927PyDoU1gPW02x0GVlzUQZfXepB1HwFPL7vmRDceIJFR7nCRayWKF1niKq84byDDnKgBXyMOXtEMI-3slLtnGI9M_NzEIsERW20SwuSK8ZwJOA47DKydNELI3mzDuylowURQldD1sm-Ont7WzWWJRNjlIebf15q7l9d2F0fFVyc7Hbvo8T1L1mrFDoIahkWSld0gs0Dy4O-gAAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/5-dom-ref/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "conditional",
    files: [
      {
        fileName: "TrafficLight.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"orange"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> light</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">derived</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">[</span><span style="color:#E06C75">lightIndex</span><span style="color:#ABB2BF">]);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> nextLight</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E06C75">    lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> +</span><span style="color:#D19A66"> 1</span><span style="color:#ABB2BF">) </span><span style="color:#56B6C2">%</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">length</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> onclick</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">nextLight</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">>Next light&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Light is: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">light</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  You must</span></span>\n<span class="line"><span style="color:#ABB2BF">  {#</span><span style="color:#C678DD">if</span><span style="color:#E06C75"> light</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>STOP&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {:</span><span style="color:#C678DD">else if</span><span style="color:#E06C75"> light</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "orange"</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>SLOW DOWN&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {:</span><span style="color:#C678DD">else if</span><span style="color:#E06C75"> light</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "green"</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>GO&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {/</span><span style="color:#C678DD">if</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 23,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE4WRb0vDQAzGv0qIChuWVd_WtjCU6WA4cYMhuyG1zebhmZZeOial312u--dE8F2SJ79LnlyNosUQBnibc6ZF55wY9HCpDVkM5jXKV-FkV0APOfl0Wb8oenZNRlztLbH0Vz3NWYjFYoChTUtdSKwYIM3ZCkyf-4PB8PZ1NLx_mE4ggrnCkjKFHijMy4RXtI1XJRErXNw41pCA0at3GXJGG4jg3Eoi1Lnq3ig-Pt62ODWjUq8p65xOmx-fWOzBZcWpcw9MGxk5vdOF2ilwOrHzI7uE6y5c_PLSM8QreW_3bRSH_sG74vCtEskZck6NTj-i-jCtiR9ps9s89LdtseKwiFsZtA2gbtUm9Iut4ia85BV8VlZcXJ_p5d57FMHuoM3WRGiLhOPJdPwU-m3YEgEZS_AL25__lByNZ3A3nj3-i-9-7IS-H__EfL1sL-MsoIdCG8FAyoqaRfMNXw7yd5ICAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/6-conditional/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "on-mount",
    files: [
      {
        fileName: "PageTitle.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">""</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  $</span><span style="color:#61AFEF">effect</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">    pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> document</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">title</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  });</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Page title: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">pageTitle</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22OwQqDMAyGXyUEDwoy750W9gTbYbd1h85FEWosNo4N6buPehAGO-bL_-XPijKII1R4ZhinhQVL7AZHAdVtRfn4tEsAS2Q7punk_SG8yEliDxvoH28nFmIJqLAO7Tx40YYBHAl429M1tUIDWRArlBs0WBxTIKOuo1byvIBGw5oQ_BjPqV1GYjlsj29OTGpd7TWGa68vtifYMgrW_UCsK68NY4lCb0El80LxHr_VGWHVBwEAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/1-on-mount/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "on-unmount",
    files: [
      {
        fileName: "Time.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> time</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#C678DD">new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">());</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  $</span><span style="color:#61AFEF">effect</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">    const</span><span style="color:#E5C07B"> timer</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> setInterval</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">      time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">    }, </span><span style="color:#D19A66">1000</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#ABB2BF"> () </span><span style="color:#C678DD">=></span><span style="color:#61AFEF"> clearInterval</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">timer</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  });</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Current time: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">time</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 13,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE4WPwUrEQAyGXyWEPbRQdut1ti2IXgTBg96sh3FIl4FpOsxkVqXMu8tYdkEQPCX5k_xfsqJYcYQKnxgSz0tiwQYn6yiiel1RvnzpFgEbZD2X6tb7fTyTk6K960h_6WZhIZaICrtogvUyjAzgSEDsTNDDLooWqpg-4L4k9V6Wx8VoRy92pmcJlk9VXR9HLos7miYyUlU19AOsRQIwC8fNL0APkeSBhcJZu99jcEH-wzpu47mBm7ZtL2SAQJICw-ZpHOlw5fywt8VcQne4Pjty54e7FALxdqOCtYTcHfwwMjYo9CmoJCTKb_kbOuxE8IwBAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/2-on-unmount/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "props",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> UserProfile</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./UserProfile.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E5C07B">UserProfile</span></span>\n<span class="line"><span style="color:#D19A66">  name</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"John"</span></span>\n<span class="line"><span style="color:#D19A66">  age</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#D19A66">20</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#D19A66">  favouriteColors</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#ABB2BF">[</span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">]</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#D19A66">  isAvailable</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
      {
        fileName: "UserProfile.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">    name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> ""</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E5C07B">    age</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E5C07B">    favouriteColors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [],</span></span>\n<span class="line"><span style="color:#E5C07B">    isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">  } </span><span style="color:#56B6C2">=</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">props</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My name is </span><span style="color:#C678DD">{</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My age is </span><span style="color:#C678DD">{</span><span style="color:#E06C75">age</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My favourite colors are </span><span style="color:#C678DD">{</span><span style="color:#E5C07B">favouriteColors</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">join</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">", "</span><span style="color:#ABB2BF">)</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>I am </span><span style="color:#C678DD">{</span><span style="color:#E06C75">isAvailable</span><span style="color:#C678DD"> ?</span><span style="color:#98C379"> "available"</span><span style="color:#C678DD"> :</span><span style="color:#98C379"> "not available"</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 13,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE3WRQU_DMAyF_4qxOGxStSKOpS2aOIGEtAunZYesuCUoTaIknZiq_nfkdUzdxm7u92rn-bnHqKImzHDlrQuYYK00BczWPca9Y4EBJmhky19L5xZhRzoy28pA__HKmkgmBswwD5VXLpbCAKjWWR_hI5Bfectzofa2BYGLdAKPcwQ-CZOnp35h8slPPI-fLgS-2S8jkIFsqOgfHwaua7mznVeRXqy2PhT9WmDjiYzABARudUdj5elT4ObQo8JyJ5WWW56flsJggpF-ImbRdzQkNzK59n6ezb_6jYwqa0KEnstxQShAoMBkJLJhYDqtj-BiTShgvTlKk22ggFrqQAdlgALuHZ97Nr-K2JXv-_FdFaDnYrjLU1f-SWyAFdlcCCcjUI1OpCfoL-wtvq0yszH3-aT_FWQL_dTwMwiUp2MgZCDQ2AgTNozt5zfaDL_vS5oW0wIAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/1-props/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "emit-to-parent",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> AnswerButton</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./AnswerButton.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">true</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> onAnswerNo</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E06C75">    isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> onAnswerYes</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E06C75">    isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Are you happy?&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E5C07B">AnswerButton</span><span style="color:#D19A66"> onYes</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">onAnswerYes</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> onNo</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">onAnswerNo</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 50px;"</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">{</span><span style="color:#E06C75">isHappy</span><span style="color:#C678DD"> ?</span><span style="color:#98C379"> "😀"</span><span style="color:#C678DD"> :</span><span style="color:#98C379"> "😥"</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 17,
      },
      {
        fileName: "AnswerButton.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">onYes</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">onNo</span><span style="color:#ABB2BF"> } </span><span style="color:#56B6C2">=</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">props</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> onclick</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">onYes</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">>YES&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> onclick</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">onNo</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">>NO&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE3VRQU7DMBD8ymrFoZVCw4VLmqYqUiVO4cCpwhzSaCMsEtuyN9AQReIZ3DjxP56ATFpIobnZ4xnvzkyLLLkkjHBdSQbWYDJLijHAQpbkMLprkRvjGR7AAFVW-dvKmJl7opI9ts0cncJzrZgUO4wwdrmVhhOhAGRltGVYKfdM9qpm1goKqysQOAuH6P4ngXOhvLAkBumuM2MaWMCZ44xpwram6Z5Q1CpnqRVo1f-T6skUWv8EA2WRlY7mHu1GdBtyp4R-1kEXhz-WhIpNsrIEja7hwXOXcWgSoeIjj1ptyC3awYwOtEr1L5TqDkKvM-C4KWkhsNCKz518oQguL8xuLjBpDwstQeDn-9urQIj644fArh-NATLtGCO_cxeM1fg_7T99niSMFOv7aXubwbcz6HxPxmrjJr6j48y2h1jyUuaPPgUfSbJZ38Zh_zbGS3WXpDcD1rHb--4L6lDrMNkCAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/2-emit-to-parent/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "slot",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> FunnyButton</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./FunnyButton.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E5C07B">FunnyButton</span><span style="color:#ABB2BF">>Click me!&#x3C;/</span><span style="color:#E5C07B">FunnyButton</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
      {
        fileName: "FunnyButton.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">children</span><span style="color:#ABB2BF"> } </span><span style="color:#56B6C2">=</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">props</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span></span>\n<span class="line"><span style="color:#D19A66">  style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"background: rgba(0, 0, 0, 0.4); color: #fff; padding: 10px 20px; font-size: 30px; border: 2px solid #fff; margin: 8px; transform: scale(0.9); box-shadow: 4px 4px rgba(0, 0, 0, 0.4); transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s; outline: 0;"</span></span>\n<span class="line"><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {@</span><span style="color:#C678DD">render</span><span style="color:#61AFEF"> children</span><span style="color:#ABB2BF">()}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE3WR3W7jIBCFX2WW9sKWHNdN01WK02h_pH2BvSx7ge1xiooHBONdp1HefYUVdbNqKgESh_kOnOEg2LBFIcVP61gUojcWo5BPB8F7n_QkiEKQHtLuq_dl_I2Wk9boiJf01hEjcRRSbGIbjOetIgAzeBcYfoxE-28jsyPogxtAifLmTDz5KFEr2ty88Yo2Z0Xb79a0LzDgp805u1UkCsE4sZAcRjwWH-R4f9__eS6ef5DLIsMB2mdju4AER3iEax-cj1n-LkIzWyYq8t7ioxKNbl92wY3USQi7RmdVAadRrvIaWmddkHDV930NXnedoZ2E28pPsKz8VEPviBfRvKKEu1loXOgwSFj6CaKzpjvBgw47QxLWqYiDpti7MEiIrbaYVeVDnthpEZ915_5IWPlpnpdeNeOGjSP5zwqqchmhHRvTLhp8NRiyqrxbFXBbfr5P5Hqd1oflfQ5VrMGNbA2hhKpWQtHczMOXgNRheOtnlh9TE5vL__vr-BerxHxLwgIAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/3-slot/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "slot-fallback",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> FunnyButton</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./FunnyButton.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E5C07B">FunnyButton</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E5C07B">FunnyButton</span><span style="color:#ABB2BF">>I got content!&#x3C;/</span><span style="color:#E5C07B">FunnyButton</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
      {
        fileName: "FunnyButton.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">children</span><span style="color:#ABB2BF"> } </span><span style="color:#56B6C2">=</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">props</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span></span>\n<span class="line"><span style="color:#D19A66">  style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"background: rgba(0, 0, 0, 0.4); color: #fff; padding: 10px 20px; font-size: 30px; border: 2px solid #fff; margin: 8px; transform: scale(0.9); box-shadow: 4px 4px rgba(0, 0, 0, 0.4); transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s; outline: 0;"</span></span>\n<span class="line"><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {#</span><span style="color:#C678DD">if</span><span style="color:#E06C75"> children</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    {@</span><span style="color:#C678DD">render</span><span style="color:#61AFEF"> children</span><span style="color:#ABB2BF">()}</span></span>\n<span class="line"><span style="color:#ABB2BF">  {:</span><span style="color:#C678DD">else</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>No content found&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {/</span><span style="color:#C678DD">if</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 13,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE3WSTW_bMAyG_wqn7mADjuOm6ZDKbrDtMGCXXXacd5BtKRWmUIJEb04N__dBhpelaApIAvSQL8UPjYw0Gck4-24sgRLGNKL9xTKmtJGB8R8jo5OLDhGwjKE4xtsn5_LwWxqKrBFBXuOtRZJIgXFWhdZrR_saAfTRWU_wpUc8fe6JLILy9gg1y9cXcIlTs7LGan3W11hdKtf7l2D_FQ6WYHn6XXUZcV8jyxjJgRgn38spe6O611m8rPKq_Y1qjSQYoX3SpvMSYYJHeO-8dSFJXxXWzCGjKtDJyMeaxWkcvO2x4-APjUiKDJaVb9MSWmus53CjlCrBia7TeOBwW7gBNoUbSlAWaRX0s-RwN4PG-k56Dhs3QLBGd4v4KPxBI4dddCIvMCjrjxxCK4xMivwhjdphFZ5EZ_9w2Lph3teymuWatEX-PxQU-SZA2ze6XTXyWUufFPndNoPb_MN9VO528XzY3KdQhBJsT0aj5FCUNatxbuZ4o9W5l1MkAONHL7GT_syTdLaMXJogF6cqOIH7b_bfxwAVe1qtZzx7r7Wa4jya61_l5_QX_kVI_CwDAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/4-slot-fallback/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "context",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">setContext</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> UserProfile</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./UserProfile.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> createUserState</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./createUserState.svelte.js"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> user</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> createUserState</span><span style="color:#ABB2BF">({</span></span>\n<span class="line"><span style="color:#E06C75">    id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">    username</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"unicorn42"</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">    email</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"unicorn42@example.com"</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">  });</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  setContext</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">user</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Welcome back, </span><span style="color:#C678DD">{</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E5C07B">UserProfile</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 16,
      },
      {
        fileName: "UserProfile.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">getContext</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> user</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> getContext</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">>My Profile&#x3C;/</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Username: </span><span style="color:#C678DD">{</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Email: </span><span style="color:#C678DD">{</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">email</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> onclick</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#ABB2BF">() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Jane"</span><span style="color:#ABB2BF">)</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    Update username to Jane</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 14,
      },
      {
        fileName: "createUserState.svelte.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> function</span><span style="color:#61AFEF"> createUserState</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">initial</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> username</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> $state</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">initial</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#C678DD">  return</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">    ...</span><span style="color:#E06C75">initial</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#C678DD">    get</span><span style="color:#61AFEF"> username</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">      return</span><span style="color:#E06C75"> username</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    },</span></span>\n<span class="line"><span style="color:#C678DD">    set</span><span style="color:#61AFEF"> username</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">value</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E06C75">      username</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> value</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    },</span></span>\n<span class="line"><span style="color:#ABB2BF">  };</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 12,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE41TwYrbMBD9lUH0EIOxSejJcUxL6aVQKJTQQ9WDokwSdWXJSOOQxfjfi2wna8fZ3d7see_NjN6TGkaKNLKMfbGG8EIsZgel0bPsd8PouQpQKLCYGVGGv89Vlfgzagq1nfD4qC5DN0OeZSz30qmKCm4AVFlZR9CARxoGQgsHZ0vgrBdzth4xtx7dD2fDBldako6KySORdCgIA-snCRoJ74BBnPz1nT50kNZ4gtqjg819n0UTGABqn8Ey7r8DM5w_A85qo6R15uOKswHFUig9gT7hRZSVxkTacqC10TD7xZMFZ6ExZ3E3IBDy9GYjN_lpWfxCLW2JsBPyKYYm8JLrNm2enpYFN_nYvrTghsWsCzkjV2Mbv5Lw3N9p0g_x9xI_vp34zPzj3I25D3t17qbkp1Xx_RmGpfL0tOrLVbG9BTSzqLpyvvYx9YQusxd0VxNZA9ZIreTTpllEsClgMekFG-DsmzDIWdQWffTbah-u3o1CFjpG6Jn2TUNAaX-C_8vl1es7ject2iglvHTJ7PEgak1wqI0kZc3s1iujSAkdQXf9NRKMzv3Bjzk3R6LuOTqk2hkYnk2SJANteB3HUatFdKXdZFdo3dfbQeXHqrPQNY6ko806aKJt19y0917_af8BnSx5PAMFAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/5-context/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "input-text",
    files: [
      {
        fileName: "InputHello.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> text</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"Hello World"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">{</span><span style="color:#E06C75">text</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">value</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">text</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22PwQrCMBBEfyUsHhSKvcc04E2_wIPxkLYrBNZtaLZFCf13SQuePM4bhpnJIEEIQcOV4yRK8C1QwTMQJtD3DPKJxS0AKmD_Kuoc4zHNSFJY6xP-493AgiwJNJjUjSGKdawU4daiGrVL4gX3Di5INKjbMFLv4HBybOpfwrGJNpfEYupoHZuwLm0D93r2NGGzuaq2jqGC9YKWccLlsXwBXR6v6eAAAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/1-input-text/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "checkbox",
    files: [
      {
        fileName: "IsAvailable.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">false</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"checkbox"</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">checked</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">isAvailable</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#ABB2BF">>Is available&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22OwWrDMAyGX0WIHVbIlrvnBMpOe4Z5BztRqJinmEgtHSHvPlzWMliP36df0r-isWVCh68HGj7TfMYGJ86k6N5XtO9SZ1VggxK_Ku1LedYTZasuRaV7fpjFSEzRoddh4WJ9EIBMBqz7U-QcUybo4EEtGj1OMSvtXoL49hYP4lnK0YDHLiDrU7zuBYRarQs4_NYOCIlldBemsVv_fNmg7YP4HBNlmObl37H-TeGGvr0E-yDYoNHZ0NlypO1j-wFC9Ij6LQEAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/2-checkbox/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "radio",
    files: [
      {
        fileName: "PickPill.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> picked</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">>Picked: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">picked</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">group</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">picked</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#ABB2BF">>Blue pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">group</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">picked</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#ABB2BF">>Red pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 11,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE51Py0rFMBD9lWFwoVDtPqYB_QK5W-MibeZKcExDMilK6b9L6gu9rtzNnCdnRQnChAoPzocZOzwGpoLqfkV5TY1oAHYY3XP7blK6KguxNGx0hf7CpzkKRSmoUJcphyTGRgAmgRSmJ_IwwFkRJ3RuMZO3eHFto-6_tDZqHxZzt4sVrO-uTfcN3ekQUxUIfrA4cqXLFJgtwhiiV495rmn4NEHbMVjMbaBFWBxX-rBZhN7YqNmNxHCc8884c8uVoN263yUn3Zn8P6r3yafN32HmQP5XL3Yo9CKoJFfaHrY33bJMW7oBAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/3-radio/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "select",
    files: [
      {
        fileName: "ColorSelect.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> selectedColorId</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> $</span><span style="color:#61AFEF">state</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">2</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">3</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">4</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"gray"</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">isDisabled</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">true</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  ];</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">select</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">value</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">selectedColorId</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {#</span><span style="color:#C678DD">each</span><span style="color:#E06C75"> colors</span><span style="color:#C678DD"> as</span><span style="color:#E06C75"> color</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">option</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E5C07B">color</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">id</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> disabled</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E5C07B">color</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isDisabled</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">      {</span><span style="color:#E5C07B">color</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">text</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">option</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {/</span><span style="color:#C678DD">each</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">select</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 18,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE22QwU7DMBBEf2W1cAApakTh5CaVEFw4c6x7cOIFLBk7ijcVVeR_R47TtKLc7Hnr2RmPyIYtocB3stQyFvhhLAUUuxH52CWSBCzQqe90e-66VTiQ5aQ1KtB_eusdk-OAAqvQ9qbjrXQAlhjCtIf0i7e-f9NQw21gxXS3vt9Il6Za7wJDm3iAGnZJAxjBaAEPBTD9sACJPWmJEItLvD7jxg50xR_P_LMnclcDT5cD6iixABNeTVCNJS2A-4HmF_uNdFW5lJOuys2gMU6Lg7ID1eOfsnH6hfGGVPt1KqhCPsUco_IdG-9gNpjQyugIeg6xaEus7Dp1yCg1ONmV2S8vLtPiOOWegm2lwwLTOIpULe7jL4AVsY0RAgAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/4-select/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "render-app",
    files: [
      {
        fileName: "index.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;!</span><span style="color:#E06C75">doctype</span><span style="color:#D19A66"> html</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">html</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">body</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">div</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"app"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">script</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"module"</span><span style="color:#D19A66"> src</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"./app.js"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">body</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">html</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
      {
        fileName: "app.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">mount</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> App</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./App.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> app</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> mount</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">App</span><span style="color:#ABB2BF">, {</span></span>\n<span class="line"><span style="color:#E06C75">  target</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">document</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">getElementById</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"app"</span><span style="color:#ABB2BF">),</span></span>\n<span class="line"><span style="color:#ABB2BF">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#E06C75"> app</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello world&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/1-render-app/svelte5",
  },
  {
    frameworkId: "svelte5",
    snippetId: "fetch-data",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> useFetchUsers</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./useFetchUsers.svelte.js"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> response</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> useFetchUsers</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">{#</span><span style="color:#C678DD">if</span><span style="color:#E5C07B"> response</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isLoading</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Fetching users...&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">{:</span><span style="color:#C678DD">else if</span><span style="color:#E5C07B"> response</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>An error occurred while fetching users&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">{:</span><span style="color:#C678DD">else if</span><span style="color:#E5C07B"> response</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">users</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    {#</span><span style="color:#C678DD">each</span><span style="color:#E5C07B"> response</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">users</span><span style="color:#C678DD"> as</span><span style="color:#E06C75"> user</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;</span><span style="color:#E06C75">img</span><span style="color:#D19A66"> src</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">picture</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">thumbnail</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> alt</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">          {</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">name</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">first</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#C678DD">          {</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">name</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">last</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    {/</span><span style="color:#C678DD">each</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">{/</span><span style="color:#C678DD">if</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 23,
      },
      {
        fileName: "useFetchUsers.svelte.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">class</span><span style="color:#E5C07B"> UsersResponse</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  users</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> $state</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#E06C75">  error</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> $state</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#E06C75">  isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> $state</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">false</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> function</span><span style="color:#61AFEF"> useFetchUsers</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> resp</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> UsersResponse</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  async</span><span style="color:#C678DD"> function</span><span style="color:#61AFEF"> fetchData</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    resp</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">    try</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">      const</span><span style="color:#E5C07B"> response</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> await</span><span style="color:#61AFEF"> fetch</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"https://randomuser.me/api/?results=3"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#E5C07B">      resp</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">users</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#C678DD">await</span><span style="color:#E5C07B"> response</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">json</span><span style="color:#ABB2BF">()).</span><span style="color:#E06C75">results</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E5C07B">      resp</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">error</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> undefined</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">err</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B">      resp</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">error</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> err</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E5C07B">      resp</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">users</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> undefined</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    }</span></span>\n<span class="line"><span style="color:#E5C07B">    resp</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  fetchData</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#C678DD">  return</span><span style="color:#E06C75"> resp</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 25,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=5#H4sIAAAAAAAAE3VUwY6bMBD9lZG3h0SK4NAbgaxWqnrqqVJPpQevGRKvjEGeodkI8e-V7ZBAGm72vDdvxjMPBsGaDYpMfEdWJ6gkS7ETtTZIIvs9CL50HvUBsRNWNv721nUJ_UXDPvYuCZ_FVWsZLZPIRE7K6Y4PpQXQTdc6hp4wVPxF6Ahq1zZQiiRdhK9ayQeVYl9an61aSwwOqWstIRRLnc12X9o8vVUr7fCi6xs90fSjlZW2x9Fr5d0hpGp79DKOkiTJ0-5Q2iFDQwjzVHSudVPam4Vwh1ap3jms4HzSBqFeyK1qBTRq9SYMBWB4QalODxyQFKTGyAHIjT5MZ4BcN0cgp4rBk5JOK-4dJnzqm3crtRlBGi5K4dFSQDpP7WYXgCjgt5jU2hGPK6CRCyy-cDrfehtS_5b4wDS8cEh1PZZW7ATjJ4uMXY_jbsVdKx5YWm2dNPOdMpIIAuXnZJnBtxWnW8AXYskYbAPXlT4Eb5a5A7U0hB4dvcPwM_i5wlr2hqHurWLd2kdjxrp3-0IBFs_L3kJJT5N0seouFWz1TbKcZCBIJPPe_ET3EWN3mWhPPhh5lpqj5KYUJ-aOsjR10lZtExbdYCo7nb46pN4wFV9Lsd1PcqHuNL1N1Lp59oNau9luk2vmMmmabm8rrLXF6gqPoKT_82zQue2970UOOve8g__EVqYTVhY4Y5zwbKQh7JB7Z0NiXOzSqn_Gfxw1Tr0pBQAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/2-fetch-data/svelte5",
  },
];
export { s as default };
