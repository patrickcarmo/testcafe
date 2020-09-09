import { Selector, t } from 'testcafe';

fixture('Feedback form test').page('http://zero.webappsecurity.com/index.html');

test('User can submit feedback via form', async (tc) => {
  // Selectors
  const linkToFeedback = Selector('#feedback');
  const formName = Selector('#name');
  const formEmail = Selector('#email');
  const formSubject = Selector('#subject');
  const formComment = Selector('#comment');
  const submitButton = Selector('input').withAttribute('value', 'Send Message');
  const message = Selector('div').innerText;

  // Actions
  await tc.click(linkToFeedback);
  await tc.typeText(formName, 'NAME', { paste: true });
  await tc.typeText(formEmail, 'email@random.com', { paste: true });
  await tc.typeText(formSubject, 'SUBJECT', { paste: true });
  await tc.typeText(formComment, 'COMMENT', { paste: true });
  await tc.click(submitButton);

  // Assertion
  await tc.expect(message).contains('Thank you for your comments');
});
