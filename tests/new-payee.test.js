import { Selector, t } from 'testcafe';

fixture('New payee test').page('http://zero.webappsecurity.com/index.html');

test.before(async (tc) => {
  const signInButton = Selector('#signin_button');
  const userLogin = Selector('#user_login');
  const userPassword = Selector('#user_password');
  const submitButton = Selector('input[type=submit]');

  await tc.click(signInButton);
  await tc.typeText(userLogin, 'username', { paste: true });
  await tc.typeText(userPassword, 'password', { paste: true });
  await tc.click(submitButton);
})('User can add new payee to the list', async (tc) => {
  // Selectors
  const payBillsTab = Selector('#pay_bills_tab');
  const addNewPayee = Selector('a').withText('Add New Payee');
  const newPayeeName = Selector('#np_new_payee_name');
  const newPayeeAddress = Selector('#np_new_payee_address');
  const newPayeeAccount = Selector('#np_new_payee_account');
  const newPayeeDetails = Selector('#np_new_payee_details');
  const buttonAddNewPayee = Selector('#add_new_payee');
  const alertContent = Selector('#alert_content');

  // Actions
  await tc.click(payBillsTab);
  await tc.click(addNewPayee);
  await tc.typeText(newPayeeName, 'NAME', { paste: true });
  await tc.typeText(newPayeeAddress, 'ADDRESS', { paste: true });
  await tc.typeText(newPayeeAccount, 'ACCOUNT', { paste: true });
  await tc.typeText(newPayeeDetails, 'DETAILS', { paste: true });
  await tc.click(buttonAddNewPayee);

  // Assertion
  await tc.expect(alertContent.exists).ok();
  await tc.expect(alertContent.innerText).contains('successfully created.');
});
