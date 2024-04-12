---
title: 3.Hello World！
# icon: object-group
order: 3
category:
  - 数据
tag:
  - 布局
---

## 开始你的第一个Go程序

创建一个新的目录`hello`在你的GOPATH中，创建一个新文件`hello.go`，并添加以下代码：

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}
```

在终端中运行此程序：

```go
go run hello.go
```

如果看到"Hello, world!"输出，恭喜你，你已经成功运行了你的第一个Go程序。
