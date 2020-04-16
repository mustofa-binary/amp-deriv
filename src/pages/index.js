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
        <SEO title="Home" />
        <Hero />
        <Trade />
        <Markets />
        <SimpleSteps />
        <OurClients />
    </Layout>
)

export default IndexPage
