var should = require('chai').should();

describe('test', function() {
    it('go to www.google.com.tw and print out title', function() {
        browser.url('https://www.google.com.tw/');
        var title = browser.getTitle();

        title.should.equal('Google');
        console.log('Title is: ' + title);
    });
});