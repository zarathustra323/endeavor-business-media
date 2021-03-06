const contactUsHandler = require('@endeavor-business-media/package-common/contact-us');
const loadInquiry = require('@endeavor-business-media/package-inquiry/load-from-config');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const magazine = require('./magazine');
const publishedContent = require('./published-content');
const search = require('./search');
const subscribe = require('./subscribe');
const shiftCalendar = require('./shiftcalendar');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Handle submissions on /__inquiry
  // @todo This should be removed once inquiry is moved to core.
  loadInquiry(app);

  // Handle contact is submissions on /__contact-us
  // @todo This should be removed once contact-us is moved to core.
  contactUsHandler(app);

  // Homepage
  home(app);

  // Magazine Pages
  magazine(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Published Content Pages
  publishedContent(app);

  // Search
  search(app);

  // Subscription Pages
  subscribe(app);

  // Shift Calendar
  shiftCalendar(app);

  // Website Sections
  websiteSections(app);
};
