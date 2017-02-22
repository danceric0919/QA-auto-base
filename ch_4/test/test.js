var assert = require('assert');

describe('test', function() {
    it('go to www.google.com.tw and print out title', function() {
        browser.url('https://www.google.com.tw/');
        var title = browser.getTitle();

        assert.equal(title, '123');
        console.log('Title is: ' + title);
    });
});