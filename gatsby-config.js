const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `landing`,
    siteUrl: `https://www.yourdomain.tld`
  }, 
  /*flags: {
    DEV_SSR: true
  },*/
  plugins: [
    /*"gatsby-plugin-sass","snapsvg-cjs","gatsby-plugin-styled-components",
    "gatsby-background-image",`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
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
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    }*/
  ] 
};
