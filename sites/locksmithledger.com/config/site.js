const navigation = require('./navigation');
const leaders = require('./leaders');

module.exports = {
  navigation,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=60',
      srcset: [
        'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=60',
      srcset: [
        'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/4087326/profile', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/LocksmithLedger', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/locksmithledgerinternational', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-N7CHFQS',
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
      logo: 'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=60',
    },
    to: 'nbrokamp@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'nbrokamp@endeavorb2b.com',
    sendFrom: 'LocksmithLedger.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.locksmithledger.com/files/base/cygnus/ll/image/static/logo/lsl.png?h=60',
    bgColor: '#164f77',
  },
};
