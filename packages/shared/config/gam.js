const GAMConfiguration = require('@base-cms/marko-web-gam/config');

module.exports = ({
  accountId = '21687441225',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config
    .setTemplate('LB1', {
      size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('LB2', {
      size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('MS', { size: [300, 50] })
    .setTemplate('RAIL1', { size: [300, 250] })
    .setTemplate('RAIL2', { size: [300, 600] })
    .setTemplate('LM', { size: [[300, 250], [300, 600]] });

  return config;
};
