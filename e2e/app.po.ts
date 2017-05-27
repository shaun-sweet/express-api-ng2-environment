import { browser, element, by } from 'protractor';

export class AdminPanelClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('laq-root h1')).getText();
  }
}
