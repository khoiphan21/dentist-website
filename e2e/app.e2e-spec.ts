import { FamilyDentalPage } from './app.po';

describe('family-dental App', () => {
  let page: FamilyDentalPage;

  beforeEach(() => {
    page = new FamilyDentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
