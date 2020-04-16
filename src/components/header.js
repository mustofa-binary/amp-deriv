import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Container from 'components/container'
import Flex from 'components/flex'
import { Text } from 'components/typography'
import Deriv from 'assets/svg/header-logo.svg'

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--color-black);
    z-index: 100;
    padding: 2.4rem 0;
`

const Binary = styled(Text)`
    width: 80px;
    margin-left: 0.5rem;
    line-height: 1;
    color: white;
    font-size: var(--text-size-xxs);
`

const BinaryLink = styled.a`
    display: inline-block;
    color: var(--color-white);
    font-size: var(--text-size-xxs);
    font-weight: bold;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const Header = () => (
    <HeaderWrapper>
        <Container>
            <Flex alignItems="center" justifyContent="center">
                <Link to="/">
                    <amp-img src={Deriv} width="212" height="27" />
                </Link>
                <Binary>
                    A{' '}
                    <BinaryLink href="https://binary.com" target="_blank" rel="noopener noreferrer">
                        Binary.com
                    </BinaryLink>{' '}
                    brand
                </Binary>
            </Flex>
        </Container>
    </HeaderWrapper>
)

export default Header
