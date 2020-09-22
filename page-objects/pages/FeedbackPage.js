import { Selector } from 'testcafe';

class FeedbackPage {
  constructor() {
    this.linkToFeedback = Selector('#feedback');
    this.formName = Selector('#name');
    this.formEmail = Selector('#email');
    this.formSubject = Selector('#subject');
    this.formComment = Selector('#comment');
    this.message = Selector('div');
    this.submitButton = Selector('input').withAttribute(
      'value',
      'Send Message'
    );
  }
}

export default FeedbackPage;
