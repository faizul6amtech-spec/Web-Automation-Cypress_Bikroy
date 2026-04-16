// import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
// import mobilesPages from "../../Locators/mobiles"; //mobiles steps commands to connect with mobilesSteps to mobiles.js
// import allData from '../../data/data' // date.js page connected to URL & time wait.
// import 'cypress-file-upload';           //import cypress file upload 
// Cypress.config('defaultCommandTimeout', 60000) // time wait
// const locator = new mobilesPages(); 
// const data = new allData();
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ZonePages from "../../Locators/zone";
import allData from '../../data/data';
import 'cypress-file-upload';

Cypress.config('defaultCommandTimeout', 60000);

const locator = new ZonePages();
const data = new allData();

// Given('Open Browser and go to the login page',()=> {
//     // Enter the URL
//     cy.visit(data.mart_url);
//     });
// Cypress.on('uncaught:exception', (err, runnable) => {
//   if (err.message.includes('$ is not defined')) {
//     return false
//   }
// })
// Cypress.on('uncaught:exception', (err, runnable) => {
//   if (err.message.includes('Promise.allSettled')) {
//     return false
//   }
// })
// Cypress.on('uncaught:exception', (err, runnable) => {
//   if (err.message.includes('ckeditor is not a function')) {
//     return false;
//   }
// });

// When('Enter login credentials and click on login button', () => {   
//         //Check mobiles text
//      cy.xpath(locator.emailinputbox).should('be.visible');
//      cy.xpath(locator.emailinputbox).click()
//      cy.xpath(locator.emailinputbox).type('admin@admin.com')
//      cy.xpath(locator.passwordinputbox).should('be.visible');
//      cy.xpath(locator.passwordinputbox).click()
//      cy.xpath(locator.passwordinputbox).type('12345678')           
//      cy.xpath(locator.loginbutton).should('be.visible')
//      cy.xpath(locator.loginbutton).click()
//      cy.wait(2000)
     
//     });

// Then("Check that it redirect to the home page",  ()=> {              
//         cy.xpath(locator.adminhomelogo).should('be.visible')
//        });

// Function




