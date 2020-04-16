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
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.8);
`

const LinkText = styled(Link)`
    font-size: var(--text-size-s);
    color: var(--color-white);
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    margin: 0 2.4rem;
    transition: color 0.25s;

    &:hover {
        color: var(--color-red);
    }
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
        <Container justifyContent="space-between">
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
            <Flex alignItems="center" justifyContent="center">
                <LinkText>Trade</LinkText>
                <LinkText>Markets</LinkText>
                <LinkText>Tutorial</LinkText>
                <LinkText>Testimonials</LinkText>
            </Flex>
        </Container>
    </HeaderWrapper>
)

export default Header
