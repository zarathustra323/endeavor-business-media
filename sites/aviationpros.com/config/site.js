const navigation = require('./navigation');
const gam = require('./gam');
const gcse = require('./gcse');
const nativeX = require('./native-x');

module.exports = {
  navigation,
  gam,
  gcse,
  nativeX,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.aviationpros.com/files/base/cygnus/cavc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.aviationpros.com/files/base/cygnus/cavc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.aviationpros.com/files/base/cygnus/cavc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.aviationpros.com/files/base/cygnus/cavc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'twitter', href: 'https://www.twitter.com/Aviation_Pros', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/AviationPros', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-WKMCBZC',
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
      logo: 'https://img.aviationpros.com/files/base/cygnus/cavc/image/static/logo/site_logo.png?h=60',
    },
    to: 'notifications@aviationpros.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'notifications@aviationpros.com',
    sendFrom: 'AviationPros.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.aviationpros.com/files/base/cygnus/cavc/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
