
const { expect } = require('@wdio/globals');
const LoginPage = require('../page-objects/login-page');
const Credentials = require('../test-data/credentials');
const HomePage = require('../page-objects/home-page');
const ItemsTitle = require('../test-data/items');

describe('Login application', () => {
    beforeEach(() => {
      LoginPage.open();
      LoginPage.loginIn(Credentials.userName, Credentials.userPassword);  
      expect(HomePage.inventoryContainer).toBeExisting();   
      });


    it('add the item to the cart', async () => {
      HomePage.addItemToCart(ItemsTitle.backpack);
      HomePage.verifyThatItemWasAdded();
      await browser.pause(20000);
    });
});

  

