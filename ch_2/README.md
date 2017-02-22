# 使用express generator建立網站樣板
安裝樣板產生器
> $ npm install express-generator -g
> 
> $ cd ch_2
> 
> $ express .

可以看到在當前路徑下產生如下檔案結構
```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```

仔細看一下package.json的內容
```
{
  "name": "ch_2",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "jade": "~1.11.0",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0"
  }
}

```
可以看到scripts裡面定義了一個start動作，內容是node ./bin/www 

看到這邊有沒有一點點熟悉感? 在ch_1 用了node index.js這個指令來運行我們所設計的網站，這邊其實是定義了一個npm指令叫start 而 start就是幫我們做 node ./bin/www這件事

以後就可以在package.json 所在這層的目錄下使用npm start 指令來運行網站，而網站的進入點就是在ch2目錄下的bin/www，而在bin/www裡面把外層的app.js 納入，網站的主要邏輯在這邊被處理

在app.js 裡面可以看到以下程式(擷取片段出來說明)
```
...
var routes = require('./routes/index');
var users = require('./routes/users');
...

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
...

app.use('/', routes);
app.use('/users', users);
...

```

這邊簡單說明一下view engine 與 routes
- view engine
  - 這邊所使用的是express generator預設使用的樣版引擎Jade(http://jade-lang.com/)，Jade提供了一種簡潔的方式來生成html 文件
- routes
  - 這邊暫時就先理解成進入到 http://localhost:3000/ 的request會被routes(./routes/index.js) 拿去處理，而進入到 http://localhost:3000/users/ 的request會被users(./routes/users.js) 拿去處理

> $ npm install
> 
> $ npm start

打開瀏覽器輸入http://localhost:3000 應該就可以看到預設的頁面出現