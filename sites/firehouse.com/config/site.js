const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
      srcset: [
        'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/1938315/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/FirehouseNews', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/firehousecom', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-WZWBT3Q',
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
      logo: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
    },
    to: 'websupport@firehouse.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'rmi@firehouse.com',
    sendFrom: 'Firehouse.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.firehouse.com/files/base/cygnus/fhc/image/static/logo/site_logo.png?h=60',
    bgColor: '#164f77',
  },
};
