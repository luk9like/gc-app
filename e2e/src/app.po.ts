import { browser } from 'protractor';

export class AppPage {
  /**
   * Navigate to an path
   * @param dest      The path to navigate to
   * @return Promise<any>  The browser navigates to the selected destination
   */
  static navigateTo(dest) {
    return browser.get(dest) as Promise<any>;
  }
}
