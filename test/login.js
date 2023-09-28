const { expect } = require('@wdio/globals');
const LoginPage = require('../page-objects/login-page');
const HomePage = require('../page-objects/home-page');
const Credentials = require('../test-data/credentials')

describe('Login application', () => {
    it('user should be able to login with valid credentials', () => {
        LoginPage.open();
        LoginPage.loginIn(Credentials.userName, Credentials.userPassword);
        expect(HomePage.inventoryContainer).toBeExisting();
    })
})

