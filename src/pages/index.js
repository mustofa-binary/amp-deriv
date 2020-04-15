import React from 'react'
import Layout from 'components/layout'
import SEO from 'components/seo'
import Hero from './home/_hero'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Hero />
    </Layout>
)

export default IndexPage
