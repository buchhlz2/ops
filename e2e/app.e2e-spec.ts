import { OpsSitePage } from './app.po';

describe('ops-site App', function() {
  let page: OpsSitePage;

  beforeEach(() => {
    page = new OpsSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
