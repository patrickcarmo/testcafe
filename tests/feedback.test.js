import { Selector, t } from 'testcafe';
import FeedbackPage from '../page-objects/pages/FeedbackPage';

const feedbackPage = new FeedbackPage();
fixture('Feedback form test').page('http://zero.webappsecurity.com/index.html');

test('User can submit feedback via form', async (t) => {
  // Actions
  await t.click(feedbackPage.linkToFeedback);
  await t.typeText(feedbackPage.formName, 'NAME', { paste: true });
  await t.typeText(feedbackPage.formEmail, 'email@random.com', { paste: true });
  await t.typeText(feedbackPage.formSubject, 'SUBJECT', { paste: true });
  await t.typeText(feedbackPage.formComment, 'COMMENT', { paste: true });
  await t.click(feedbackPage.submitButton);

  // Assertion
  await t
    .expect(feedbackPage.message.innerText)
    .contains('Thank you for your comments');
});
