import { MainPage } from "../pages/mainPage";

const mainPage = new MainPage;

describe('Main page tests', () => {
  
  it('Check the presence of Main page menu elements ', () => {
    cy.visit('https://telnyx.com');
    mainPage.checkElementDisplayedByName(mainPage.productsItem, 'Products');
    mainPage.checkElementDisplayedByName(mainPage.solutionsItem, 'Solutions');
    mainPage.checkElementDisplayedByName(mainPage.pricingItem, 'Pricing');
    mainPage.checkElementDisplayedByName(mainPage.whyTelnyxItem, 'Why Telnyx');
    mainPage.checkElementDisplayedByName(mainPage.resourcesItem, 'Resources');
    mainPage.checkElementDisplayedByName(mainPage.developersItem, 'Developers');
  });
});