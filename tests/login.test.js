import { Selector, t } from 'testcafe';
import NavBar from '../page-objects/components/NavBar';
import LoginPage from '../page-objects/pages/LoginPage';

const navbar = new NavBar();
const loginPage = new LoginPage();

fixture('Login Test').page('http://zero.webappsecurity.com/index.html');

test('User cannot login with invalid credentials', async (t) => {
  // Actions
  await t.click(navbar.signInButton);
  loginPage.loginToApp('invalid username', 'invalid password');

  // Assertion
  await t
    .expect(loginPage.errorMessage.innerText)
    .contains('Login and/or password are wrong.');
});

test('User can login into application', async (t) => {
  // Selectors
  const accountSummaryTab = Selector('#account_summary_tab');

  // Actions
  await t.click(navbar.signInButton);
  loginPage.loginToApp('username', 'password');

  // Assertion
  await t.expect(accountSummaryTab.exists).ok();
  await t.expect(loginPage.loginForm.exists).notOk();
});
