import { Selector, t } from 'testcafe';

fixture('Send forgotten password test').page(
  'http://zero.webappsecurity.com/index.html'
);

test.only('User can request new password to be sent to his email', async (tc) => {
  // Get selectors
  const signInButton = Selector('#signin_button');
  const linkToPassword = Selector('a').withText('Forgot your password ?');
  const emailInput = Selector('#user_email');
  const message = Selector('div').innerText;
  const email = 'email@random.com';

  // Actions
  await tc.click(signInButton);
  await tc.click(linkToPassword);
  await tc.typeText(emailInput, email, { paste: true });
  await tc.pressKey('enter');

  // Assertions
  await t.expect(message).contains(email);
  await t.expect(emailInput.exists).notOk();
});
