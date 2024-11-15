import { Assertions } from "../helpers/assertions";

export class MainPage {
  productsItem = '[id="radix-:Rl6jm:"]';
  solutionsItem = '[id="radix-:R156jm:"]';
  pricingItem = '[href="/pricing"]';
  whyTelnyxItem = '[id="radix-:R256jm:"]';
  resourcesItem = '[id="radix-:R2l6jm:"]';
  developersItem = '[id="radix-:R356jm:"]';
  checkElementDisplayedByName(locator, value) {
    Assertions.expectToDisplayElementContainsValue(locator, value);
  }
}