# 測試的精髓 - 驗證
在前面的範例中，我們只是打開瀏覽器，然後到www.google.com.tw
接下來就只是印出這個網站的title，似乎沒有太多的意思
寫測試的時候，很重要的一環就是要驗證程式執行的結果
接下來就來說明一下驗證的部分

因為我們使用的test framework 是Mocha，在做assertion時可以選擇用node.js 內建的assert.js
如下範例：
ref: https://mochajs.org/

```
var assert = require('assert');
describe('test', function() {
    it('go to www.google.com.tw and print out title', function(done) {
        browser.url('https://www.google.com.tw/');
        var title = browser.getTitle();
        console.log('Title is: ' + title);

        assert.equal(title, '123');
        done();
    });
});
```

然後去執行這個test script
>$ node_modules/.bin/wdio --spec ./test/test.js

應該就可以看到出現fail 的測試 
```
1) test go to www.google.com.tw and print out title:
'Google' == '123'
```

應該是非常簡單好懂吧，只要把123 換成Google 就可以通過測試了，請自己動手試試看吧

# Chai - 印度拉茶，好用的BDD assertion lib
assert 其實已經有了大部分我們所需要的功能，為什麼還需要Chai呢？
來比較一下Chai 跟assert 兩個的寫法有什麼差異吧

Assert
```
assert.equal(title, '123');
```

Chai
```
title.should.equal('Google');
```

應該可以很簡單的看出來Chai 提供了更為語意化的寫法
還有多種不同style的interface可以使用，上面我們使用的是
而且也提供了非同步測試用的assert library，這部分以後再說

用以下指令可以執行test_2.js 的測試
>$ node_modules/.bin/wdio --spec ./test/test_2.js

ref: http://chaijs.com/
