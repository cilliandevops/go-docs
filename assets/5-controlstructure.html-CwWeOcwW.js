import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-BFgBo0Tw.js";const t={},p=e(`<h1 id="go语言中控制结构的掌握-带例子的指南" tabindex="-1"><a class="header-anchor" href="#go语言中控制结构的掌握-带例子的指南"><span>Go语言中控制结构的掌握：带例子的指南</span></a></h1><p>在编程中，使用各种控制结构来指导执行流程。Go语言提供了一套丰富的控制结构，使得代码的逻辑控制既简洁又高效。在本文中，我们将详细介绍Go语言的几种控制结构，并通过示例和注释来加深理解。</p><h2 id="if语句" tabindex="-1"><a class="header-anchor" href="#if语句"><span>if语句</span></a></h2><p><code>if</code> 是最基本的控制结构，它允许基于布尔条件来执行代码。Go语言中的 <code>if</code> 语句不需要圆括号包围条件，但是花括号是必须的。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    x <span class="token operator">:=</span> <span class="token number">10</span>
    <span class="token comment">// 简单的 if 语句</span>
    <span class="token keyword">if</span> x <span class="token operator">&gt;</span> <span class="token number">5</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x大于5&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// if-else 结构</span>
    <span class="token keyword">if</span> x<span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x是偶数&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x是奇数&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// if-else if-else 结构</span>
    <span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x是负数&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x是0&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;x是正数&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们首先检查 <code>x</code> 是否大于5，然后检查它是否是偶数，最后检查它是负数、零还是正数。</p><h2 id="for循环" tabindex="-1"><a class="header-anchor" href="#for循环"><span>for循环</span></a></h2><p>在Go中，<code>for</code> 循环是唯一的循环结构，但它非常灵活，可以以多种方式使用。</p><h3 id="基本的for循环" tabindex="-1"><a class="header-anchor" href="#基本的for循环"><span>基本的for循环</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 基本的 for 循环</span>
    <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;i的值为: %d\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个基本的 <code>for</code> 循环初始化一个计数器 <code>i</code>，然后在 <code>i</code> 小于5的条件下循环，每次循环 <code>i</code> 都会递增。</p><h3 id="while风格的for循环" tabindex="-1"><a class="header-anchor" href="#while风格的for循环"><span>while风格的for循环</span></a></h3><p><code>for</code> 循环也可以像传统的 <code>while</code> 循环那样使用。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// while风格的 for 循环</span>
    j <span class="token operator">:=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> j <span class="token operator">&lt;</span> <span class="token number">5</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;j的值为: %d\\n&quot;</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span>
        j<span class="token operator">++</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里，我们省略了初始化和迭代表达式，创建了一个类似 <code>while</code> 的循环。</p><h3 id="无限循环" tabindex="-1"><a class="header-anchor" href="#无限循环"><span>无限循环</span></a></h3><p>如果省略 <code>for</code> 循环中的所有条件，将创建一个无限循环。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 无限循环</span>
    <span class="token keyword">for</span> <span class="token punctuation">{</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;这将永远执行&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// 使用 break 语句退出循环</span>
        <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常，无限循环会与 <code>break</code> 或 <code>return</code> 语句配合使用，以在满足特定条件时退出循环。</p><h2 id="switch语句" tabindex="-1"><a class="header-anchor" href="#switch语句"><span>switch语句</span></a></h2><p><code>switch</code> 语句是一个多分支选择结构，它提供比 <code>if-else</code> 更清晰的选择逻辑。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    number <span class="token operator">:=</span> <span class="token number">3</span>
    <span class="token comment">// 基本的 switch 语句</span>
    <span class="token keyword">switch</span> number <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;数字是1&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;数字是2&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;数字是3&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;数字大于3&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个 <code>switch</code> 语句的例子中，我们根据 <code>number</code> 的值来打印不同的信息。<code>default</code> 分支会在没有任何其他分支匹配时执行。</p><h2 id="select语句" tabindex="-1"><a class="header-anchor" href="#select语句"><span>select语句</span></a></h2><p><code>select</code> 语句是Go中一个独特的结构，它主要用于通道（channel）的通信操作。它可以监听多个通道上的数据流动。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">server1</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">6</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    ch <span class="token operator">&lt;-</span> <span class="token string">&quot;来自服务器1&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">server2</span><span class="token punctuation">(</span>ch <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">*</span> time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
    ch <span class="token operator">&lt;-</span> <span class="token string">&quot;来自服务器2&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    output1 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    output2 <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">server1</span><span class="token punctuation">(</span>output1<span class="token punctuation">)</span>
    <span class="token keyword">go</span> <span class="token function">server2</span><span class="token punctuation">(</span>output2<span class="token punctuation">)</span>
    <span class="token comment">// 使用 select 监听两个通道</span>
    <span class="token keyword">select</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> s1 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>output1<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
    <span class="token keyword">case</span> s2 <span class="token operator">:=</span> <span class="token operator">&lt;-</span>output2<span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们启动了两个goroutine来模拟两个服务器的响应。<code>select</code> 语句用于等待这两个通道中的第一个响应，并打印它。</p><p>控制结构是Go编程中的基础。通过这些示例和解释，你应该能更好地理解它们的用法并在你自己的代码中灵活运用它们。记住，实践是最好的老师，所以不断地尝试和练习将帮助你深化这些概念。</p>`,28),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","5-controlstructure.html.vue"]]),k=JSON.parse('{"path":"/basic/5-controlstructure.html","title":"5.控制结构","lang":"zh-CN","frontmatter":{"title":"5.控制结构","order":5,"category":["数据"],"tag":["布局"],"description":"Go语言中控制结构的掌握：带例子的指南 在编程中，使用各种控制结构来指导执行流程。Go语言提供了一套丰富的控制结构，使得代码的逻辑控制既简洁又高效。在本文中，我们将详细介绍Go语言的几种控制结构，并通过示例和注释来加深理解。 if语句 if 是最基本的控制结构，它允许基于布尔条件来执行代码。Go语言中的 if 语句不需要圆括号包围条件，但是花括号是必须...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/basic/5-controlstructure.html"}],["meta",{"property":"og:site_name","content":"Go-Cillian"}],["meta",{"property":"og:title","content":"5.控制结构"}],["meta",{"property":"og:description","content":"Go语言中控制结构的掌握：带例子的指南 在编程中，使用各种控制结构来指导执行流程。Go语言提供了一套丰富的控制结构，使得代码的逻辑控制既简洁又高效。在本文中，我们将详细介绍Go语言的几种控制结构，并通过示例和注释来加深理解。 if语句 if 是最基本的控制结构，它允许基于布尔条件来执行代码。Go语言中的 if 语句不需要圆括号包围条件，但是花括号是必须..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-15T07:02:55.000Z"}],["meta",{"property":"article:author","content":"Cillian"}],["meta",{"property":"article:tag","content":"布局"}],["meta",{"property":"article:modified_time","content":"2024-04-15T07:02:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"5.控制结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-15T07:02:55.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cillian\\",\\"url\\":\\"https://www.cillian.website\\"}]}"]]},"headers":[{"level":2,"title":"if语句","slug":"if语句","link":"#if语句","children":[]},{"level":2,"title":"for循环","slug":"for循环","link":"#for循环","children":[{"level":3,"title":"基本的for循环","slug":"基本的for循环","link":"#基本的for循环","children":[]},{"level":3,"title":"while风格的for循环","slug":"while风格的for循环","link":"#while风格的for循环","children":[]},{"level":3,"title":"无限循环","slug":"无限循环","link":"#无限循环","children":[]}]},{"level":2,"title":"switch语句","slug":"switch语句","link":"#switch语句","children":[]},{"level":2,"title":"select语句","slug":"select语句","link":"#select语句","children":[]}],"git":{"createdTime":1712928789000,"updatedTime":1713164575000,"contributors":[{"name":"cilliandevops","email":"cilliandevops@gmail.com","commits":1}]},"readingTime":{"minutes":3.07,"words":922},"filePathRelative":"basic/5-controlstructure.md","localizedDate":"2024年4月12日","autoDesc":true}');export{d as comp,k as data};
