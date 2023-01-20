const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `landing`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass","snapsvg-cjs","gatsby-plugin-styled-components",
    "gatsby-background-image",`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    "gatsby-plugin-image",
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
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect:  [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Arvo`,
            file:  `https://fonts.googleapis.com/css2?family=Arvo&display=swap`,
          },
          {
            name: `Dosis`,
            file:  `https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&display=swap`,
          },
        ],
      }
    }
  ] 
};
