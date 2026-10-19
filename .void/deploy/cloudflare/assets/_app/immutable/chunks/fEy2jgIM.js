var s = [
  {
    frameworkId: "aurelia1",
    snippetId: "declare-state",
    files: [
      {
        fileName: "name.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello ${name}&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
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
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/1-declare-state/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "update-state",
    files: [
      {
        fileName: "name.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello ${name}&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
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
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/2-update-state/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "computed-state",
    files: [
      {
        fileName: "double-count.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">>${doubleCount}&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
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
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/3-computed-state/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "minimal-template",
    files: [
      {
        fileName: "hello-world.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello world&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/1-minimal-template/aurelia1",
  },
  {
    frameworkId: "aurelia1",
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
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">require</span><span style="color:#D19A66"> from</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"./styling.css"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">require</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#D19A66"> class</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"title"</span><span style="color:#ABB2BF">>I am red&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 10rem"</span><span style="color:#ABB2BF">>I am a button&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/2-styling/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "loop",
    files: [
      {
        fileName: "colors.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#D19A66"> repeat.for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"color of colors"</span><span style="color:#ABB2BF">>${color}&#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
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
      "https://github.com/matschik/component-party/tree/main/content/2-templating/3-loop/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "event-click",
    files: [
      {
        fileName: "counter.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Counter: ${count}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"incrementCount()"</span><span style="color:#ABB2BF">>+1&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 4,
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
      "https://github.com/matschik/component-party/tree/main/content/2-templating/4-event-click/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "dom-ref",
    files: [
      {
        fileName: "input-focused.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> ref</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"inputElement"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
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
      "https://github.com/matschik/component-party/tree/main/content/2-templating/5-dom-ref/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "conditional",
    files: [
      {
        fileName: "traffic-light.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"nextLight()"</span><span style="color:#ABB2BF">>Next light&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Light is: ${light}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    You must</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#D19A66"> if.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"light === \'red\'"</span><span style="color:#ABB2BF">>STOP&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#D19A66"> if.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"light === \'orange\'"</span><span style="color:#ABB2BF">>SLOW DOWN&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#D19A66"> if.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"light === \'green\'"</span><span style="color:#ABB2BF">>GO&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
      {
        fileName: "traffic-light.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  TRAFFIC_LIGHTS</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"orange"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#E06C75">  lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  light</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">string</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">[</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  nextLight</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> +</span><span style="color:#D19A66"> 1</span><span style="color:#ABB2BF">) </span><span style="color:#56B6C2">%</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">length</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">light</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">[</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/6-conditional/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "on-mount",
    files: [
      {
        fileName: "page-title.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Page title is: ${pageTitle}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
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
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/1-on-mount/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "on-unmount",
    files: [
      {
        fileName: "time.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Current time: ${time}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
      {
        fileName: "time.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Time</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  time</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">string</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#E06C75">  timer</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">any</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  constructor</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">timer</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> setInterval</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">      this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">    }, </span><span style="color:#D19A66">1000</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  detached</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#61AFEF">    clearInterval</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">timer</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 14,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/2-on-unmount/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "props",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">require</span><span style="color:#D19A66"> from</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"./user-profile"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">require</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">user-profile</span></span>\n<span class="line"><span style="color:#D19A66">    name.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"name"</span></span>\n<span class="line"><span style="color:#D19A66">    age.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"age"</span></span>\n<span class="line"><span style="color:#D19A66">    favourite-colors.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"colors"</span></span>\n<span class="line"><span style="color:#D19A66">    is-available.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"available"</span></span>\n<span class="line"><span style="color:#ABB2BF">  >&#x3C;/</span><span style="color:#E06C75">user-profile</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
      {
        fileName: "app.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  age</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 20</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E06C75">  colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#E06C75">  available</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
      {
        fileName: "user-profile.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My name is ${name}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My age is ${age}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My favourite colors are ${favouriteColors.join(", ")}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>I am ${isAvailable ? "available" : "not available"}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
      {
        fileName: "user-profile.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">customElement</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">bindable</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "aurelia-templating"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">@</span><span style="color:#61AFEF">customElement</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"user-profile"</span><span style="color:#ABB2BF">)</span></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> UserProfile</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> ""</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> age</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> favouriteColors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [];</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/1-props/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "emit-to-parent",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">require</span><span style="color:#D19A66"> from</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"./answer-button"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">require</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Can I come ?&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">answer-button</span><span style="color:#D19A66"> action-handler.call</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"handleAnswer(reply)"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">answer-button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 50px"</span><span style="color:#ABB2BF">>${isHappy ? "😀" : "😥"}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
      {
        fileName: "app.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  handleAnswer</span><span style="color:#ABB2BF">(...</span><span style="color:#E06C75;font-style:italic">reply</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> reply</span><span style="color:#ABB2BF">[</span><span style="color:#D19A66">0</span><span style="color:#ABB2BF">] </span><span style="color:#56B6C2">===</span><span style="color:#98C379"> "yes"</span><span style="color:#C678DD"> ?</span><span style="color:#D19A66"> true</span><span style="color:#C678DD"> :</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
      {
        fileName: "answer-button.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"clickYes()"</span><span style="color:#ABB2BF">>YES&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> click.trigger</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"clickNo()"</span><span style="color:#ABB2BF">>NO&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 4,
      },
      {
        fileName: "answer-button.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">customElement</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">bindable</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "aurelia-templating"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">@</span><span style="color:#61AFEF">customElement</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"answer-button"</span><span style="color:#ABB2BF">)</span></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> AnswerButton</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">bindable</span><span style="color:#E06C75"> actionHandler</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  clickYes</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">actionHandler</span><span style="color:#ABB2BF">({ </span><span style="color:#E06C75">reply</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"yes"</span><span style="color:#ABB2BF"> });</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  clickNo</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">actionHandler</span><span style="color:#ABB2BF">({ </span><span style="color:#E06C75">reply</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"no"</span><span style="color:#ABB2BF"> });</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 14,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/2-emit-to-parent/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "slot",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">require</span><span style="color:#D19A66"> from</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"./funny-button"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">require</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">>Click me !&#x3C;/</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
      {
        fileName: "funny-button.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span></span>\n<span class="line"><span style="color:#D19A66">    style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"</span></span>\n<span class="line"><span style="color:#98C379">      background: rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">      color: #fff;</span></span>\n<span class="line"><span style="color:#98C379">      padding: 10px 20px;</span></span>\n<span class="line"><span style="color:#98C379">      font-size: 30px;</span></span>\n<span class="line"><span style="color:#98C379">      border: 2px solid #fff;</span></span>\n<span class="line"><span style="color:#98C379">      margin: 8px;</span></span>\n<span class="line"><span style="color:#98C379">      transform: scale(0.9);</span></span>\n<span class="line"><span style="color:#98C379">      box-shadow: 4px 4px rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">      transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;</span></span>\n<span class="line"><span style="color:#98C379">      outline: 0;</span></span>\n<span class="line"><span style="color:#98C379">    "</span></span>\n<span class="line"><span style="color:#ABB2BF">  ></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">slot</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">slot</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 18,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/3-slot/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "slot-fallback",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">require</span><span style="color:#D19A66"> from</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"./funny-button"</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">require</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">>Click me !&#x3C;/</span><span style="color:#E06C75">funny-button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 6,
      },
      {
        fileName: "funny-button.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span></span>\n<span class="line"><span style="color:#D19A66">    style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"</span></span>\n<span class="line"><span style="color:#98C379">      background: rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">      color: #fff;</span></span>\n<span class="line"><span style="color:#98C379">      padding: 10px 20px;</span></span>\n<span class="line"><span style="color:#98C379">      font-size: 30px;</span></span>\n<span class="line"><span style="color:#98C379">      border: 2px solid #fff;</span></span>\n<span class="line"><span style="color:#98C379">      margin: 8px;</span></span>\n<span class="line"><span style="color:#98C379">      transform: scale(0.9);</span></span>\n<span class="line"><span style="color:#98C379">      box-shadow: 4px 4px rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">      transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;</span></span>\n<span class="line"><span style="color:#98C379">      outline: 0;</span></span>\n<span class="line"><span style="color:#98C379">    "</span></span>\n<span class="line"><span style="color:#ABB2BF">  ></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">slot</span><span style="color:#ABB2BF">>&#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">> No content &#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>&#x3C;/</span><span style="color:#E06C75">slot</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 18,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/4-slot-fallback/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "context",
    files: [],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/5-context/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "input-text",
    files: [
      {
        fileName: "input-hello.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>${text}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> value.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"text"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 4,
      },
      {
        fileName: "input-hello.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> InputHello</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  texts</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">string</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Hello World"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 3,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/1-input-text/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "checkbox",
    files: [
      {
        fileName: "is-available.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"checkbox"</span><span style="color:#D19A66"> checked.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"isAvailable"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#ABB2BF">>Is available&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">>: ${isAvailable}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 4,
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
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/2-checkbox/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "radio",
    files: [
      {
        fileName: "pick-pill.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">>Picked: ${picked}&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#D19A66"> checked.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"picked"</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#ABB2BF">>Blue pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#D19A66"> checked.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"picked"</span><span style="color:#D19A66"> type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#ABB2BF">>Red pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
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
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/3-radio/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "select",
    files: [
      {
        fileName: "color-select.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">select</span><span style="color:#D19A66"> value.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"selectedColorId"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">option</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">""</span><span style="color:#ABB2BF">>Select A Color&#x3C;/</span><span style="color:#E06C75">option</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">option</span></span>\n<span class="line"><span style="color:#D19A66">      repeat.for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"color of colors"</span></span>\n<span class="line"><span style="color:#D19A66">      value.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"color.id"</span></span>\n<span class="line"><span style="color:#D19A66">      disabled.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"color.isDisabled"</span></span>\n<span class="line"><span style="color:#ABB2BF">    ></span></span>\n<span class="line"><span style="color:#ABB2BF">      ${color.text}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">option</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">select</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 12,
      },
      {
        fileName: "color-select.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Select</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  selectedColorId</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E06C75">  colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">3</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">4</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"gray"</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">isDisabled</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">true</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  ];</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/4-select/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "render-app",
    files: [],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/1-render-app/aurelia1",
  },
  {
    frameworkId: "aurelia1",
    snippetId: "fetch-data",
    files: [
      {
        fileName: "app.html",
        ext: "html",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> if.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"isLoading"</span><span style="color:#ABB2BF">>Fetching users...&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> if.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"error"</span><span style="color:#ABB2BF">>An error ocurred while fetching users&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#D19A66"> if.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"users"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#D19A66"> repeat.for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user of users"</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;</span><span style="color:#E06C75">img</span><span style="color:#D19A66"> src.bind</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user.picture.thumbnail"</span><span style="color:#D19A66"> alt</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">      &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>${ user.name.first } ${ user.name.last }&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">template</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
      {
        fileName: "app.ts",
        ext: "ts",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">autoinject</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">computedFrom</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "aurelia-framework"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">UseFetchUsers</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "./UseFetchUsers"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">@</span><span style="color:#61AFEF">autoinject</span><span style="color:#ABB2BF">()</span></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">  constructor</span><span style="color:#ABB2BF">(</span><span style="color:#C678DD">private</span><span style="color:#E06C75;font-style:italic"> useFetchUsers</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">UseFetchUsers</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">useFetchUsers</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> useFetchUsers</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  attached</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">useFetchUsers</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">fetchData</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#61AFEF">computedFrom</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"useFetchUsers.data"</span><span style="color:#ABB2BF">)</span></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> data</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">useFetchUsers</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">data</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#61AFEF">computedFrom</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"useFetchUsers.error"</span><span style="color:#ABB2BF">)</span></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> error</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">useFetchUsers</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">error</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#61AFEF">computedFrom</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"useFetchUsers.isLoading"</span><span style="color:#ABB2BF">)</span></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> isLoading</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">useFetchUsers</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isLoading</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 28,
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
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/2-fetch-data/aurelia1",
  },
];
export { s as default };
