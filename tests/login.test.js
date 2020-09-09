import { Selector } from 'testcafe';

fixture('Login Test').page('http://zero.webappsecurity.com/index.html');

test('User cannot login with invalid credentials', async (tc) => {
  const signInButton = Selector('#signin_button');
  await tc.click(signInButton);

  const loginForm = Selector('#login_form');
  await tc.expect(loginForm.exists).ok();

  const userLogin = Selector('#user_login');
  const userPassword = Selector('#user_password');
  await tc.typeText(userLogin, 'invalid login', { paste: true });
  await tc.typeText(userPassword, 'invalid password', { paste: true });

  const submitButton = Selector('input[type=submit]');
  await tc.click(submitButton);

  const alertError = Selector('.alert.alert-error');
  await tc.expect(alertError.exists).ok();
});

test('User can login into application', async (tc) => {
  const signInButton = Selector('#signin_button');
  await tc.click(signInButton);

  const loginForm = Selector('#login_form');
  await tc.expect(loginForm.exists).ok();

  const userLogin = Selector('#user_login');
  const userPassword = Selector('#user_password');
  await tc.typeText(userLogin, 'username', { paste: true });
  await tc.typeText(userPassword, 'password', { paste: true });

  const submitButton = Selector('input[type=submit]');
  await tc.click(submitButton);

  const accountSummaryTab = Selector('#account_summary_tab');
  await tc.expect(accountSummaryTab.exists).ok();
  await tc.expect(loginForm.exists).notOk();

  const iconUser = Selector('.icon-user');
  await tc.click(iconUser);

  const logoutLink = Selector('#logout_link');
  await tc.click(logoutLink);
  await tc.expect(logoutLink.exists).notOk();
  await tc.expect(signInButton.exists).ok();
});
