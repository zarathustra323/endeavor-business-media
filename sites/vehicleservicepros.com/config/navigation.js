const dragonForms = require('./dragon-forms');

module.exports = {
  primary: {
    items: [
      { href: '/service-repair', label: 'Service Repair' },
      { href: '/collision-repair', label: 'Collision Repair' },
      { href: '/shop-operations', label: 'Shop Operations' },
      { href: '/distribution', label: 'Distribution' },
      { href: '/training-and-resources', label: 'Training and Resources' },
      { href: '/industry-news', label: 'Industry News' },
      { href: '/directory', label: 'Product Guide' },
    ],
  },
  secondary: {
    items: [
      { href: 'http://www.cdsreportnow.com/GET/INFO?PTEN', label: 'PTEN E-Inquiry', target: '_blank' },
      { href: 'http://www.cdsreportnow.com/GET/INFO?PRD', label: 'PD E-Inquiry', target: '_blank' },
      { href: '/magazine', label: 'In Print' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/subscribe', label: 'Subscribe' },
      { href: 'https://vehicleservicepros.jobboard.io', label: 'Job Board', target: '_blank' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/advertise', label: 'Advertise' },
      { href: dragonForms.getFormUrl('doNotSell'), label: 'California Do Not Sell', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
      { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { label: 'Service Repair', href: '/service-repair' },
        { label: 'Diagnostics and Drivability', href: '/industry-news/service-repair' },
        { label: 'Underhood', href: '/service-repair/underhood' },
        { label: 'Undercar', href: '/service-repair/undercar' },
        { label: 'Battery and Electrical', href: '/service-repair/battery-and-electrical' },
        { label: 'The Garage', href: '/service-repair/the-garage' },
        { label: 'Collision Repair', href: '/collision-repair' },
        { label: 'Paint and Refinish', href: '/collision-repair/paint-and-refinish' },
        { label: 'ADAS/Calibration/Programming', href: '/directory/tools/adas-calibration-and-programming' },
        { label: 'Shop Operations', href: '/shop-operations' },
        { label: 'Distribution', href: '/distribution' },
        { label: 'Industry News', href: '/industry-news' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { label: 'Product Guide', href: '/directory' },
        { label: 'Training', href: '/training-and-resources' },
        { label: 'Webinars', href: '/training-and-resources/webinars' },
        { label: 'Motor Age Training', href: 'https://motoragetraining.com/', target: '_blank' },
        { label: 'Multimedia', href: '/service-repair/video-network' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { label: 'In Print', href: '/magazine' },
        { label: 'Advertise', href: 'https://vehiclerepair.endeavorb2b.com/', target: '_blank' },
        { label: 'PTEN E-Inquiry', href: 'https://www.cdsreportnow.com/CDSWCD/POST', target: '_blank' },
        { label: 'PD E-Inquiry', href: 'https://www.cdsreportnow.com/CDSWCD/POST', target: '_blank' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'Subscribe', href: '/subscribe' },
        { label: 'Job Board', href: 'https://vehicleservicepros.jobboard.io/', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/privacy-policy', label: 'Privacy Policy', target: '_blank' },
        { href: 'https://www.endeavorbusinessmedia.com/endeavor-terms', label: 'Terms & Conditions', target: '_blank' },
      ],
    },
  ],
};
