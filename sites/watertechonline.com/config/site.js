const navigation = require('./navigation');
const leaders = require('./leaders');

module.exports = {
  navigation,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=60',
      srcset: [
        'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=60',
      srcset: [
        'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/in/watertechnology', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/WaterTechOnline', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/WaterTechnology', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-TSPJXZ4',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=60',
    },
    to: 'tdower@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'tdower@endeavorb2b.com',
    sendFrom: 'WaterTechOnline.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.watertechonline.com/files/base/ebm/wto/image/static/wto-logo.png?h=60',
    bgColor: '#164f77',
  },
};
