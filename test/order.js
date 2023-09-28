const { expect } = require('@wdio/globals');
const LoginPage = require('../page-objects/login-page');
const HomePage = require('../page-objects/home-page');
const Credentials = require('../test-data/credentials')

describe('Login application', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.loginIn(Credentials.userName, Credentials.userPassword);      })


      it('add the items to the cart', () => {
        
    })
})
  

