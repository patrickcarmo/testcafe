import { Selector } from 'testcafe';

fixture('Getting started with TestCafe')
  .page('https://devexpress.github.io/testcafe/example/')
  .beforeEach(async (tc) => {
    await tc.setTestSpeed(1);
    await tc.setPageLoadTimeout(0);
  });

test('Submit form', async (tc) => {
  await tc.typeText('#developer-name', 'Patrick');
  await tc.click('#submit-button');
});

test('Check message on submit form', async (tc) => {
  const developer_name_input = Selector('#developer-name');
  const submit_button = Selector('#submit-button');
  const article_header_inner_text = Selector('#article-header').innerText;
  const developer_name_input_value = 'Patrick';

  await tc.typeText(developer_name_input, developer_name_input_value);
  await tc.click(submit_button);

  await tc
    .expect(article_header_inner_text)
    .contains(developer_name_input_value);
});
