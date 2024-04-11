import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as n,c as s,d as e,f as a,a as d,e as t}from"./app-D8deJ30Q.js";const r={},c=t('<h2 id="go语言环境搭建指南" tabindex="-1"><a class="header-anchor" href="#go语言环境搭建指南"><span>Go语言环境搭建指南</span></a></h2><p>Go语言（或称Golang）是一种快速、静态类型的编译语言，它具有垃圾回收、并发支持、简洁的语法等特性，非常适合现代计算机架构。本指南将引导你完成Go语言环境的搭建，让你能够开始Go语言的学习和开发旅程。</p><h2 id="安装go" tabindex="-1"><a class="header-anchor" href="#安装go"><span>安装Go</span></a></h2><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3>',4),p={href:"https://golang.org/dl/",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"根据你的操作系统选择对应的安装包下载。",-1),g=e("li",null,"执行下载的安装包，并遵循安装向导完成安装。",-1),u=e("li",null,[a("安装完成后，打开命令提示符，输入"),e("code",null,"go version"),a("确认Go语言已正确安装。")],-1),m=t(`<h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos"><span>MacOS</span></a></h3><ol><li>你可以通过homebrew来安装Go语言：<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>brew install go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>安装完成后，在终端中输入<code>go version</code>确认Go语言已正确安装。</li></ol><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h3><ol><li>使用wget下载最新的Go版本（以下链接以Go 1.15.3为例，请到Go官方下载页面获取最新版本）：<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wget https://golang.org/dl/go1.15.3.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>解压文件到/usr/local目录：<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo tar -C /usr/local -xzf go1.15.3.linux-amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>将Go的bin目录添加到PATH环境变量中：<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export PATH=$PATH:/usr/local/go/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>输入<code>go version</code>确认Go语言已正确安装。</li></ol><h2 id="配置go环境" tabindex="-1"><a class="header-anchor" href="#配置go环境"><span>配置Go环境</span></a></h2><h3 id="设置gopath环境变量" tabindex="-1"><a class="header-anchor" href="#设置gopath环境变量"><span>设置GOPATH环境变量</span></a></h3><p>Go语言使用GOPATH环境变量指向你的工作空间（workspace）。这是一个存放Go代码的地方。你可以将其设置在你的家目录下。</p><ol><li>在<code>.bash_profile</code>（MacOS/Linux）或<code>.bashrc</code>（Linux）文件中添加以下行：<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export GOPATH=$HOME/go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>添加Go的bin目录到PATH环境变量，以便可以直接运行Go程序：<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export PATH=$PATH:$GOPATH/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="验证安装" tabindex="-1"><a class="header-anchor" href="#验证安装"><span>验证安装</span></a></h3><p>重新启动你的终端会话或使用<code>source</code>命令来刷新配置文件。验证<code>GOPATH</code>是否正确设置：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>echo $GOPATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>现在你已经设置好了Go开发环境，可以开始探索Go语言的强大之处了。有许多优秀的资源可以帮助你学习Go，包括官方文档、在线教程以及社区支持。祝你在Go语言的学习旅程中旅途愉快！</p>`,13);function v(x,G){const o=i("ExternalLinkIcon");return n(),s("div",null,[c,e("ol",null,[e("li",null,[a("访问Go语言官方网站下载页面："),e("a",p,[a("Go Download Page"),d(o)])]),h,g,u]),m])}const f=l(r,[["render",v],["__file","env.html.vue"]]),w=JSON.parse('{"path":"/zh/basic/env.html","title":"基础环境准备","lang":"zh-CN","frontmatter":{"title":"基础环境准备","icon":"object-group","order":2,"category":["数据"],"tag":["布局"],"description":"Go语言环境搭建指南 Go语言（或称Golang）是一种快速、静态类型的编译语言，它具有垃圾回收、并发支持、简洁的语法等特性，非常适合现代计算机架构。本指南将引导你完成Go语言环境的搭建，让你能够开始Go语言的学习和开发旅程。 安装Go Windows 访问Go语言官方网站下载页面：Go Download Page 根据你的操作系统选择对应的安装包下载...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/zh/basic/env.html"}],["meta",{"property":"og:site_name","content":"Go-Cillian"}],["meta",{"property":"og:title","content":"基础环境准备"}],["meta",{"property":"og:description","content":"Go语言环境搭建指南 Go语言（或称Golang）是一种快速、静态类型的编译语言，它具有垃圾回收、并发支持、简洁的语法等特性，非常适合现代计算机架构。本指南将引导你完成Go语言环境的搭建，让你能够开始Go语言的学习和开发旅程。 安装Go Windows 访问Go语言官方网站下载页面：Go Download Page 根据你的操作系统选择对应的安装包下载..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-11T14:12:29.000Z"}],["meta",{"property":"article:author","content":"Cillian"}],["meta",{"property":"article:tag","content":"布局"}],["meta",{"property":"article:modified_time","content":"2024-04-11T14:12:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"基础环境准备\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-11T14:12:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cillian\\",\\"url\\":\\"https://www.cillian.website\\"}]}"]]},"headers":[{"level":2,"title":"Go语言环境搭建指南","slug":"go语言环境搭建指南","link":"#go语言环境搭建指南","children":[]},{"level":2,"title":"安装Go","slug":"安装go","link":"#安装go","children":[{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":3,"title":"MacOS","slug":"macos","link":"#macos","children":[]},{"level":3,"title":"Linux","slug":"linux","link":"#linux","children":[]}]},{"level":2,"title":"配置Go环境","slug":"配置go环境","link":"#配置go环境","children":[{"level":3,"title":"设置GOPATH环境变量","slug":"设置gopath环境变量","link":"#设置gopath环境变量","children":[]},{"level":3,"title":"验证安装","slug":"验证安装","link":"#验证安装","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1712844749000,"updatedTime":1712844749000,"contributors":[{"name":"cilliandevops","email":"cilliandevops@gmail.com","commits":1}]},"readingTime":{"minutes":1.85,"words":554},"filePathRelative":"zh/basic/env.md","localizedDate":"2024年4月11日","autoDesc":true}');export{f as comp,w as data};
