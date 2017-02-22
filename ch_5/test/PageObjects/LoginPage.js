var Page = require('./Page')
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.element('#username'); } },
    password: { get: function () { return browser.element('#password'); } },
    form:     { get: function () { return browser.element('#login'); } },
    flash:    { get: function () { return browser.element('#flash'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.form.submitForm();
    } },

    login: { value: function(name, password){
        this.username.setValue(name);
        this.password.setValue(password);
        this.submit();
    }}
});
module.exports = LoginPage