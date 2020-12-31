import { browser, by, element } from 'protractor';

export class AppPage {
<<<<<<< HEAD
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.deepCss('app-root ion-content')).getText();
=======
  navigateTo(destination) {
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

  getPageOneTitleText() {
    return element(by.tagName('app-home')).element(by.deepCss('ion-title')).getText();
>>>>>>> d63a2ddcbd48ded45ae7ed7a702e2a3143fc1113
  }
}
