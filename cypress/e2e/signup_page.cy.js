import { MakeData } from "../helpers/makeData";
import { SignUpPage } from "../pages/signUpPage";

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
    signUpPage.enterTextInInputByName(signUpPage.firstName, 'Name');
    signUpPage.enterTextInInputByName(signUpPage.lastName, 'Surname');
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
  });

  it('Verify Sign Up functionality with empty email field', () => {
    signUpPage.enterTextInInputByName(signUpPage.firstName, 'Name');
    signUpPage.enterTextInInputByName(signUpPage.lastName, 'Surname');
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.emailAlert, 'This field is required');
  });

  it('Verify Sign Up functionality with invalid email', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, 'invalidemail');
    signUpPage.enterTextInInputByName(signUpPage.firstName, 'Name');
    signUpPage.enterTextInInputByName(signUpPage.lastName, 'Surname');
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.errorAlert, 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again');
  });

  it('Verify Sign Up functionality without selecting terms and conditions checkbox', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, 'Name');
    signUpPage.enterTextInInputByName(signUpPage.lastName, 'Surname');
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.termCondtnAlert, 'Please accept the terms and conditions');
  });

  it('Fill in password input with less than 12 characters', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, 'Name');
    signUpPage.enterTextInInputByName(signUpPage.lastName, 'Surname');
    signUpPage.enterTextInInputByName(signUpPage.password, 'qkrtiolanvi');
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.passwordMinLengthAlert, 'Password must be at least 12 characters');
  });

  it('Verify Create password functionality with password that consist only from numbers', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, 'Name');
    signUpPage.enterTextInInputByName(signUpPage.lastName, 'Surname');
    signUpPage.enterTextInInputByName(signUpPage.password, '123456789012');
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.passwordOneSymbolAlert, 'Password must contain at least one symbol');
  });

  it('Verify Create password functionality with password that consists only of numbers and lower-case letters', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, 'Name');
    signUpPage.enterTextInInputByName(signUpPage.lastName, 'Surname');
    signUpPage.enterTextInInputByName(signUpPage.password, 'qlma12345678');
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.passwordUpperCaseAlert, 'Password must contain at least one upper-case letter');
  });

  it('Verify Create password functionality with password that consists only of numbers and uppercase letters', () => {
    signUpPage.enterTextInInputByName(signUpPage.email, email);
    signUpPage.enterTextInInputByName(signUpPage.firstName, 'Name');
    signUpPage.enterTextInInputByName(signUpPage.lastName, 'Surname');
    signUpPage.enterTextInInputByName(signUpPage.password, 'QASZ12345678');
    signUpPage.clickCheckboxByLocator(signUpPage.termsAndConditions);
    signUpPage.clickSignUpBtn();
    signUpPage.checkAlertHaveText(signUpPage.passwordLowerCaseAlert, 'Password must contain at least one lower-case');
  });

  it('Entered password displayed after user click show password icon', () => {
    signUpPage.enterTextInInputByName(signUpPage.password, password);
    signUpPage.checkPassInputType('password');
    signUpPage.clickShowPassBtn();
    signUpPage.checkPassInputType('text');
    signUpPage.checkInputValue(signUpPage.password, password);
  });
});