var s = [
  {
    frameworkId: "aurelia2",
    snippetId: "declare-state",
    files: [
      {
        fileName: "name.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello ${name}&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "name.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Name</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/1-declare-state/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "update-state",
    files: [
      {
        fileName: "name.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello ${name}&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "name.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Name</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  constructor</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Jane"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/2-update-state/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "computed-state",
    files: [
      {
        fileName: "double-count.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">>${doubleCount}&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "double-count.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> DoubleCount</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  count</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">number</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 10</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  doubleCount</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">count</span><span style="color:#56B6C2"> *</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 4,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/3-computed-state/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "minimal-template",
    files: [
      {
        fileName: "hello-world.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello world&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/1-minimal-template/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "styling",
    files: [
      {
        fileName: "css-style.css",
        ext: "css",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#D19A66">.title</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  color: </span><span style="color:#D19A66">red</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
      {
        fileName: "css-style.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#D19A66"> class</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"title"</span><span style="color:#ABB2BF">>I am red&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 10rem"</span><span style="color:#ABB2BF">>I am a button&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 2,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/2-styling/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "loop",
    files: [
      {
        fileName: "colors.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#D19A66"> repeat.for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"color of colors"</span><span style="color:#ABB2BF">>${color}&#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
      {
        fileName: "colors.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Colors</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/3-loop/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "event-click",
    files: [
      {
        fileName: "counter.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Counter: ${count}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"incrementCount"</span><span style="color:#ABB2BF">>+1&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "counter.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Counter</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  count</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">number</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  incrementCount</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">count</span><span style="color:#56B6C2">++</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/4-event-click/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "dom-ref",
    files: [
      {
        fileName: "input-focused.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> ref</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"inputElement"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "input-focused.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> InputFocused</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  inputElement</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">HTMLInputElement</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  attached</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">inputElement</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">focus</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/5-dom-ref/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "conditional",
    files: [
      {
        fileName: "traffic-light.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"nextLight()"</span><span style="color:#ABB2BF">>Next light&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Light is: ${light}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> switch.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"light"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  You must</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#D19A66"> case</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">>STOP&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#D19A66"> case</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"orange"</span><span style="color:#ABB2BF">>SLOW DOWN&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#D19A66"> case</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">>GO&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
      {
        fileName: "traffic-light.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"orange"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> light</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">[</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  nextLight</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> +</span><span style="color:#D19A66"> 1</span><span style="color:#ABB2BF">) </span><span style="color:#56B6C2">%</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">length</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 12,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/6-conditional/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "on-mount",
    files: [
      {
        fileName: "page-title.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Page title is: ${pageTitle}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "page-title.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> PageTitle</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> ""</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  attached</span><span style="color:#ABB2BF">(): </span><span style="color:#E5C07B">void</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> document</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">title</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/1-on-mount/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "on-unmount",
    files: [
      {
        fileName: "time.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Current time: ${time}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "time.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Time</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  time</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">string</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#E06C75">  timer</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">number</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  constructor</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">timer</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> setInterval</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">      this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">    }, </span><span style="color:#D19A66">1000</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  dispose</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#61AFEF">    clearInterval</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">timer</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 14,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/2-on-unmount/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "props",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">user-profile</span></span>\n<span class="line"><span style="color:#D19A66">  name.bind</span></span>\n<span class="line"><span style="color:#D19A66">  age.bind</span></span>\n<span class="line"><span style="color:#D19A66">  favourite-colors.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"colors"</span></span>\n<span class="line"><span style="color:#D19A66">  is-available.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"available"</span></span>\n<span class="line"><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">user-profile</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
      {
        fileName: "app.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">UserProfile</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "./user-profile"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">  static</span><span style="color:#E06C75"> dependencies</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#E06C75">UserProfile</span><span style="color:#ABB2BF">]; </span><span style="color:#7F848E;font-style:italic">// static dependecies way or registered globablly</span></span>\n<span class="line"><span style="color:#E06C75">  age</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 20</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#E06C75">  available</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
      {
        fileName: "user-profile.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My name is ${name}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My age is ${age}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My favourite colors are ${favouriteColors.join(", ")}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>I am ${isAvailable ? "available" : "not available"}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 4,
      },
      {
        fileName: "user-profile.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">bindable</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "aurelia"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> UserProfile</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> ""</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> age</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> favouriteColors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [];</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/1-props/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "emit-to-parent",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Can I come ?&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">answer-button</span><span style="color:#D19A66"> action-handler.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"handleAnswer"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">answer-button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 50px"</span><span style="color:#ABB2BF">>${isHappy ? "😀" : "😥"}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
      {
        fileName: "app.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  handleAnswer</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">answer</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> answer</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  };</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
      {
        fileName: "answer-button.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"actionHandler(true)"</span><span style="color:#ABB2BF">>YES&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"actionHandler()"</span><span style="color:#ABB2BF">>NO&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "answer-button.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">bindable</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "aurelia"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> AnswerButton</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> actionHandler</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/2-emit-to-parent/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "slot",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">>Click me !&#x3C;/</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "funny-button.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">let</span></span>\n<span class="line"><span style="color:#D19A66">  style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"</span></span>\n<span class="line"><span style="color:#98C379">    color: #fff;</span></span>\n<span class="line"><span style="color:#98C379">    padding: 10px 20px;</span></span>\n<span class="line"><span style="color:#98C379">    font-size: 30px;</span></span>\n<span class="line"><span style="color:#98C379">    border: 2px solid #fff;</span></span>\n<span class="line"><span style="color:#98C379">    margin: 8px;</span></span>\n<span class="line"><span style="color:#98C379">    transform: scale(0.9);</span></span>\n<span class="line"><span style="color:#98C379">    box-shadow: 4px 4px rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">    transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;</span></span>\n<span class="line"><span style="color:#98C379">    outline: 0;</span></span>\n<span class="line"><span style="color:#98C379">    background: rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">  "</span></span>\n<span class="line"><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">let</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> style.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"style"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">au-slot</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">au-slot</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 19,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/3-slot/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "slot-fallback",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">>Click me !&#x3C;/</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "funny-button.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">let</span></span>\n<span class="line"><span style="color:#D19A66">  style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"</span></span>\n<span class="line"><span style="color:#98C379">    background: rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">    color: #fff;</span></span>\n<span class="line"><span style="color:#98C379">    padding: 10px 20px;</span></span>\n<span class="line"><span style="color:#98C379">    font-size: 30px;</span></span>\n<span class="line"><span style="color:#98C379">    border: 2px solid #fff;</span></span>\n<span class="line"><span style="color:#98C379">    margin: 8px;</span></span>\n<span class="line"><span style="color:#98C379">    transform: scale(0.9);</span></span>\n<span class="line"><span style="color:#98C379">    box-shadow: 4px 4px rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">    transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;</span></span>\n<span class="line"><span style="color:#98C379">    outline: 0;</span></span>\n<span class="line"><span style="color:#98C379">  "</span></span>\n<span class="line"><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">let</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> style.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"style"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">au-slot</span><span style="color:#ABB2BF">> No content &#x3C;/</span><span style="color:#E06C75">au-slot</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 19,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/4-slot-fallback/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "context",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Welcome back, {{ user.username }}&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">user-profile</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "app.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">user</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "./user-profile"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  user</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> user</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
      {
        fileName: "user-profile.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">>My Profile&#x3C;/</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Username: ${ user.username }&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Email: ${ user.email }&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user.username = \'Jane\'"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    Update username to Jane</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
      {
        fileName: "user-profile.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> const</span><span style="color:#E5C07B"> user</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">  username</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"unicorn42"</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">  email</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"unicorn42@example.com"</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">};</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> UserProfile</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  user</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> user</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/5-context/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "input-text",
    files: [
      {
        fileName: "input-hello.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>${text}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> value.bind</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "input-hello.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> InputHello</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  value</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">string</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Hello World"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/1-input-text/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "checkbox",
    files: [
      {
        fileName: "is-available.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"checkbox"</span><span style="color:#D19A66"> checked.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"isAvailable"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#ABB2BF">>Is available&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">>: ${isAvailable}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "is-available.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> IsAvailable</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/2-checkbox/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "radio",
    files: [
      {
        fileName: "pick-pill.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">>Picked: ${picked}&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#D19A66"> checked.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"picked"</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#ABB2BF">>Blue pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#D19A66"> checked.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"picked"</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#ABB2BF">>Red pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
      {
        fileName: "pick-pill.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> PickPill</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  picked</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/3-radio/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "select",
    files: [
      {
        fileName: "color-select.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">select</span><span style="color:#D19A66"> value.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"selectedColorId"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">option</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">""</span><span style="color:#ABB2BF">>Select A Color&#x3C;/</span><span style="color:#E06C75">option</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">option</span></span>\n<span class="line"><span style="color:#D19A66">    repeat.for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"color of colors"</span></span>\n<span class="line"><span style="color:#D19A66">    value.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"color.id"</span></span>\n<span class="line"><span style="color:#D19A66">    disabled.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"color.isDisabled"</span></span>\n<span class="line"><span style="color:#ABB2BF">  ></span></span>\n<span class="line"><span style="color:#ABB2BF">    ${color.text}</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">option</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">select</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
      {
        fileName: "color-select.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span></span>\n<span class="line"><span style="color:#ABB2BF">  { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">3</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">4</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"gray"</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">isDisabled</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">true</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">];</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Select</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  selectedColorId</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  colors</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> colors</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 11,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/4-select/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "render-app",
    files: [
      {
        fileName: "index.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;!</span><span style="color:#E06C75">doctype</span><span style="color:#D19A66"> html</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">html</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">head</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">script</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"module"</span><span style="color:#D19A66"> src</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"./main.ts"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">script</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">head</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">body</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">app</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">app</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">body</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">html</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
      {
        fileName: "main.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">Aurelia</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "aurelia"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">App</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "./app"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E5C07B">Aurelia</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">app</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">App</span><span style="color:#ABB2BF">).</span><span style="color:#61AFEF">start</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 4,
      },
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello world&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "app.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 1,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/1-render-app/aurelia2",
  },
  {
    frameworkId: "aurelia2",
    snippetId: "fetch-data",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#D19A66"> promise.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"useFetchUsers.fetchData()"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> pending</span><span style="color:#ABB2BF">>Fetching users...&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> catch</span><span style="color:#ABB2BF">>An error ocurred while fetching users&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#D19A66"> then.from-view</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"users"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#D19A66"> repeat.for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user of users"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;</span><span style="color:#E06C75">img</span><span style="color:#D19A66"> src.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user.picture.thumbnail"</span><span style="color:#D19A66"> alt</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>${ user.name.first } ${ user.name.last }&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
      {
        fileName: "app.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">UseFetchUsers</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "./UseFetchUsers"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">  constructor</span><span style="color:#ABB2BF">(</span><span style="color:#C678DD">private</span><span style="color:#E06C75;font-style:italic"> useFetchUsers</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">UseFetchUsers</span><span style="color:#ABB2BF">) {}</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
      {
        fileName: "UseFetchUsers.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> UseFetchUsers</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  data</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  error</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  async</span><span style="color:#61AFEF"> fetchData</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">    try</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">      const</span><span style="color:#E5C07B"> response</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> await</span><span style="color:#61AFEF"> fetch</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"https://randomuser.me/api/?results=3"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#C678DD">      const</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">results</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">users</span><span style="color:#ABB2BF"> } </span><span style="color:#56B6C2">=</span><span style="color:#C678DD"> await</span><span style="color:#E5C07B"> response</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">json</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#E5C07B">      this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">data</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> users</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E5C07B">      this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">error</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">err</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B">      this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">data</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E5C07B">      this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">error</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> err</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    }</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 19,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/2-fetch-data/aurelia2",
  },
];
export { s as default };
