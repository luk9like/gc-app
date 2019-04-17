import { AppPage } from './app.po';
import {browser, by, logging, element} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display normal cup', () => {
    page.navigateTo();
    element(by.id('normal')).click();
    element(by.id('design')).click();
    element(by.id('uploadBtn')).click();

    expect(browser.getCurrentUrl()).toMatch('http://localhost:4200/upload');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
