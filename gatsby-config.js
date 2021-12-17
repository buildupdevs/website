require('dotenv').config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: 'BuildUpDevs',
    description:
      'A community about encouraging genuine human interaction and helping developers of all levels of skills and experience, online and offline.',
    siteURL: 'https://www.buildupdevs.com',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/content`,
      },
    },
  ],
};
