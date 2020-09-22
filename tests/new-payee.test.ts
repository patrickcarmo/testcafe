import { Selector, t } from 'testcafe';
import { login } from '../helpers';
import NewPayeePage from '../page-objects/pages/NewPayeePage';

const newPayeePage = new NewPayeePage();

fixture('New payee test').page('http://zero.webappsecurity.com/index.html');

test.before(async (tc) => {
  await login('username', 'password');
})('User can add new payee to the list', async (t) => {
  // Actions
  await t.click(newPayeePage.payBillsTab);
  await t.click(newPayeePage.addNewPayee);
  await t.typeText(newPayeePage.newPayeeName, 'NAME', { paste: true });
  await t.typeText(newPayeePage.newPayeeAddress, 'ADDRESS', { paste: true });
  await t.typeText(newPayeePage.newPayeeAccount, 'ACCOUNT', { paste: true });
  await t.typeText(newPayeePage.newPayeeDetails, 'DETAILS', { paste: true });
  await t.click(newPayeePage.buttonAddNewPayee);

  // Assertion
  await t.expect(newPayeePage.alertContent.exists).ok();
  await t
    .expect(newPayeePage.alertContent.innerText)
    .contains('successfully created.');
});
