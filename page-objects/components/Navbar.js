import { Selector, t } from 'testcafe';

class Navbar {
  constructor() {
    this.searchTerm = Selector('#searchTerm');
    this.signInButton = Selector('#signin_button');
  }

  async search(text) {
    await t
      .typeText(this.searchTerm, text, { paste: true, replace: true })
      .pressKey('enter');
  }
}

export default Navbar;
