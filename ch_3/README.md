# 安裝與設定webdriver io
> $ npm install
> 
> $ node_modules/.bin/wdio config

```
=========================
WDIO Configuration Helper
=========================

? Where do you want to execute your tests? On my local machine
? Which framework do you want to use? mocha
? Shall I install the framework adapter for you? Yes
? Where are your test specs located? ./test/*.js
? Which reporter do you want to use? (Press <space> to select, <a> to toggle all, <i> to inverse selection)
? Do you want to add a service to your test setup? (Press <space> to select, <a> to toggle all, <i> to inver
se selection)
? Level of logging verbosity command
? In which directory should screenshots gets saved if a command fails? ./errorShots/
? What is the base url? http://localhost

Installing wdio packages:
pkg: wdio-mocha-framework
```

透過webdriver 自帶的設定工具可以很快地把基礎設定全都處理好
執行完之後就會發現在目錄下多了一個./wdio.conf.js 
有興趣也可以讀一下裡面的內容～

請注意到 *Where are your test specs located?* 這個設定，關係到webdriverio 要去哪裡找測試程式，請記得設定到你的test script 所在的位置

ref: http://webdriver.io/

# 第一個測試suite
> $ cd test
> 
> $ vim test.js

```
describe('this is your 1st test case', function() {
    it('title should be google', function() {
        browser.url('https://www.google.com.tw/');
        var title = browser.getTitle();
        console.log('Title is: ' + title);
    });
});
```

上面這段就是第一個測試程式了，內容非常簡單，就是去到www.google.com.tw 然後在console 印出title來

比較值得注意的是describe跟it兩個函數
簡單的說，describe可以想成是一個使用情境，而且一個describe 裡面還可以包含多個describe 組成一個更大的使用情境，而一個it 就是一個驗證的項目(或是test case)

一般來說一個使用情境會由多個情境組成，而一個情境裡面會有多個測試項目
一個完整的test suite 有可能會長得如下:
```
describe('test scenario', function{
    describe('scenario case 1' function(){
        ...
        it('assertion 1_1', function(){
            ...
        });

        it('assertion 1_2', function(){
            ...
        });
    });

    describe('scenario case 2' function(){
        ...
        it('assertion 2_1', function(){
            ...
        });

        it('assertion 2_2', function(){
            ...
        });
    });
});
```

最後跑一次我們的測試程式
>$ node_modules/.bin/wdio

沒意外的話....很有可能會得到一個error
如果出現了Exception: Cannot find firefox binary in PATH. 這個的錯誤
只要到wdio.conf.js 裡面把capabilities 底下的browserName 換成chrome 或是你想要用的瀏覽器即可

