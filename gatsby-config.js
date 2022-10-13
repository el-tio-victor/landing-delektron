module.exports = {
  siteMetadata: {
    title: `landing`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass","snapsvg-cjs",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include:/images/
        }
      }
    }
  ]
};
