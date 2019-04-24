import { AppPage } from './app.po';
import {browser, by, logging, element} from 'protractor';
import * as path from 'path';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should upload a design', () => {
    page.navigateTo('/upload');
    const file = 'large.png',
        absolutePath = path.resolve(__dirname, file);

    element(by.id('design')).sendKeys(absolutePath);
    element(by.id('uploadButton')).click();

    const designName = element(by.id('designLabel')).getText();
    expect(designName).toMatch('large.png');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
