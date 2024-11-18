import { mainPageTestData } from "../helpers/mainPageTestData";
import { MainPage } from "../pages/mainPage";

const mainPage = new MainPage;

describe('Main page tests', () => {
  
  it('Check the presence of Main page menu elements ', () => {
    cy.visit('https://telnyx.com');
    mainPage.checkElementDisplayedByName(mainPage.productsItem, mainPageTestData.productsItem);
    mainPage.checkElementDisplayedByName(mainPage.solutionsItem, mainPageTestData.solutionsItem);
    mainPage.checkElementDisplayedByName(mainPage.pricingItem, mainPageTestData.pricingItem);
    mainPage.checkElementDisplayedByName(mainPage.whyTelnyxItem, mainPageTestData.whyTelnyxItem);
    mainPage.checkElementDisplayedByName(mainPage.resourcesItem, mainPageTestData.resourcesItem);
    mainPage.checkElementDisplayedByName(mainPage.developersItem, mainPageTestData.developersItem);
  });
});