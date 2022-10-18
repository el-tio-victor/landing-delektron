const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `landing`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass","snapsvg-cjs","gatsby-plugin-styled-components",
    "gatsby-background-image",`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include:/images/
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname,'src','images'),
      },
    }
  ]
};
