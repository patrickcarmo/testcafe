import { Selector } from 'testcafe';

class NewPayeePage {
  payBillsTab: Selector = Selector('#pay_bills_tab');
  addNewPayee: Selector = Selector('a').withText('Add New Payee');
  newPayeeName: Selector = Selector('#np_new_payee_name');
  newPayeeAddress: Selector = Selector('#np_new_payee_address');
  newPayeeAccount: Selector = Selector('#np_new_payee_account');
  newPayeeDetails: Selector = Selector('#np_new_payee_details');
  buttonAddNewPayee: Selector = Selector('#add_new_payee');
  alertContent: Selector = Selector('#alert_content');
}

export default NewPayeePage;
