module.exports = {

    siteMetadata:{
        title: "Mashima Button",
        description: "",
        author: "Mashima Button"
    },

    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-json`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `data`,
              path: `${__dirname}/src/data/`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src/images`,
              name: `images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `mashima-portfolio`,
              short_name: `starter`,
              start_url: `/`,
              display: `minimal-ui`,
              icon: `src/images/about/mb-icon.png`
            },
        }
    ]
}