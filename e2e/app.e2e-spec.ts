import { UnoPage } from './app.po';

describe('uno App', () => {
  let page: UnoPage;

  beforeEach(() => {
    page = new UnoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
