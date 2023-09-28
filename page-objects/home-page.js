const { $ } = require('@wdio/globals');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get inventoryContainer () {
        return $('#inventory_container');
    }
}

module.exports = new HomePage();
