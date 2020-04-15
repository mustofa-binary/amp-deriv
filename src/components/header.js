import PropTypes from 'prop-types'
import React from 'react'

const Header = () => <header>test header</header>

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
