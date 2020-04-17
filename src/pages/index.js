import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Hero from './home/_hero'
import Trade from './home/_trade'
import Markets from './home/_markets'
import SimpleSteps from './home/_simple-steps'
import OurClients from './home/_our-clients'

const IndexPage = () => (
    <Layout>
        <SEO
            title="Online trading platform | Forex, commodities and indices"
            description="Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7."
        />
        <Hero />
        <Trade />
        <Markets />
        <SimpleSteps />
        <OurClients />
    </Layout>
)

export default IndexPage
