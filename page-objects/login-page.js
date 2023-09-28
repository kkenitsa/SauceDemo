const { $ } = require('@wdio/globals');
const Navigation = require('./navigation');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Navigation {
    /**
     * define selectors using getter methods
     */
    get usernameInput () {return $('#user-name');}
    get passwordInput () {return $('#password');}
    get loginBtn (){ return $('#login-button');}

    loginIn (username, password) {
        this.usernameInput.setValue(username);
        this.passwordInput.setValue(password);
        this.loginBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
