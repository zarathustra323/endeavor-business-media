const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=60',
      srcset: [
        'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=60',
      srcset: [
        'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=120 2x',
      ],
    },
  },
  gtm: {
    containerId: 'GTM-PTZXJ4B',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Strategies Unlimited offers comprehensive coverage of high-brightness LEDs and LED lighting and laser market sectors.',
  },
  contactUs: {
    branding: {
      bgColor: '#0b5392',
      logo: 'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'juliac@pennwell.com',
    sendFrom: 'Strategies-U.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.strategies-u.com/files/base/pennwell/su/logo.png?h=60',
    bgColor: '#0b5392',
  },
};
