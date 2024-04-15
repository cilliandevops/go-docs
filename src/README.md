---
home: true
icon: home
title: 主页
heroImage: https://go.dev/images/gophers/ladder.svg
bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: Go-Cillian
tagline: 你可以在这里跟随希里安快速入门Golang
actions: 
  - text: 使用指南
    icon: lightbulb
    link: ./demo/
    type: primary

  - text: 文档
    link: ./guide/

highlights:
#   - header: 易于安装
#     image: /assets/image/box.svg
#     bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
#     bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
#     highlights:
#       - title: 下载 <code>Go</code> 并安装以创建一个新的主题项目。
      # - title: 在已有项目根目录下运行 <code>pnpm create vuepress-theme-hope add .</code> 以在项目中添加主题。

  - header: 在 Golang 的天空自由翱翔
    description: 集合AI+文档，快速入门Golang编程
    # image: /assets/image/markdown.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/10-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/10-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    highlights:
      - title: 1.入门
        # icon: clipboard-check
        details: 进入GO世界，运行第一个Go程序
        link: 

      - title: 2.程序结构
        # icon: box-archive
        details: 名称、声明、变量、赋值...
        link: 

      - title: 3.基本数据
        # icon: bell
        details: 向下匹配硬件特性，向上满足程序员所需
        link: 

      - title: 4.复合数据类型
        # icon: table-columns
        details: 复合数据类型是由基本数据类型以各种方式组合而构成的，就像分子由原子构成一样。
        link: 

      - title: 5.函数
        # icon: code
        details: 函数包含连续的执行语句，可以在代码中通过调用函数来执行它们。函数能够将一个复杂的工作切分成多个更小的模块。
        link: 

      - title: 6.方法
        # icon: align-center
        details: 对象就是简单的一个值或者变量，并且拥有其方法，而方法是某种特定类型的函数。面向对象编程就是使用方法来描述每个数据结构的属性和操作，于是，使用者不需要了解对象本身的实现。
        link:

      - title: 7.接口
        # icon: code
        details: 对于一个具体的类型，无须声明它实现了哪些接口，只要提供接口所必需的方法即可。这种设计让你无须改变已有类型的实现，就可以为这些类型创建新的接口，对于那些不能修改包的类型，这一点特别有用。
        link:

      - title: 8.groutine和channel
        # icon: superscript
        details: goroutine 是Go语言中实现并发的基本单位，它是由Go运行时（runtime）管理的轻量级线程。创建 goroutine 非常简单，只需要在函数调用前加上关键字 go。channel 是Go语言中的一个关键类型，用于在 goroutine 之间进行安全的通信。你可以把 channel 理解为一个用于传输数据的管道，一个 goroutine 可以向管道中发送数据，而另一个 goroutine 可以从管道中接收数据。
        link: 

      - title: 9.并发
        # icon: quote-left
        details: Go语言中，并发是指程序同时处理多个任务的能力。它是通过 goroutines 和 channels 等机制来实现的，这些机制让并发编程更加直观和易于管理。
        link: 

      - title: 10.包和工具
        # icon: highlighter
        details: 各种插件工具助理实现应用目的
        link: 

      - title: 11.测试
        # icon: square-check
        details: 标准测试
        link:

      - title: 12.反射
        # icon: image
        details: 
        link: 

      - title: 13.低级编程
        # icon: puzzle-piece
        details: 
        link: 

      # - title: 图表支持
      #   icon: chart-simple
      #   details: 在 Markdown 中展示图表
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/chartjs.html

      # - title: 流程图支持
      #   icon: route
      #   details: 可以在 Markdown 中直接写出流程图
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/flowchart.html

      # - title: Mermaid 支持
      #   icon: chart-pie
      #   details: 可以在 Markdown 中添加 Mermaid 图例
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/mermaid.html

      # - title: Tex 支持
      #   icon: square-root-variable
      #   details: Markdown 现在也可以支持 Tex 语法以显示公式
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/tex.html

      # - title: 导入文件支持
      #   icon: fab fa-markdown
      #   details: 将你的文档分段，并在 Markdown 中导入
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/include.html

      # - title: 交互演示支持
      #   icon: code
      #   details: 你可以在 Markdown 中添加交互演示
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/playground.html

      # - title: Vue 交互演示支持
      #   icon: fab fa-vuejs
      #   details: 在交互演示中展示 Vue 组件
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/vue-playground.html

      # - title: Sandpack 交互演示支持
      #   icon: code
      #   details: Sandpack 驱动的实时的编码环境
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/sandpack.html

      # - title: 代码案例支持
      #   icon: laptop-code
      #   details: 你可以很方便的插入代码案例
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/demo.html

      # - title: 幻灯片支持
      #   icon: person-chalkboard
      #   details: 通过 Reveal.js 在 Markdown 中插入幻灯片
      #   link: https://theme-hope.vuejs.press/zh/guide/markdown/revealjs.html

  # - header: 布局
  #   description: 一个带有完整无障碍支持的响应式布局。
  #   image: /assets/image/layout.svg
  #   bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
  #   bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
  #   highlights:
  #     - title: 布局增强
  #       icon: object-group
  #       details: 添加路径导航、页脚、改进的导航栏、改进的页面导航等。
  #       link: https://theme-hope.vuejs.press/zh/guide/layout/

  #     - title: 深色模式
  #       icon: circle-half-stroke
  #       details: 可以自由切换浅色模式与深色模式
  #       link: https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html

  #     - title: 主题色切换
  #       icon: palette
  #       details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
  #       link: https://theme-hope.vuejs.press/zh/guide/interface/theme-color.html

  #     - title: 幻灯片页面
  #       icon: person-chalkboard
  #       details: 添加幻灯片页面以显示你喜欢的内容
  #       link: https://theme-hope.vuejs.press/zh/guide/layout/slides

  #     - title: 更多
  #       icon: ellipsis
  #       details: RTL 布局，打印支持，全局按钮等
  #       link: https://theme-hope.vuejs.press/zh/guide/interface/others.html

  # - header: 新功能
  #   image: /assets/image/features.svg
  #   bgImage: https://theme-hope-assets.vuejs.press/bg/1-light.svg
  #   bgImageDark: https://theme-hope-assets.vuejs.press/bg/1-dark.svg
  #   features:
  #     - title: 浏览量与评论
  #       icon: comment-dots
  #       details: 配合 Waline 来开启阅读量统计与评论支持
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/comment.html

  #     - title: 文章信息
  #       icon: circle-info
  #       details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/page-info.html

  #     - title: 文章加密
  #       icon: lock
  #       details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/encrypt.html

  #     - title: 搜索支持
  #       icon: search
  #       details: 支持 docsearch 和基于客户端的搜索
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/search.html

  #     - title: 代码复制
  #       icon: copy
  #       details: 一键复制代码块中的代码
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/copy-code.html

  #     - title: 图片预览
  #       icon: image
  #       details: 像相册一样允许你浏览、缩放并分享你的页面图片
  #       link: https://theme-hope.vuejs.press/zh/guide/feature/photo-swipe.html

  # - header: 博客
  #   description: 通过主题创建个人博客
  #   image: /assets/image/blog.svg
  #   bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
  #   bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
  #   highlights:
  #     - title: 博客功能
  #       icon: blog
  #       details: 通过文章的日期、标签和分类展示文章
  #       link: https://theme-hope.vuejs.press/zh/guide/blog/intro.html

  #     - title: 博客主页
  #       icon: home
  #       details: 全新博客主页
  #       link: https://theme-hope.vuejs.press/zh/guide/blog/home.html

  #     - title: 博主信息
  #       icon: home
  #       details: 自定义名称、头像、座右铭和社交媒体链接
  #       link: https://theme-hope.vuejs.press/zh/guide/blog/blogger.html

  #     - title: 时间线
  #       icon: home
  #       details: 在时间线中浏览和通读博文
  #       link: https://theme-hope.vuejs.press/zh/guide/blog/timeline.html

  - header: 进阶
    description: 增强Golang应用能力
    image: /assets/image/advanced.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/4-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/4-dark.svg
    highlights:
      - title: 1. 框架
        icon: dumbbell
        details: 将最终生成的网页针对搜索引擎进行优化。
        link: 

      - title: 2. 机器学习
        icon: sitemap
        details: 自动为你的网站生成 Sitemap
        link: 

      - title: 3. 实战开发
        icon: rss
        details: 生成你的 Feed，并通知你的用户订阅它
        link: 

      # - title: PWA 支持
      #   icon: mobile-screen
      #   details: 让你的网站更像一个 APP
      #   link: https://theme-hope.vuejs.press/zh/guide/advanced/pwa.html

copyright: false
# footer: 使用 <a href="https://theme-hope.vuejs.press/zh/" target="_blank">Hope</a> 主题 | MIT 协议, 版权所有 © 2024-present 希里安
footer: <a href="http://www.github.com/cilliandevops">MIT 协议</a> | © 2024 <a href="http://www.github.com/cilliandevops">希里安</a>
---