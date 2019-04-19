import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(dest) {
    return browser.get(dest) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('gc-root h1')).getText() as Promise<string>;
  }

  getCurrentModel() {
    return element(by.css('gc-size p')).getText() as Promise<string>;
  }
}
