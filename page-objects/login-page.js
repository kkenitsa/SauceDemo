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

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async loginIn (username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
