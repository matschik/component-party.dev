var s = [
  {
    frameworkId: "emberOctane",
    snippetId: "declare-state",
    files: [
      {
        fileName: "name.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello {{</span><span style="color:#E06C75;font-style:italic">this.name</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "name.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> NameComponent</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/1-declare-state/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "update-state",
    files: [
      {
        fileName: "name.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello {{</span><span style="color:#E06C75;font-style:italic">this.name</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "name.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> NameComponent</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "John"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  constructor</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">owner</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">args</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B;font-style:italic">    super</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">owner</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">args</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">name</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Jane"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 12,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/2-update-state/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "computed-state",
    files: [
      {
        fileName: "double-count.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">>{{</span><span style="color:#E06C75;font-style:italic">this.doubleCount</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "double-count.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#ABB2BF">, { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> DoubleCount</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> count</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 10</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> doubleCount</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">count</span><span style="color:#56B6C2"> *</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/1-reactivity/3-computed-state/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "minimal-template",
    files: [
      {
        fileName: "hello-world.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">>Hello world&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 1,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/1-minimal-template/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "styling",
    files: [
      {
        fileName: "css-style.css",
        ext: "css",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic">/* using: https://github.com/salsify/ember-css-modules */</span></span>\n<span class="line"><span style="color:#D19A66">.title</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  color: </span><span style="color:#D19A66">red</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 4,
      },
      {
        fileName: "css-style.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">h1</span><span style="color:#D19A66"> class</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"title"</span><span style="color:#ABB2BF">>I am red&#x3C;/</span><span style="color:#E06C75">h1</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 10rem;"</span><span style="color:#ABB2BF">>I am a button&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 2,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/2-styling/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "loop",
    files: [
      {
        fileName: "colors.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">#each</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">array</span><span style="color:#98C379"> "red"</span><span style="color:#98C379"> "green"</span><span style="color:#98C379"> "blue"</span><span style="color:#ABB2BF">) </span><span style="color:#E06C75;font-style:italic">as</span><span style="color:#ABB2BF"> |</span><span style="color:#E06C75;font-style:italic">color</span><span style="color:#ABB2BF">|}}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">>{{</span><span style="color:#E06C75;font-style:italic">color</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">/each</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 5,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/3-loop/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "event-click",
    files: [
      {
        fileName: "counter.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Counter: {{</span><span style="color:#E06C75;font-style:italic">this.count</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "click"</span><span style="color:#E06C75;font-style:italic"> this.incrementCount</span><span style="color:#ABB2BF">}}>+1&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "counter.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Counter</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> count</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  incrementCount</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> () </span><span style="color:#C678DD">=></span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">count</span><span style="color:#56B6C2">++</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/4-event-click/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "dom-ref",
    files: [
      {
        fileName: "input-focused.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#ABB2BF"> {{</span><span style="color:#E06C75;font-style:italic">this.autofocus</span><span style="color:#ABB2BF">}} /></span></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "input-focused.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">modifier</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "ember-modifier"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> InputFocused</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">  autofocus</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> modifier</span><span style="color:#ABB2BF">((</span><span style="color:#E06C75;font-style:italic">element</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=></span><span style="color:#E5C07B"> element</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">focus</span><span style="color:#ABB2BF">());</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#7F848E;font-style:italic">/**</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> * modifier: https://github.com/ember-modifier/ember-modifier</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> *</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> * See also:</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> *  - https://github.com/emberjs/rfcs/pull/811</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> *    - ember-modifier becomes default part of blueprint</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> *  - https://github.com/emberjs/rfcs/pull/757</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> *    - dependencyless support for using</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> *       `autofocus = element => element.focus()`</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> *       instead</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic"> */</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 18,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/5-dom-ref/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "conditional",
    files: [
      {
        fileName: "traffic-light.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "click"</span><span style="color:#E06C75;font-style:italic"> this.nextLight</span><span style="color:#ABB2BF">}}>Next light&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Light is: {{</span><span style="color:#E06C75;font-style:italic">this.light</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  You must</span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">#if</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">eq</span><span style="color:#E06C75;font-style:italic"> this.light</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">)}}</span></span>\n<span class="line"><span style="color:#ABB2BF">    STOP</span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">else</span><span style="color:#E06C75;font-style:italic"> if</span><span style="color:#ABB2BF"> (eq this.light "orange")}}</span></span>\n<span class="line"><span style="color:#ABB2BF">    SLOW DOWN</span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">else</span><span style="color:#E06C75;font-style:italic"> if</span><span style="color:#ABB2BF"> (eq this.light "green")}}</span></span>\n<span class="line"><span style="color:#ABB2BF">    GO</span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">/if</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 12,
      },
      {
        fileName: "traffic-light.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">const</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"orange"</span><span style="color:#ABB2BF">, </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> TrafficLight</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 0</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> light</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">[</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#ABB2BF">];</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  nextLight</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> () </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">lightIndex</span><span style="color:#56B6C2"> +</span><span style="color:#D19A66"> 1</span><span style="color:#ABB2BF">) </span><span style="color:#56B6C2">%</span><span style="color:#E5C07B"> TRAFFIC_LIGHTS</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">length</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  };</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 16,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/2-templating/6-conditional/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "on-mount",
    files: [
      {
        fileName: "page-title.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Page title is: {{(</span><span style="color:#E06C75;font-style:italic">this.pageTitle</span><span style="color:#ABB2BF">)}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "page-title.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> PageTitle</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#61AFEF">  pageTitle</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> () </span><span style="color:#C678DD">=></span><span style="color:#E5C07B"> document</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">title</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 5,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/1-on-mount/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "on-unmount",
    files: [
      {
        fileName: "time.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Current time: {{</span><span style="color:#E06C75;font-style:italic">this.time</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "time.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">registerDestructor</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@ember/destroyable"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> Time</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  constructor</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">owner</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75;font-style:italic">args</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B;font-style:italic">    super</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">owner</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">args</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">    let</span><span style="color:#E06C75"> timer</span><span style="color:#56B6C2"> =</span><span style="color:#61AFEF"> setInterval</span><span style="color:#ABB2BF">(() </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E5C07B">      this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">time</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> Date</span><span style="color:#ABB2BF">().</span><span style="color:#61AFEF">toLocaleTimeString</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">    }, </span><span style="color:#D19A66">1000</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">    registerDestructor</span><span style="color:#ABB2BF">(</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">, () </span><span style="color:#C678DD">=></span><span style="color:#61AFEF"> clearInterval</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75">timer</span><span style="color:#ABB2BF">));</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 17,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/3-lifecycle/2-on-unmount/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "props",
    files: [
      {
        fileName: "app.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">UserProfile</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#D19A66">name</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"John"</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#D19A66">age</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">20</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#D19A66">favouriteColors</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">array</span><span style="color:#98C379"> "green"</span><span style="color:#98C379"> "blue"</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#D19A66">isAvailable</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">true</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span></code></pre>',
        lineCount: 6,
      },
      {
        fileName: "user-profile.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My name is {{</span><span style="color:#E06C75;font-style:italic">@name</span><span style="color:#ABB2BF">}}!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My age is {{</span><span style="color:#E06C75;font-style:italic">@age</span><span style="color:#ABB2BF">}}!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>My favourite colors are {{</span><span style="color:#E06C75;font-style:italic">this.formattedColors</span><span style="color:#ABB2BF">}}!&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>I am {{</span><span style="color:#E06C75;font-style:italic">if</span><span style="color:#ABB2BF"> @</span><span style="color:#E06C75;font-style:italic">isAvailable</span><span style="color:#98C379"> "available"</span><span style="color:#98C379"> "not available"</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 4,
      },
      {
        fileName: "user-profile.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> UserProfile</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> formattedColors</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">args</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">favouriteColors</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">join</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">", "</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 7,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/1-props/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "emit-to-parent",
    files: [
      {
        fileName: "app.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Are you happy?&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">AnswerButton</span><span style="color:#ABB2BF"> @</span><span style="color:#D19A66">onYes</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">this.handleYes</span><span style="color:#ABB2BF">}} @</span><span style="color:#D19A66">onNo</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">this.handleNo</span><span style="color:#ABB2BF">}} /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#D19A66"> style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"font-size: 50px;"</span><span style="color:#ABB2BF">>{{</span><span style="color:#E06C75;font-style:italic">if</span><span style="color:#E06C75;font-style:italic"> this.isHappy</span><span style="color:#98C379"> "😀"</span><span style="color:#98C379"> "😥"</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 3,
      },
      {
        fileName: "app.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  handleYes</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> () </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#61AFEF">  handleNo</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> () </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isHappy</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 9,
      },
      {
        fileName: "answer-button.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "click"</span><span style="color:#ABB2BF"> @</span><span style="color:#E06C75;font-style:italic">onYes</span><span style="color:#ABB2BF">}}> YES &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "click"</span><span style="color:#ABB2BF"> @</span><span style="color:#E06C75;font-style:italic">onNo</span><span style="color:#ABB2BF">}}> NO &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 2,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/2-emit-to-parent/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "slot",
    files: [
      {
        fileName: "app.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">> Click me! &#x3C;/</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "funny-button.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span></span>\n<span class="line"><span style="color:#D19A66">  style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"</span></span>\n<span class="line"><span style="color:#98C379">    background: rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">    color: #fff;</span></span>\n<span class="line"><span style="color:#98C379">    padding: 10px 20px;</span></span>\n<span class="line"><span style="color:#98C379">    font-size: 30px;</span></span>\n<span class="line"><span style="color:#98C379">    border: 2px solid #fff;</span></span>\n<span class="line"><span style="color:#98C379">    margin: 8px;</span></span>\n<span class="line"><span style="color:#98C379">    transform: scale(0.9);</span></span>\n<span class="line"><span style="color:#98C379">    box-shadow: 4px 4px rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">    transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;</span></span>\n<span class="line"><span style="color:#98C379">    outline: 0;"</span></span>\n<span class="line"><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#E06C75;font-style:italic">yield</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 15,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/3-slot/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "slot-fallback",
    files: [
      {
        fileName: "app.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">>I got content!&#x3C;/</span><span style="color:#E06C75">FunnyButton</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "funny-button.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">button</span></span>\n<span class="line"><span style="color:#D19A66">  style</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"</span></span>\n<span class="line"><span style="color:#98C379">    background: rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">    color: #fff;</span></span>\n<span class="line"><span style="color:#98C379">    padding: 10px 20px;</span></span>\n<span class="line"><span style="color:#98C379">    font-size: 30px;</span></span>\n<span class="line"><span style="color:#98C379">    border: 2px solid #fff;</span></span>\n<span class="line"><span style="color:#98C379">    margin: 8px;</span></span>\n<span class="line"><span style="color:#98C379">    transform: scale(0.9);</span></span>\n<span class="line"><span style="color:#98C379">    box-shadow: 4px 4px rgba(0, 0, 0, 0.4);</span></span>\n<span class="line"><span style="color:#98C379">    transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;</span></span>\n<span class="line"><span style="color:#98C379">    outline: 0;"</span></span>\n<span class="line"><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">#if</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">has-block</span><span style="color:#ABB2BF">)}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">    {{</span><span style="color:#E06C75;font-style:italic">yield</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">else</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">>No content found&#x3C;/</span><span style="color:#E06C75">span</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">/if</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 23,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/4-slot-fallback/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "context",
    files: [
      {
        fileName: "app.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">UserProfile</span><span style="color:#ABB2BF"> /></span></span></code></pre>',
        lineCount: 1,
      },
      {
        fileName: "user-profile.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">>My Profile&#x3C;/</span><span style="color:#E06C75">h2</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Username: {{</span><span style="color:#E06C75;font-style:italic">this.user.username</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Email: {{</span><span style="color:#E06C75;font-style:italic">this.user.email</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF"> {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "click"</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">fn</span><span style="color:#E06C75;font-style:italic"> this.userService.updateUserName</span><span style="color:#98C379"> "Jane"</span><span style="color:#ABB2BF">)}}></span></span>\n<span class="line"><span style="color:#ABB2BF">    Update username to Jane</span></span>\n<span class="line"><span style="color:#ABB2BF">  &#x3C;/</span><span style="color:#E06C75">button</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 8,
      },
      {
        fileName: "user-profile.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">service</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@ember/service"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> UserProfileComponent</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">service</span><span style="color:#E06C75"> userService</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> user</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#E5C07B"> this</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">userService</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">user</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 10,
      },
      {
        fileName: "user-service.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Service</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@ember/service"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">action</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@ember/object"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> UserServiceService</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Service</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> id</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 1</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> username</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "unicorn42"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> email</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "unicorn42@example.com"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  get</span><span style="color:#61AFEF"> user</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">    return</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#E06C75">      id</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">      username</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#E06C75">      email</span><span style="color:#ABB2BF">: </span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">email</span><span style="color:#ABB2BF">,</span></span>\n<span class="line"><span style="color:#ABB2BF">    };</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">action</span></span>\n<span class="line"><span style="color:#61AFEF">  updateUserName</span><span style="color:#ABB2BF">(</span><span style="color:#E06C75;font-style:italic">newUsername</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B">    this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">username</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> newUsername</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 22,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/4-component-composition/5-context/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "input-text",
    files: [
      {
        fileName: "input-hello.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>{{</span><span style="color:#E06C75;font-style:italic">this.text</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span><span style="color:#D19A66"> value</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">this.text</span><span style="color:#ABB2BF">}} {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "input"</span><span style="color:#E06C75;font-style:italic"> this.handleInput</span><span style="color:#ABB2BF">}} /></span></span></code></pre>',
        lineCount: 2,
      },
      {
        fileName: "input-hello.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> InputHello</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> text</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "Hello World"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  handleInput</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">event</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">text</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> event</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">target</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/1-input-text/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "checkbox",
    files: [
      {
        fileName: "is-available.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span></span>\n<span class="line"><span style="color:#61AFEF">  id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span></span>\n<span class="line"><span style="color:#D19A66">  type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"checkbox"</span></span>\n<span class="line"><span style="color:#D19A66">  checked</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">this.isAvailable</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "change"</span><span style="color:#E06C75;font-style:italic"> this.handleChange</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> for</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"is-available"</span><span style="color:#ABB2BF">>Is available&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 7,
      },
      {
        fileName: "is-available.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> InputHello</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  handleChange</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">event</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isAvailable</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> event</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">target</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">checked</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/2-checkbox/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "radio",
    files: [
      {
        fileName: "pick-pill.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">>Picked: {{</span><span style="color:#E06C75;font-style:italic">this.picked</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">div</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span></span>\n<span class="line"><span style="color:#61AFEF">  id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span></span>\n<span class="line"><span style="color:#D19A66">  type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span></span>\n<span class="line"><span style="color:#D19A66">  value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue"</span></span>\n<span class="line"><span style="color:#D19A66">  checked</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">eq</span><span style="color:#E06C75;font-style:italic"> this.picked</span><span style="color:#98C379"> "blue"</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "change"</span><span style="color:#E06C75;font-style:italic"> this.handleChange</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> htmlFor</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"blue-pill"</span><span style="color:#ABB2BF">>Blue pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">input</span></span>\n<span class="line"><span style="color:#61AFEF">  id</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span></span>\n<span class="line"><span style="color:#D19A66">  type</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"radio"</span></span>\n<span class="line"><span style="color:#D19A66">  value</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red"</span></span>\n<span class="line"><span style="color:#D19A66">  checked</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">eq</span><span style="color:#E06C75;font-style:italic"> this.picked</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "change"</span><span style="color:#E06C75;font-style:italic"> this.handleChange</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">/></span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">label</span><span style="color:#D19A66"> htmlFor</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"red-pill"</span><span style="color:#ABB2BF">>Red pill&#x3C;/</span><span style="color:#E06C75">label</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 19,
      },
      {
        fileName: "pick-pill.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> PickPill</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> picked</span><span style="color:#56B6C2"> =</span><span style="color:#98C379"> "red"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  handleChange</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">event</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">picked</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> event</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">target</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 8,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/3-radio/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "select",
    files: [
      {
        fileName: "color-select.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">&#x3C;</span><span style="color:#E06C75">select</span><span style="color:#ABB2BF"> {{</span><span style="color:#E06C75;font-style:italic">on</span><span style="color:#98C379"> "change"</span><span style="color:#E06C75;font-style:italic"> this.select</span><span style="color:#ABB2BF">}}></span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">#each</span><span style="color:#E06C75;font-style:italic"> this.colors</span><span style="color:#ABB2BF"> as |</span><span style="color:#E06C75;font-style:italic">color</span><span style="color:#ABB2BF">|}}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">option</span></span>\n<span class="line"><span style="color:#D19A66">      value</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">color.id</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#D19A66">      disabled</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">color.isDisabled</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#D19A66">      selected</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">eq</span><span style="color:#E06C75;font-style:italic"> color.id</span><span style="color:#E06C75;font-style:italic"> this.selectedColorId</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">    ></span></span>\n<span class="line"><span style="color:#ABB2BF">      {{</span><span style="color:#E06C75;font-style:italic">color.text</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">option</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">/each</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">&#x3C;/</span><span style="color:#E06C75">select</span><span style="color:#ABB2BF">></span></span></code></pre>',
        lineCount: 11,
      },
      {
        fileName: "color-select.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> ColorSelect</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> selectedColorId</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> 2</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  select</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">event</span><span style="color:#ABB2BF">) </span><span style="color:#C678DD">=></span><span style="color:#ABB2BF"> (</span><span style="color:#E5C07B">this</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">selectedColorId</span><span style="color:#56B6C2"> =</span><span style="color:#E5C07B"> event</span><span style="color:#ABB2BF">.</span><span style="color:#E5C07B">target</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">value</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E06C75">  colors</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> [</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">1</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"red"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">2</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"blue"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">3</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"green"</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">    { </span><span style="color:#E06C75">id</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">4</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">text</span><span style="color:#ABB2BF">: </span><span style="color:#98C379">"gray"</span><span style="color:#ABB2BF">, </span><span style="color:#E06C75">isDisabled</span><span style="color:#ABB2BF">: </span><span style="color:#D19A66">true</span><span style="color:#ABB2BF"> },</span></span>\n<span class="line"><span style="color:#ABB2BF">  ];</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 15,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/6-form-input/4-select/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "render-app",
    files: [],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/1-render-app/emberOctane",
  },
  {
    frameworkId: "emberOctane",
    snippetId: "fetch-data",
    files: [
      {
        fileName: "app.hbs",
        ext: "hbs",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#ABB2BF">{{</span><span style="color:#C678DD">#let</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75;font-style:italic">this.fetchUsers</span><span style="color:#ABB2BF">) </span><span style="color:#E06C75;font-style:italic">as</span><span style="color:#ABB2BF"> |</span><span style="color:#E06C75;font-style:italic">request</span><span style="color:#ABB2BF">|}}</span></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">#if</span><span style="color:#E06C75;font-style:italic"> request.isLoading</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>Fetching users...&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">else</span><span style="color:#E06C75;font-style:italic"> if</span><span style="color:#ABB2BF"> request.error}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>An error occurred while fetching users&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">else</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">      {{</span><span style="color:#C678DD">#each</span><span style="color:#E06C75;font-style:italic"> request.users</span><span style="color:#ABB2BF"> as |</span><span style="color:#E06C75;font-style:italic">user</span><span style="color:#ABB2BF">|}}</span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">          &#x3C;</span><span style="color:#E06C75">img</span><span style="color:#D19A66"> src</span><span style="color:#ABB2BF">={{</span><span style="color:#E06C75;font-style:italic">user.picture.thumbnail</span><span style="color:#ABB2BF">}} </span><span style="color:#D19A66">alt</span><span style="color:#ABB2BF">=</span><span style="color:#98C379">"user"</span><span style="color:#ABB2BF"> /></span></span>\n<span class="line"><span style="color:#ABB2BF">          &#x3C;</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">>{{</span><span style="color:#E06C75;font-style:italic">user.name.first</span><span style="color:#ABB2BF">}} {{</span><span style="color:#E06C75;font-style:italic">user.name.last</span><span style="color:#ABB2BF">}}&#x3C;/</span><span style="color:#E06C75">p</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">        &#x3C;/</span><span style="color:#E06C75">li</span><span style="color:#ABB2BF">></span></span>\n<span class="line"><span style="color:#ABB2BF">      {{</span><span style="color:#C678DD">/each</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">    &#x3C;/</span><span style="color:#E06C75">ul</span><span style="color:#ABB2BF">></span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ABB2BF">  {{</span><span style="color:#C678DD">/if</span><span style="color:#ABB2BF">}}</span></span>\n<span class="line"><span style="color:#ABB2BF">{{</span><span style="color:#C678DD">/let</span><span style="color:#ABB2BF">}}</span></span></code></pre>',
        lineCount: 22,
      },
      {
        fileName: "app.js",
        ext: "js",
        contentHtml:
          '<pre class="shiki one-dark-pro-for-component-party" style="background-color:#0D1117;color:#abb2bf" tabindex="0"><code><span class="line"><span style="color:#C678DD">import</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">tracked</span><span style="color:#ABB2BF"> } </span><span style="color:#C678DD">from</span><span style="color:#98C379"> "@glimmer/tracking"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#C678DD">import</span><span style="color:#E06C75"> Component</span><span style="color:#C678DD"> from</span><span style="color:#98C379"> "@glimmer/component"</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">export</span><span style="color:#C678DD"> default</span><span style="color:#C678DD"> class</span><span style="color:#E5C07B"> App</span><span style="color:#C678DD"> extends</span><span style="color:#E5C07B"> Component</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#61AFEF">  fetchUsers</span><span style="color:#56B6C2"> =</span><span style="color:#ABB2BF"> () </span><span style="color:#C678DD">=></span><span style="color:#61AFEF"> getUsers</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">class</span><span style="color:#E5C07B"> State</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> error</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  @</span><span style="color:#E06C75">tracked</span><span style="color:#E06C75"> data</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">function</span><span style="color:#61AFEF"> getUsers</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#C678DD">  let</span><span style="color:#E06C75"> state</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> new</span><span style="color:#61AFEF"> State</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  async</span><span style="color:#C678DD"> function</span><span style="color:#61AFEF"> fetchData</span><span style="color:#ABB2BF">() {</span></span>\n<span class="line"><span style="color:#E5C07B">    state</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> true</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">    try</span><span style="color:#ABB2BF"> {</span></span>\n<span class="line"><span style="color:#C678DD">      let</span><span style="color:#E06C75"> response</span><span style="color:#56B6C2"> =</span><span style="color:#C678DD"> await</span><span style="color:#61AFEF"> fetch</span><span style="color:#ABB2BF">(</span><span style="color:#98C379">"https://randomuser.me/api/?results=3"</span><span style="color:#ABB2BF">);</span></span>\n<span class="line"><span style="color:#C678DD">      let</span><span style="color:#ABB2BF"> { </span><span style="color:#E06C75">results</span><span style="color:#ABB2BF">: </span><span style="color:#E06C75">users</span><span style="color:#ABB2BF"> } </span><span style="color:#56B6C2">=</span><span style="color:#C678DD"> await</span><span style="color:#E5C07B"> response</span><span style="color:#ABB2BF">.</span><span style="color:#61AFEF">json</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"><span style="color:#E5C07B">      state</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">data</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> users</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E5C07B">      state</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">error</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    } </span><span style="color:#C678DD">catch</span><span style="color:#ABB2BF"> (</span><span style="color:#E06C75">err</span><span style="color:#ABB2BF">) {</span></span>\n<span class="line"><span style="color:#E5C07B">      state</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">data</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> null</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#E5C07B">      state</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">error</span><span style="color:#56B6C2"> =</span><span style="color:#E06C75"> err</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">    }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E5C07B">    state</span><span style="color:#ABB2BF">.</span><span style="color:#E06C75">isLoading</span><span style="color:#56B6C2"> =</span><span style="color:#D19A66"> false</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">  }</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#61AFEF">  fetchData</span><span style="color:#ABB2BF">();</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C678DD">  return</span><span style="color:#E06C75"> state</span><span style="color:#ABB2BF">;</span></span>\n<span class="line"><span style="color:#ABB2BF">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#7F848E;font-style:italic">// NOTE: in Polaris, the backing class for the component isn\'t needed at all.</span></span>\n<span class="line"><span style="color:#7F848E;font-style:italic">// `getUsers` could be invoked directly.</span></span>\n<span class="line"></span></code></pre>',
        lineCount: 39,
      },
    ],
    playgroundURL: "",
    markdownFiles: [],
    snippetEditHref:
      "https://github.com/matschik/component-party/tree/main/content/7-webapp-features/2-fetch-data/emberOctane",
  },
];
export { s as default };
