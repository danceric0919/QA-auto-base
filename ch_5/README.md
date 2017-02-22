# PageObject pattern
先想像一個情境，如果你要做的測試如下:
    test case 1:
    1. 登入
    2. 點連結A

    test case 2:
    1. 登入
    2. 點連結B

測試程式可能會長得類似這樣，這邊借用了網路上一個網站來做為範例，這個範例沒辦法執行的
```
describe('test links' function(){
    describe('login and click link A', function(){
        browser.url('http://the-internet.herokuapp.com/login');
        browser.element('#username').setValue('name');
        browser.element('#password').setValue('pwd');

        browser.click('#submit');

        browser.click('#link1')
    });

    describe('login and click link B', function(){
        browser.url('http://the-internet.herokuapp.com/login');
        browser.element('#username').setValue('name');
        browser.element('#password').setValue('pwd');

        browser.click('#submit');

        browser.click('#link2')
    })
});
```

萬一很不幸的，login的頁面在某次改版中決定把username的id 改成name，把password 的id 改成pwd
那我們就要一次改兩個地方才可以，在這邊看起來好像還好，但是萬一今天有成千上萬個case 這樣改下去還得了？

所以我們最好還是根據每個頁面的功能，來實做一些high level的操作出來
例如以上範例，事實上就是到登入頁面做登入的動作
頁面上的組成很簡單，一個名稱的input，一個密碼的input，一個submit的按鈕
我們可以把這個頁面寫成一個物件，在裡面定義一個login的方法

所以以後的測試程式就可以改為以下這樣
```
var loginpage = require('./pages/login');
var menu = require('./pages/menu');

describe('test links' function(){
    describe('login and click link A', function(){
        loginpage.open();
        loginpage.login({
            username: 'name',
            password: 'pwd'
        });

        menu.clickLink1();
    });

    describe('login and click link B', function(){
        loginpage.open();
        loginpage.login({
            username: 'name',
            password: 'pwd'
        });

        menu.clickLink2();
    })
});
```
萬一很不幸的id被修改了，我們只要去loginpage 改好就好，就算有成千上萬個 case也不需要改到天荒地老

請試試看跑一下test case 看看吧

