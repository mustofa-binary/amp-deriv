import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyle from 'themes/global-style'
import Header from './header'
import Footer from './footer'
import ScrollTop from './scroll-top'

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <ScrollTop />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
