import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Hero from './home/_hero'
import Trade from './home/_trade'
import Markets from './home/_markets'
import SimpleSteps from './home/_simple-steps'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Trade />
        <Markets />
        <SimpleSteps />
    </Layout>
)

export default IndexPage
