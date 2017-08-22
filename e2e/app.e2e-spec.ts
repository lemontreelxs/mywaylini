import { WayliniPage } from './app.po';

describe('waylini App', () => {
  let page: WayliniPage;

  beforeEach(() => {
    page = new WayliniPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
