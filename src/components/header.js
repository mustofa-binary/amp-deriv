import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Container from 'components/container'
import Flex from 'components/flex'
import { Text } from 'components/typography'
import device from 'themes/device'
import Deriv from 'assets/svg/header-logo.svg'
import Hamburger from 'assets/svg/hamburger-menu.svg'

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--color-black);
    z-index: 100;
    padding: 2.4rem 0;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.8);
`

const HamburgerMenu = styled.button`
    cursor: pointer;
    display: none;
    border: none;
    background: none;
    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
    }
`

const LinkText = styled(Link)`
    font-size: var(--text-size-sm);
    color: var(--color-white);
    text-decoration: none;
    letter-spacing: 0.1rem;
    cursor: pointer;
    margin: 0 2.4rem;
    transition: color 0.25s;

    &:hover {
        color: var(--color-red);
    }
`

const BlackLink = styled(LinkText)`
    color: var(--color-black);
    margin: 1.6rem 2rem;
    font-size: var(--text-size-m);
`

const Binary = styled(Text)`
    width: 80px;
    margin-left: 0.5rem;
    line-height: 1;
    color: white;
    font-size: var(--text-size-xxs);

    @media ${device.mobileS} {
        display: none;
    }
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

const LinkWrapper = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`

const Header = () => (
    <>
        <HeaderWrapper>
            <Container justifyContent="space-between">
                <Flex alignItems="center" justifyContent="center">
                    <Link to="/">
                        <amp-img src={Deriv} width="212" height="27" />
                    </Link>
                    <Binary>
                        A{' '}
                        <BinaryLink
                            href="https://binary.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Binary.com
                        </BinaryLink>{' '}
                        brand
                    </Binary>
                </Flex>
                <LinkWrapper alignItems="center" justifyContent="center">
                    <LinkText to="/#trade" on="tap:trade.scrollTo()">
                        Trade
                    </LinkText>
                    <LinkText to="/#markets" on="tap:markets.scrollTo()">
                        Markets
                    </LinkText>
                    <LinkText to="/#our-clients" on="tap:our-clients.scrollTo()">
                        Testimonials
                    </LinkText>
                </LinkWrapper>
                <HamburgerMenu on="tap:sidebar1.toggle">
                    <amp-img src={Hamburger} width="18" height="16" />
                </HamburgerMenu>
            </Container>
        </HeaderWrapper>
        <amp-sidebar id="sidebar1" layout="nodisplay" side="left">
            <Flex
                alignItems="flex-start"
                justifyContent="center"
                p="2rem 2rem"
                flexDirection="column"
            >
                <BlackLink to="/#trade" on="tap:trade.scrollTo()">
                    Trade
                </BlackLink>
                <BlackLink to="/#markets" on="tap:markets.scrollTo()">
                    Markets
                </BlackLink>
                <BlackLink to="/#our-clients" on="tap:our-clients.scrollTo()">
                    Testimonials
                </BlackLink>
            </Flex>
        </amp-sidebar>
    </>
)

export default Header
