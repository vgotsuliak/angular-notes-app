import { AngularNotesAppPage } from './app.po';

describe('angular-notes-app App', () => {
  let page: AngularNotesAppPage;

  beforeEach(() => {
    page = new AngularNotesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
