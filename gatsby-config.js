
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const siteUrl = process.env.URL || `https://fallback.net`


module.exports = {
 

  siteMetadata: {
    title: "My Gatsby Site build",
    description: "another cool portfolio built in react",
    siteUrl: "https://needstobetheproductionurl.com"
  },
  plugins: [
    "gatsby-plugin-sass",
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
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '7r4duhdc',
        dataset: 'dbtimelineportfolio',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
