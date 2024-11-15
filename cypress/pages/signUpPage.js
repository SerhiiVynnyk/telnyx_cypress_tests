import { Actions } from "../helpers/actions";
import { Assertions } from "../helpers/assertions";

export class SignUpPage {
  signUpHeader = '.c-PJLV.c-rMlRu';
  email = '#email';
  firstName = '#first_name';
  lastName = '#last_name';
  password = '#password';
  termsAndConditions = '#terms_and_conditions';
  signUpBtn = '[type="submit"]';
  emailAlert = '#email_message'
  errorAlert = '.c-UUKrH-kDyeyw-type-error'
  firstNameAlert = '#first_name_message';
  termCondtnAlert = '#terms_and_conditions_message';
  passwordMinLengthAlert = '#passwordMinLength';
  passwordOneSymbolAlert = '#passwordOneSymbol';
  passwordUpperCaseAlert= '#passwordUpperCase';
  passwordLowerCaseAlert = '#passwordLowerCase';
  showPassword = '[aria-label="show password"]';

  checkHeaderByName(text) {
    Assertions.expectToDisplayElementContainsValue(this.signUpHeader, text);
  }
  enterTextInInputByName(locator, text) {
    Actions.typeText(locator, text);
  }

  clickCheckboxByLocator(locator) {
    Actions.clickElementByLocator(locator)
  }

  clickSignUpBtn() {
    Actions.clickElementContainsValue(this.signUpBtn, 'SIGN UP');
  }

  clickShowPassBtn() {
    Actions.clickElementByLocator(this.showPassword);
  }

  checkAlertHaveText(locator, text) {
    Assertions.expectElementToHaveText(locator, text)
  }

  checkPassInputType(value) {
    Assertions.expectElementAttributeHaveValue(this.password, 'type', value);
  }

  checkInputValue(locator, value) {
    Assertions.expectElementToHaveValue(locator, value);
  }
}