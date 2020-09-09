import { t } from 'testcafe';

export async function login(userName, password) {
  await t.click('#signin_button');
  await t.typeText('#user_login', userName, { paste: true });
  await t.typeText('#user_password', password, { paste: true });
  await t.click('input[type=submit]');
}
