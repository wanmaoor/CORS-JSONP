# 介绍

新建了两个站点(`user.com` 和 `faker.com`), 前者是模拟的网上银行站点, 里面存放用户的存款金额. 后者是一个访问网站, 它想获取到前者里面的数据. 但是根据浏览器的同源政策, 一般情况下是访问不到的. 于是就有两个很常见的解决方案: 设置`Access-Control-Allow-Origin`和JSONP.

## 使用方法

1. 将源码下载到本地
2. 执行`node index.js [端口号]`

**注意**: `user.com`的指定端口是`8888`, `faker.com`的指定端口是`8889`. `user.com`和`faker.com`在我本机上是修改了hosts映射.

## 切换分支

使用`Access-Control-Allow-Origin`的代码在`master`分支, JSONP在`JSONP`分支
