var s = [
  {
    frameworkId: "svelte4",
    snippetId: "declare-state",
    files: [
      {
        fileName: "Name.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello </span><span style="color:#C678DD">{</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE23KQQrCMBBG4asM_7pYuo2xILgQr2BcxDLSwjgNzShK6N0lLly5fI-vwCYThsOBB4kLU7ZojAa3STjDnQvsnSqoAw003mvtU9rkJ8vXXmPmf3-Y1Vgtw8HnYZmS9UGJhI0qpx0FnOZRA7ZBffsjQf3Y9UcWmalUufp27PqgaGD8MjhbHrxe1g-9qsU-vwAAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/1-declare-state/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "update-state",
    files: [
      {
        fileName: "Name.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Jane"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello </span><span style="color:#C678DD">{</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE23LMQvCMBCG4b9yfHOxdI2x4CbuTo1DrCctxGtoTlFC_7ukgy6O99z7ZeiogWFwilevTEm9MircxsAJpsvQdyz_Aqgg_l6ufYyb9OSwthef-J_3kyiLJhjY1M9j1NYJUWClktOOHI7TIA7b4j_zwqvZ-jtzYoemPXAIE-VSLrYemtYJKii_FEbnBy_n5QMM2p9P0gAAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/2-update-state/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "computed-state",
    files: [
      {
        fileName: "DoubleCount.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> count</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 10</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  $: </span><span style="color:#E06C75">doubleCount</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> count</span><span style="color:#56B6C2"> *</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">{</span><span style="color:#E06C75">doubleCount</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE23LTQrCMBCG4asMgyspVl2msSA9hnHRnxEC6SQ0k6KU3l2iIi5czjPvt6BYcYQKGz-GJDRAlFYIC7xZRxHVZUF5hFxkwAK5HfN1DmEXZ3Kvtmsj_fPesxBLRIU69pMNUhsGcCTQ-8QCJzjsq0wbBYNPnaPm4-__Fo6VYV1-x4b1YOd6-YlXXWYyjAUK3QWVTInW6_oEFb0fHN0AAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/3-computed-state/svelte4",
  },
  {
    frameworkId: "svelte4",
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
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE23KTQrCMBRF4a2UOw5Kp6EUnDlxBeog6pUGXl5C8_yjdO8Sxw7Px1lg0YTwOESNKUhnTEWCEQ73KKzwxwX2Ke1pAAcNqdWulE19Un7vJVT-82tWo1qFxzD1454iuXvlWW7DdurHk8LB-DZ4mx9cz-sXvBTxL5IAAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/1-minimal-template/svelte4",
  },
  {
    frameworkId: "svelte4",
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
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE22NwQ6CMAyGX6XpGUWuc5B49OzReZhYhGR0ZCtGJLy7mYSbp7Zf_z_fjNKJI1R4kcl1_MQMm85RRHWdUaYhvRLADNn26ToNwz6-yElidxvpH689C7FEVKjbAmpnYyzNKjNYncH2EOih87aoDOv7KOIZokyOSoONZ9nF7kMKikOg_rhVLKxJna-zMmxY_2qVYYD9TwBz2gFq73xQyXNMYDGs8y2LGQq9BZWEkZbb8gWeaYnpCQEAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/2-styling/svelte4",
  },
  {
    frameworkId: "svelte4",
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
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE22MwQrCMBBEf2UZLwrF3msUvPsHxkONqwZiEpKtKCX_LmnRk6edfcy8EWLFMTocQohocLWOM7rjCHnHyitAA98_6rePcZ2f7KSyc5_5HzfBC3vJ6KCySTbKTnsiE3wWMsGFlGlLR43EF42GNG6J2c_x7AbWOG20V-1vrL0a3CQZF9yb-9fS5znRcjqrUitEytndOJGiWmfnYVuHpWonFRoIvwSdpIHLqXwAsUPXRAoBAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/3-loop/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "event-click",
    files: [
      {
        fileName: "Counter.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> count</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> incrementCount</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E06C75">    count</span><span style="color:#56B6C2">++</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Counter: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">count</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#C678DD"> on</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">click</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">incrementCount</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">>+1&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE22PwaoCMQxFfyVkpczg6LbWgohfYV1oiVBeTcs0I0rpv0tHEIS3vOeeXEhB8RIIFR4fxAIuePeHPd58oIzqVFBeqdUNYI98ube0T2mVHxSksesl03_cRRZiyahQZzf6JMYyQCABFycW2MF6a7mx28ROfGTw7Ea6E8uhGYsllFbD56Drti1Vy3r4DlrWycw2jQrKLFY9JGNZXyeRyBBZzX_tyu98Nd1GDx_JWMYehZ6CSsaJ6rm-AbV751scAQAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/4-event-click/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "dom-ref",
    files: [
      {
        fileName: "InputFocused.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">onMount</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> inputElement</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  onMount</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">    inputElement</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">focus</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">  });</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">inputElement</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 11,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE22NQQrCMBBFrzLMqkLRfawFQZeewLjQOsVAMgnJVJSQu0tURMHV8N9_n8koRiyhwo13EGnEFkdjKaHaZ5R7qFUF2CIfXU3rEObpSlYqOx0T_eODZyGWhAq7NEQTpNcMYFzwUSCD552fWKDAGL0Dja-lxqXmKloSMBwm2VpyxPLG71nTzGDVQ64Ifrz56IcpNbNlrUo93eLzX3P3dOFk-KzkYtIqf48LLHrN2KLQTVBJnKgcygP3pMAwIwEAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/5-dom-ref/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "conditional",
    files: [
      {
        fileName: "TrafficLight.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"orange"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  $: </span><span style="color:#E06C75">light</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">[</span><span style="color:#E06C75">lightIndex</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> nextLight</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E06C75">    lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> +</span><span style="color:#D19A66"> 1</span><span style="color:#ABB2BF">) </span><span style="color:#56B6C2">%</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">length</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#C678DD"> on</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">click</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">nextLight</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">>Next light&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Light is: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">light</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  You must</span></span>\n<span class="line"><span style="color:#ABB2BF">  {#</span><span style="color:#C678DD">if</span><span style="color:#E06C75"> light</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>STOP&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {:</span><span style="color:#C678DD">else if</span><span style="color:#E06C75"> light</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "orange"</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>SLOW DOWN&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {:</span><span style="color:#C678DD">else if</span><span style="color:#E06C75"> light</span><span style="color:#56B6C2"> ===</span><span style="color:#98C379"> "green"</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>GO&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {/</span><span style="color:#C678DD">if</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 23,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE4VRYUvDQAz9KyEqbDisfq1tQZTpYGziBkN2Q2qXdodnWnqpTEr_u1y7qRuC35L38pJ772oULYbQx9uc11p0zrHBAabakEV_WaN8Fo52AA6Q43fX3RTFhf0gIw57jS39hSc5C7FY9DGwSakLiRQDJDlbgfnTzXA4un0Zj-4f5jMIYamwpLXCASjMy5gz6uqsJGKFq2unNSRgdLaREa9pCyFcXit2xKnf4RAebV7-jK92s2nFiTMKTFsZO7rXh9oxcLi896s7h6s-nB0tvzDEmWzapzWKA-_bpuLgtRLJGXL2E6OTt7D-PtdEE9rujAReNxcpDoqopUFbH-qWbQKv6Bh34jmv4L2y4ur6RKd7y2EIu_CazkVgi5ij2Xz6GHht2Sp8MpbgSLaP-lA5ni7gbrqY_Cvf_c6B-n76W-bptI3GWcABCm0FfSkralbNF1zDxEx-AgAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/6-conditional/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "on-mount",
    files: [
      {
        fileName: "PageTitle.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">onMount</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> ""</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#61AFEF">  onMount</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">    pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> document</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">title</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  });</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Page title: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">pageTitle</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE22PwWrDMBBEf2WZUwImuSuOIR9QmkNuUQ-usw4GayWsdWgR-vciNxgCOe6bmd3ZBB10ZBh8Cjk_i6JCP4wcYa4J-huKVgAqSOvKdAphFx88amHfbeR3vPOiLBphUMduGoI2VogGF_yklMjLR7lGmfrJO7L4T1ocim1kpdDe-VLK0ZEsnsIzttls6dhQKohenDffzY5Fd8tfSyZvD1bq_drCSh2ac3tnWjyG0rog1_vQWEEF5R-F0Wnm_JX_AJIc4g4mAQAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/1-on-mount/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "on-unmount",
    files: [
      {
        fileName: "Time.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">onDestroy</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> timer</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> setInterval</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">    time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">  }, </span><span style="color:#D19A66">1000</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  onDestroy</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#61AFEF"> clearInterval</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">timer</span><span style="color:#ABB2BF">));</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Current time: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">time</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 13,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE41PTUvEQAz9KyGnFspuvdZuQdyLIHjQm-NhLFkZmMkMmXR1Kf3vMnbtyYOnkJf3lRnVqSfs8Ilh4hAnVmzw5Dxl7F5n1Esq1wJgg2xD2e5S2uUzeS3Yu830Fz5GVmLN2GGfR3FJB8MALqQoCjNEPlJWiRdY4CQxgMFVa_DWcKF6UlAXCA7A9AlHq1TVO42PcbSeXlygZxXHH1V9FYyR8yoROEAmfWAlOVtfVTUcBpgLCf7vCbA0cNO27W_A1vlqOHqysoX8BNeF2--3jw33abifRIjXah3MZSz9Pg2GsUGlL8VOZaLlbfkGuEvJ4JEBAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/2-on-unmount/svelte4",
  },
  {
    frameworkId: "svelte4",
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
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  export</span><span style="color:#C678DD"> let</span><span style="color:#E06C75"> name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> ""</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">  export</span><span style="color:#C678DD"> let</span><span style="color:#E06C75"> age</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">  export</span><span style="color:#C678DD"> let</span><span style="color:#E06C75"> favouriteColors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [];</span></span>\n<span class="line"><span style="color:#C678DD">  export</span><span style="color:#C678DD"> let</span><span style="color:#E06C75"> isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My name is </span><span style="color:#C678DD">{</span><span style="color:#E06C75">name</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My age is </span><span style="color:#C678DD">{</span><span style="color:#E06C75">age</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My favourite colors are </span><span style="color:#C678DD">{</span><span style="color:#E5C07B">favouriteColors</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">join</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">", "</span><span style="color:#ABB2BF">)</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>I am </span><span style="color:#C678DD">{</span><span style="color:#E06C75">isAvailable</span><span style="color:#C678DD"> ?</span><span style="color:#98C379"> "available"</span><span style="color:#C678DD"> :</span><span style="color:#98C379"> "not available"</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 11,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE3VRwU7DMAz9FeMTSNWKOJa2aOIEEtIunOYdsuGWoDSJknTaVPXfUVqYum67Oe_5Oc_PHQYZFGOGK2esxwQrqdhjtu4wHG0kIoAJatHE19Lahd-zChHbCs_X8J3RgXXwmGHud07aUJIGkI01LsCnZ7dyJs6FypkGCBfpBPybQ_hMOk9PetL5pCnOi18XhO_mWxNGQNRcdE-PfawrsTetk4FfjTLOF92asHbMmjABwq1qeawcfxFuBo30y72QSmzj_LQkjQkGPgTMgmu5T25kcun9PJur_I2M-DBkpDgM60EBhEMSZ5SoI6NbpebMbG0oYL2Z90zWhAIqoTxfRG3Lj-PoQHroYtHf5akt_6noIDKinhEnA7AbHQjH0M1sLX6M1Pdj_g8T_RuIBrqpvxcgFKejIGRAqE2ACdaP8vNbbfpfW-VOE9sCAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/1-props/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "emit-to-parent",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> AnswerButton</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./AnswerButton.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> onAnswerNo</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E06C75">    isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> onAnswerYes</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E06C75">    isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Are you happy?&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E5C07B">AnswerButton</span><span style="color:#C678DD"> on</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">yes</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">onAnswerYes</span><span style="color:#C678DD">}</span><span style="color:#C678DD"> on</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">no</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">onAnswerNo</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 50px;"</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">{</span><span style="color:#E06C75">isHappy</span><span style="color:#C678DD"> ?</span><span style="color:#98C379"> "😀"</span><span style="color:#C678DD"> :</span><span style="color:#98C379"> "😥"</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 17,
      },
      {
        fileName: "AnswerButton.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">createEventDispatcher</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> dispatch</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> createEventDispatcher</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> clickYes</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#61AFEF">    dispatch</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"yes"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  function</span><span style="color:#61AFEF"> clickNo</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#61AFEF">    dispatch</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"no"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#C678DD"> on</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">click</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">clickYes</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">> YES &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#C678DD"> on</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">click</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">clickNo</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">> NO &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 17,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE32Sv27bMBCHX-Vwkw24VpcusqTARQ10codMQZhBVk4IUflIkOckikAgj5GtU96vj1DQ_yK7cjbpx9_HI_WpQ9HSEKa4WGsBMWBLRyw4wVo35DG97VBaGxsxwAlyuY5vc2un_pEaidmq9DSUV4aFWDymmPnKaSuFYgC9tsYJzNk_kfu-ETEMtTNrUDhN-ul-J4UzxRFsSED7n6W1LeQgbkP7hXrDlWjDYHjHL81oDF1cgh5Rl42PCEC4wN2QHwL3o7ZclhyvojizxdwRtGYDD7F7lSW2UJyd3M1w2pLPu96QEEM2H9nSBEgiacFL21CusDYsX7x-oRS-fbXPM4VFdzjSFSj8--ftVSGku8d3hWE3HCco9CyYxlOHySWB_3_nM5ODhc-VdlA5KoUWj8TyQ3tbSvVADsLB75nQyrAXuN8XIR_GR-NzzVWjq98nrg57jBS25BWOBzVvuf6_0cPY9KhTyaujx-0GeXeYHwq4WVxDluwan7WXJhSw_NXvnoq6C_8AM87n2o4DAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/2-emit-to-parent/svelte4",
  },
  {
    frameworkId: "svelte4",
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
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span></span>\n<span class="line"><span style="color:#D19A66">  style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"background: rgba(0, 0, 0, 0.4); color: #fff; padding: 10px 20px; font-size: 30px; border: 2px solid #fff; margin: 8px; transform: scale(0.9); box-shadow: 4px 4px rgba(0, 0, 0, 0.4); transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s; outline: 0;"</span></span>\n<span class="line"><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#C678DD">slot</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE3WR0WrjMBBFf2V2-pKA4zhpUlLZDewW-gN9rPog23IqKo-ENN51WvrvRSZ0UzYLkkB35ox0ue_Ihq1GgY_WMWbYGasjiqd35KNPehIwQ1J9uv30Po-_teWk1SrqS3rjiDVxRIFVbILxvJcEYHrvAsPDQHT8NTA7gi64HiTmyzPxNEdiKalafvGSqrOm_b01zSv0-kd1zu4lYYasR0bBYdAf2X98_Pvedz8X6-e-6qmWbEU-Wn0nsVbN6yG4gVoB4VCrWZHBaeWbeQmNsy4IuOq6rgSv2tbQQcCq8COsCz-W0DniRTRvWsD1JNQutDoIWPsRorOmPcG9CgdDAnapiYOi2LnQC4iNsnpW5LfzxI6L-KJa90fAxo_TvvSrCTdsHIm_o6DI1xGaoTbNotZvRodZkV9vMljlN9tE7nbpvF1v51DEEtzA1pAWUJQSJU1pV9E6huU-hVhfDuf54xMUsbRFfwIAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/3-slot/svelte4",
  },
  {
    frameworkId: "svelte4",
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
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span></span>\n<span class="line"><span style="color:#D19A66">  style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"background: rgba(0, 0, 0, 0.4); color: #fff; padding: 10px 20px; font-size: 30px; border: 2px solid #fff; margin: 8px; transform: scale(0.9); box-shadow: 4px 4px rgba(0, 0, 0, 0.4); transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s; outline: 0;"</span></span>\n<span class="line"><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#C678DD">slot</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>No content found&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#C678DD">slot</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE3VSwW7bMAz9FU67JIBju2k6pLJrYDsM2GWXHaceZFvyhMmUINGb06L_Pshz2xTLAEmQHvkoPpKPjAxZxTj7Zh2Blta2svvJMqaNVZHx74-MTj45JIBlDOWYXh-9z-MvZSlhrYzqEt45JIUUGWd17ILx1AgEMKN3geDzhHj6NBE5BB3cCILlxRm4xhGsElgXL3yB9TmzaN4CzRcYHMH69bv6PGIjkGWM1EyMU5jUU_Yfdf9m8VblRfu52naxJbGRTlbdCZbKOgQ3Yc8hDK3clBmsKz9sK-icdYHDe611BV72vcGBw1XpZ9iXfq5AO6RdNA-Kw_UCtC70KnDY-xmis6ZfyaMMg0EOx-REQWLULowcYiet2pT57TZx5138IXv3m8PBz8u-lNVCN2Qc8tdQUOb7CN3Umm7XqgejwqbMrw8ZXOUfbhLzeEzn7f5mC2WswE1kDSoOZSWYwGUG6mjd32lIdy-x-eqemwY6lakuFnhxLlbvumgvN_L-6Q9CMqGyygIAAA==",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/4-slot-fallback/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "context",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">setContext</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> UserProfile</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./UserProfile.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> createUserStore</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./createUserStore.js"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> userStore</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> createUserStore</span><span style="color:#ABB2BF">({</span></span>\n<span class="line"><span style="color:#E06C75">    id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">    username</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"unicorn42"</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">    email</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"unicorn42@example.com"</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">  });</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  setContext</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">userStore</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Welcome back, </span><span style="color:#C678DD">{</span><span style="color:#ABB2BF">$</span><span style="color:#E5C07B">userStore</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E5C07B">UserProfile</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 16,
      },
      {
        fileName: "UserProfile.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">getContext</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> userStore</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> getContext</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">>My Profile&#x3C;/</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Username: </span><span style="color:#C678DD">{</span><span style="color:#ABB2BF">$</span><span style="color:#E5C07B">userStore</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Email: </span><span style="color:#C678DD">{</span><span style="color:#ABB2BF">$</span><span style="color:#E5C07B">userStore</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">email</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#C678DD"> on</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">click</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#ABB2BF">() </span><span style="color:#C678DD">=></span><span style="color:#E5C07B"> userStore</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">updateUsername</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"Jane"</span><span style="color:#ABB2BF">)</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    Update username to Jane</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 14,
      },
      {
        fileName: "createUserStore.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">writable</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte/store"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> function</span><span style="color:#61AFEF"> createUserStore</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">initialData</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> userStore</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> writable</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">initialData</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  return</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">    subscribe</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">userStore</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">subscribe</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#61AFEF">    updateUsername</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">newUsername</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B">      userStore</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">update</span><span style="color:#ABB2BF">((</span><span style="color:#E06C75;font-style:italic">userData</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> ({</span></span>\n<span class="line"><span style="color:#ABB2BF">        ...</span><span style="color:#E06C75">userData</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">        username</span><span style="color:#ABB2BF">: </span><span style="color:#E06C75">newUsername</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">      }));</span></span>\n<span class="line"><span style="color:#ABB2BF">    },</span></span>\n<span class="line"><span style="color:#ABB2BF">  };</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 15,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE42UTY-bMBCG_8rI6gEkBErUEyGoVdtLpUqVqqiHugdDJht3wUb2sJsV4r9X5isksNvenHnfGQ_zjNMwklQgi9knrQgvxAJ2kgVaFv9qGL1UTnIBFjAlSvfrY1WF9gkLcrFMWFyL566aIstiltjcyIpSrgBkWWlD0IBFGi6EFk5Gl8BZn8zZbuY8WDTfjXYdjLYwmgXDtaTcoCB0rh-kzSzxTgj_2C7RpeZaWYJ6ytnfV_EaZwOQxxg2QX92dvf1MXBWK5lro95vORtULIUsbqQPeBFlVWCY63Kwtf7QwHUiHmeuMGfBtR_nSqJpklwl5036E4tclwiZyB8DaN5N7nBsrE2i8yblKpnPMUq5YgHraMdkamyDV1AvB32LfFX_F_qHt9Gvw3hYTmc5kqN86q5Kztv02wsMnSXReduHq_QwAXtlWtXo_NLDm9s6nldPVhNpBVrFeSHzx33j-bBPYVa2Og4L5Ip7nH0VCjnz27Tfj0OnT0sEpKFzuOJRX92hi_rP-j9iyw2_Jbaqz4hNlJ6NJJEVeM8osi5vIIWXzn3Ek6gLglOtcpJaLZ6OVJKkKD4LEj4064THC2_Mwz4YpNooGF6grTNHPcN4NuwpOD7N2-ErfB7P_lgHFqw8z0X6NvcpeJMRIAzDUQuu0esfwOyCSW99f9ef2_6t77hq70n-bv8Ct4ioEIQFAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/5-context/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "input-text",
    files: [
      {
        fileName: "InputHello.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> text</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Hello World"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span><span style="color:#C678DD">{</span><span style="color:#E06C75">text</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">value</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">text</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE22OzQrCMBCEXyXMudh7TAPe9Ak8GA_9WSGwbkOzLUrpu0sqePI433wws0KjMsHiImlWo_RSVHhEpgx7W6HvVNoCUEHaZ0mnlA55IdbCujbTP96PoiSaYeFyP8WkPogxTN8V05iAMzGP5jpOPAQcg7j6ZwZxya_F3FydfBAX94ddlMEuLc_UfFtT-yCosF-3Os203bcPyS6hydgAAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/1-input-text/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "checkbox",
    files: [
      {
        fileName: "IsAvailable.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"checkbox"</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">checked</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">isAvailable</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#ABB2BF">>Is available&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE22OwWrDMBBEf2XZs1PfFdkQeuo3VDlI9pos3a6FtQkJxv8eFNpQaI7z5jHMisYmhA7fTzR8pfmKDU4sVNB9rmi3XLsKsEGN3zUdcn4rFxKrLMVCr_gwq5FaQYe-DAtn64MCCBlwOVwiS0xC0MEUpdA-qG-fWlDPms8GPHYBuezirx8Q6qUu4PBzNyAk1tE9Mo3d-md9g7YP6iUmEpjm5d9Y_1HgGX37EPug2KDR1dDZcqbtuN0BdHqnjCUBAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/2-checkbox/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "radio",
    files: [
      {
        fileName: "PickPill.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> picked</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">>Picked: </span><span style="color:#C678DD">{</span><span style="color:#E06C75">picked</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">group</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">picked</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#ABB2BF">>Blue pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">group</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">picked</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#ABB2BF">>Red pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 11,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE51Py07EMAz8FcvnQu8hrQRfgPa65tA2XhRh0ihxql1V_XeU8hIsJ272PDyeFdWrMBo8DM7P2ODJC2c0xxX1EitRAWwwDK91u4_xNi8sWrFxyPwXPs1BOWhGgzZPyUftKQAIK0Q_vbCDDggTO8I7Crb90lCwzi_94y4ysL6rN9tWdKd9iEXBu45wlMI30YsQwuiDM89pLrH7NEH9vyNMtRghLIMU_rARQttTsDKMLHCa089z_YMUhjrbdpdcZSd2_4jeG18nfx_rD-x-5WKDymdFo6nw9rS9AQeNRgWyAQAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/3-radio/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "select",
    files: [
      {
        fileName: "ColorSelect.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> selectedColorId</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">3</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">4</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"gray"</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">isDisabled</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">true</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  ];</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">select</span><span style="color:#C678DD"> bind</span><span style="color:#ABB2BF">:</span><span style="color:#E5C07B">value</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E06C75">selectedColorId</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {#</span><span style="color:#C678DD">each</span><span style="color:#E06C75"> colors</span><span style="color:#C678DD"> as</span><span style="color:#E06C75"> color</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">option</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E5C07B">color</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">id</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> disabled</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E5C07B">color</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isDisabled</span><span style="color:#C678DD">}</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">      {</span><span style="color:#E5C07B">color</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">text</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">option</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {/</span><span style="color:#C678DD">each</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">select</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 18,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE22PwU7DMAyGX8Uy12oVg1PWTZrgwpnjskPaGIgUkqpxJ6Yq746SdN3EuDX_59r_NyEbtoQC38lSx1jhh7EUUBwm5HOfSAqwQqe-02vf96twIsspa1Wg__LOOybHAQU2oRtMzzvpACwxhHyH9Iu3fnjTsIX1RrpEO-8CQ5fyAFs4pAxgAqMFPFbA9MMCJA6kJUKsbvH6ils70h1_uvLPgcjdDTzfDqizxApMeDVBtZa0AB5Gmv84bqRr6kVKuqYYQWucFidlR9pOfyRjtp8eSHVfF0EVylcsNRrfs_EO5gUZrYyOoOcSS7bUKluzQ0HJ4LKuLvvK4Todjrl3LraTDitM4yiSWjzGX14VuXQJAgAA",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/4-select/svelte4",
  },
  {
    frameworkId: "svelte4",
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
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> App</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./App.svelte"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> app</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> App</span><span style="color:#ABB2BF">({</span></span>\n<span class="line"><span style="color:#E06C75">  target</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">document</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">getElementById</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"app"</span><span style="color:#ABB2BF">),</span></span>\n<span class="line"><span style="color:#ABB2BF">});</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#E06C75"> app</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
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
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/1-render-app/svelte4",
  },
  {
    frameworkId: "svelte4",
    snippetId: "fetch-data",
    files: [
      {
        fileName: "App.svelte",
        ext: "svelte",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">  import</span><span style="color:#E06C75"> useFetchUsers</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "./useFetchUsers"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#ABB2BF"> { </span><span style="color:#E5C07B">isLoading</span><span style="color:#ABB2BF">, </span><span style="color:#E5C07B">error</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">data</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">users</span><span style="color:#ABB2BF"> } </span><span style="color:#56B6C2">=</span><span style="color:#61AFEF"> useFetchUsers</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">{#</span><span style="color:#C678DD">if</span><span style="color:#ABB2BF"> $</span><span style="color:#E06C75">isLoading</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Fetching users...&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">{:</span><span style="color:#C678DD">else if</span><span style="color:#ABB2BF"> $</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>An error occurred while fetching users&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">{:</span><span style="color:#C678DD">else if</span><span style="color:#ABB2BF"> $</span><span style="color:#E06C75">users</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    {#</span><span style="color:#C678DD">each</span><span style="color:#ABB2BF"> $</span><span style="color:#E06C75">users</span><span style="color:#C678DD"> as</span><span style="color:#E06C75"> user</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;</span><span style="color:#E06C75">img</span><span style="color:#D19A66"> src</span><span style="color:#ABB2BF">=</span><span style="color:#C678DD">{</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">picture</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">thumbnail</span><span style="color:#C678DD">}</span><span style="color:#D19A66"> alt</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#C678DD">          {</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">name</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">first</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#C678DD">          {</span><span style="color:#E5C07B">user</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">name</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">last</span><span style="color:#C678DD">}</span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    {/</span><span style="color:#C678DD">each</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">{/</span><span style="color:#C678DD">if</span><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 23,
      },
      {
        fileName: "useFetchUsers.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">writable</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "svelte/store"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> function</span><span style="color:#61AFEF"> useFetchUsers</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> data</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> writable</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> error</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> writable</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#C678DD">  const</span><span style="color:#E5C07B"> isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> writable</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">false</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  async</span><span style="color:#C678DD"> function</span><span style="color:#61AFEF"> fetchData</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    isLoading</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">set</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">true</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#C678DD">    try</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">      const</span><span style="color:#E5C07B"> response</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> await</span><span style="color:#61AFEF"> fetch</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"https://randomuser.me/api/?results=3"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#C678DD">      const</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">results</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">users</span><span style="color:#ABB2BF"> } </span><span style="color:#56B6C2">=</span><span style="color:#C678DD"> await</span><span style="color:#E5C07B"> response</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">json</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#E5C07B">      data</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">set</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">users</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#E5C07B">      error</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">set</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">    } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">err</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B">      data</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">set</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#E5C07B">      error</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">set</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">err</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">    }</span></span>\n<span class="line"><span style="color:#E5C07B">    isLoading</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">set</span><span style="color:#ABB2BF">(</span><span style="color:#D19A66">false</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#61AFEF">  fetchData</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  return</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">isLoading</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">data</span><span style="color:#ABB2BF"> };</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 24,
      },
    ],
    playgroundURL:
      "https://svelte.dev/playground/untitled?version=4#H4sIAAAAAAAAE3VUu47bMBD8lQUvhQ0IUpFOlhwcEKRKmypMQcurMw8UKXBX8RmC_j0g9XTO7qidndkHR-wFazYocvEDubrAWbESiai1QRL5717wrQ1oCIhEWNWEr9e2TekvGg6xkyJ8FK-cZbRMIhcFVV63fJQWQDet8wwdYaz4i9AT1N41IEWa3YWlOEgbOJWzxNCDpp9OnbV9SwC9dz6J_eZBzBMMUN7L7vYHaYtsKS5t_6Jr-LLIDEG8aI-Rou3bKJSmaZG1R2n7HA0hBEosN6e_2rE8uKrqvMczXC_aINR3Mp80YnTU6EzcBUD_gqq6TBgoitRhxAAKo4_zGaDQzRuQr8o-JKWtrrjzmPKla05WaTOAMlxKEVApINtS280HwCgQLi2ttScenoBG3WHjRPN56a3PwgzjYFmcrM90PUgrEsH4wSJn3-GQPDHT3ZWl73RvqQfoxliTmXq4es3qZBCG2UujDzNi53EyEn7E7DPWqjMMdWcr1s7-bxroV88Ff0G5yEdHzdjogSfg4rFtQq0M4X4ytaKbrdYmonm-K1ZzA7BqpIS8C0scKwCwv81Jc0GP1DpLCCWoq9I8Cu6kuDC3lGeZV_bsmni5DWaq1dk3j9QZpvKrFLPy-rNN4PbvGoXnSuk7ObtbiWFXsdNIWONxTxGYYwNUKrw2O_R-vw6yCDzihtSZ_mg9y24nfLPPaeEeufP26TMCw0HaT679M_wDC9ooTyMFAAA=",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/2-fetch-data/svelte4",
  },
];
export { s as default };
