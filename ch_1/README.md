# 開始一個運行在node上的網站
> $ npm init

**括起來的部分為自行輸入，其他部分暫時先不改

```
name: (node) **web**
version: (1.0.0) 
description: **The testing web site**
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/darienyang/repo/QA-auto-base/node/package.json:

{
  "name": "web",
  "version": "1.0.0",
  "description": "The testing web site",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this ok? (yes) **yes**
```

結束後可以在當前目錄下看到一個package.json檔，內容如上{} 括起來的部分

# 安裝Express
> $ npm install express --save

這行指令的意思是: 透過npm (nodejs的套件管理)幫我們安裝express這個套件

--save的意思是把express 加到package.json 裡面的 dependencies內，未來如果有人下載了這個package.json 只要輸入npm install 後，npm就會根據package.json 裡面的設定幫我們長出一個node的網站出來

可以看一下package.json的內容，會發現多了
```
"dependencies": {
    "express": "^4.14.0"
  }
```

並且在目錄下多了node_modules資料夾，nodejs的套件分為global安裝跟local安裝，如果沒有下--global指令的話，就被當作是local安裝，也就是說這次的安裝只給現在這個package所使用而已

# 開始第一個node網站
可以在express 的官網找到這些說明
(http://expressjs.com/en/starter/hello-world.html)
> $ > index.js

index.js的內容
```
//說明要使用express這個套件
var express = require('express');
var app = express();

//當收到一個get request時，會回應Hello World到畫面上
app.get('/', function (req, res) {
  res.send('Hello World!');
});

//讓網站運行在3000 port上
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
```

儲存後，輸入以下指令來啟動
> $ node index.js

在console 上會顯示: 
> Example app listening on port 3000!

接著打開browser，輸入網址: http://localhost:3000

在畫面上就會顯示Hello World!







