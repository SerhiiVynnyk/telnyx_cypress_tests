import { MakeData } from "../helpers/makeData";
import { SignUpPage } from "../pages/signUpPage";
import { signUpTestData } from "../helpers/signUpTestData";

const signUpPage = new SignUpPage;

describe('Sign Up page tests', () => {
  const password = MakeData.getValidPassword();
  const email = MakeData.getEmail();

  beforeEach(() => {
    cy.visit('https://telnyx.com/sign-up');
    signUpPage.checkHeaderByName('Create a Telnyx account');
  });

  it('Verify Sign Up functionality with valid data', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, signUpTestData.name);
    signUpPage.enterTextInInputByName(signUpPage.lastName, signUpTestData.surname);
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
  });

  it('Verify Sign Up functionality with empty email field', () => {
    signUpPage.enterTextInInputByName(signUpPage.firstName, signUpTestData.name);
    signUpPage.enterTextInInputByName(signUpPage.lastName, signUpTestData.surname);
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.emailAlert, signUpTestData.emailAlert);
  });

  it('Verify Sign Up functionality with invalid email', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, signUpTestData.invalidEmail);
    signUpPage.enterTextInInputByName(signUpPage.firstName, signUpTestData.name);
    signUpPage.enterTextInInputByName(signUpPage.lastName, signUpTestData.surname);
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.errorAlert, signUpTestData.emailPasswordAlert);
  });

  it('Verify Sign Up functionality without selecting terms and conditions checkbox', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, signUpTestData.name);
    signUpPage.enterTextInInputByName(signUpPage.lastName, signUpTestData.surname);
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.termCondtnAlert, signUpTestData.termCondtnAlert);
  });

  it('Fill in password input with less than 12 characters', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, signUpTestData.name);
    signUpPage.enterTextInInputByName(signUpPage.lastName, signUpTestData.surname);
    signUpPage.enterTextInInputByName(signUpPage.password, signUpTestData.shortPassword);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.passwordMinLengthAlert, signUpTestData.passwordMinLengthAlert);
  });

  it('Verify Create password functionality with password that consist only from numbers', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, signUpTestData.name);
    signUpPage.enterTextInInputByName(signUpPage.lastName, signUpTestData.surname);
    signUpPage.enterTextInInputByName(signUpPage.password, signUpTestData.numberPass);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.passwordOneSymbolAlert, signUpTestData.passwordOneSymbolAlert);
  });

  it('Verify Create password functionality with password that consists only of numbers and lower-case letters', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, signUpTestData.name);
    signUpPage.enterTextInInputByName(signUpPage.lastName, signUpTestData.surname);
    signUpPage.enterTextInInputByName(signUpPage.password, signUpTestData.lowCaseLettersNumPass);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.passwordUpperCaseAlert, signUpTestData.passwordUpperCaseAlert);
  });

  it('Verify Create password functionality with password that consists only of numbers and uppercase letters', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, signUpTestData.name);
    signUpPage.enterTextInInputByName(signUpPage.lastName, signUpTestData.surname);
    signUpPage.enterTextInInputByName(signUpPage.password, signUpTestData.upperCaseLetterNumPass);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.passwordLowerCaseAlert, signUpTestData.passwordLowerCaseAlert);
  });

  it('Entered password displayed after user click show password icon', () => {
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.checkPassInputType(signUpTestData.passwordTypeInput);
    signUpPage.clickShowPassBtn();
    signUpPage.checkPassInputType(signUpTestData.textTypeInput);
    signUpPage.checkInputValue(signUpPage.password, password);
  });
});