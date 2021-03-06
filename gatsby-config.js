module.exports = {
    siteMetadata: {
        title: `Deriv`,
        description: `Deriv.com gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0e0e0e`,
                theme_color: `#ff444f`,
                display: `minimal-ui`,
                icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-amp`,
            options: {
                analytics: {
                    type: 'gtag',
                    dataCredentials: 'include',
                    config: {
                        vars: {
                            gtag_id: 'UA-139927388-1',
                            config: {
                                'UA-139927388-1': {
                                    page_location: '{{pathname}}',
                                },
                            },
                        },
                    },
                },
                canonicalBaseUrl: 'https://amp-deriv.netlify.app/',
                components: [
                    'amp-video',
                    'amp-carousel',
                    'amp-sidebar',
                    'amp-animation',
                    'amp-position-observer',
                ],
                pathIdentifier: '/',
                relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
                useAmpClientIdApi: true,
            },
        },
        'gatsby-plugin-styled-components',
        `gatsby-plugin-offline`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
