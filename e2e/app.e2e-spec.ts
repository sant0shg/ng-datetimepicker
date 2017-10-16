import { NgDatepickerPage } from './app.po';

describe('ng-datepicker App', () => {
  let page: NgDatepickerPage;

  beforeEach(() => {
    page = new NgDatepickerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
