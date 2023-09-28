const { $ ,expect} = require('@wdio/globals');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get inventoryContainer () { return $('#inventory_container');}
    get inventoryItem () { return $('.inventory_item');}
    get cartIcon() { return $('.shopping_cart_badge');}

    addItemToCart (value) {
         this.inventoryItem.forEach(ele => {
            const item = ele.getText();
            if(item.includes(value)){
                ele.findElement(By.Id('add-to-cart-sauce-labs-bike-light')).click();
            }
        });
   };

   verifyThatItemWasAdded () {
     this.cartIcon.getText().then((value) => {
        expect(value).toHaveValue(1);
    });

    }
};

module.exports = new HomePage();
