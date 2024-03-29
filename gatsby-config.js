
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const siteUrl = process.env.URL || `https://fallback.net`


module.exports = {
 

  siteMetadata: {
    title: "My portfolio site",
    description: "another cool portfolio built in react",    
    siteUrl: "https://insightsurfer.gatsbyjs.io/"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "myportfolio",
        short_name: "ReactPortfolio", 
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "./src/images/dev.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
     
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
      //minify class names
      {
        resolve: `gatsby-plugin-minify-classnames`,
        options: {
          dictionary: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
          enable: process.env.NODE_ENV === 'true',
          prefix: 'mgs',
          sufix: ''
        },
      },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",  
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    
    
    { 
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ['https://insightsurfer.gatsbyjs.io/', 'https://www.insightsurfer.gatsbyjs.io/'],
      },
    },

  

    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: '7r4duhdc',
        dataset: 'dbtimelineportfolio',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    }, 
  ],
};
