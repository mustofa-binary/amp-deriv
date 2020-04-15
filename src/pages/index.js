import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Hero from './home/_hero'
import Trade from './home/_trade'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
        <Trade />
    </Layout>
)

export default IndexPage
