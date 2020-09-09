import { Selector, t } from 'testcafe';

fixture('Search box test').page('http://zero.webappsecurity.com/index.html');

test('User can search information using search box', async (tc) => {
  // Selectors
  const searchTerm = Selector('#searchTerm');
  const resultsTitle = Selector('h2');
  const linkText = Selector('div').innerText;

  // Actions
  await tc.typeText(searchTerm, 'online bank', { paste: true });
  await tc.pressKey('enter');

  // Assertion
  await tc.expect(resultsTitle.exists).ok();
  await tc.expect(searchTerm.exists).ok();
  await tc.expect(linkText).contains('Zero - Free Access to Online Banking');
});
