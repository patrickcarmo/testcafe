import { Selector, t } from 'testcafe';
import Navbar from '../page-objects/components/Navbar';
import LoginPage from '../page-objects/pages/LoginPage';
import ForgottenPasswordPage from '../page-objects/pages/ForgottenPasswordPage';

const navbar = new Navbar();
const loginPage = new LoginPage();
const forgottenPasswordPage = new ForgottenPasswordPage();

fixture('Send forgotten password test').page(
  'http://zero.webappsecurity.com/index.html'
);

test('User can request new password to be sent to his email', async (t) => {
  const email = 'email@random.com';

  // Actions
  await t.click(navbar.signInButton);
  await t.click(loginPage.forgottenPassword);
  await t.typeText(forgottenPasswordPage.emailInput, email, {
    paste: true,
    replace: true,
  });
  await t.pressKey('enter');

  // Assertions
  await t.expect(forgottenPasswordPage.message.innerText).contains(email);
  await t.expect(forgottenPasswordPage.emailInput.exists).notOk();
});
