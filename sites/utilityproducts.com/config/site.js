const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.utilityproducts.com/files/base/pennwell/up/logo.png?h=60',
      srcset: [
        'https://img.utilityproducts.com/files/base/pennwell/up/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.utilityproducts.com/files/base/pennwell/up/logo.png?h=60',
      srcset: [
        'https://img.utilityproducts.com/files/base/pennwell/up/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/utility-products?trk=other_brands_logo', target: '_blank' },
    { provider: 'twitter', href: 'http://twitter.com/UtilityProducts', target: '_blank' },
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Utility-Products-Magazine/133739816672957', target: '_blank' },
  ],
  gtm: {
    containerId: 'GTM-52ZXGBW',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Utility Products serves readers who work in electric, cable and telecom utilities, as well as contractors, manufacturers, suppliers and other service companies who support these utilities. ',
  },
  contactUs: {
    branding: {
      bgColor: '#494232',
      logo: 'https://img.utilityproducts.com/files/base/pennwell/up/logo.png?h=60',
    },
    to: 'clong@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'clong@pennwell.com',
    sendFrom: 'UtilityProducts.com <noreply@baseplatform.io>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.utilityproducts.com/files/base/pennwell/up/logo.png?h=60',
    bgColor: '#494232',
  },
};
