import { AdminPanelClientPage } from './app.po';

describe('admin-panel-client App', () => {
  let page: AdminPanelClientPage;

  beforeEach(() => {
    page = new AdminPanelClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('laq works!');
  });
});
