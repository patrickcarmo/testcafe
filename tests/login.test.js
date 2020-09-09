import { Selector } from 'testcafe';
import { login } from '../helpers';

fixture('Login Test').page('http://zero.webappsecurity.com/index.html');

test('User cannot login with invalid credentials', async (tc) => {
  // Selectors
  const alertError = Selector('.alert.alert-error');

  // Actions
  await login('userName', 'password');

  // Assertion
  await tc.expect(alertError.exists).ok();
});

test('User can login into application', async (tc) => {
  // Selectors
  const loginForm = Selector('#login_form');
  const accountSummaryTab = Selector('#account_summary_tab');

  // Actions
  await login('username', 'password');

  // Assertion
  await tc.expect(accountSummaryTab.exists).ok();
  await tc.expect(loginForm.exists).notOk();
});
