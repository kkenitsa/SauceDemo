const { $ } = require('@wdio/globals');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Cart {
    /**
     * define selectors using getter methods
     */
    get cartItem () {return $('#cart_item');}

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
