import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
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
    @media ${device.tabletL} {
        display: block;
        cursor: pointer;
    }
`

const LinkText = styled(AnchorLink)`
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
                    <AnchorLink to="/">
                        <amp-img src={Deriv} width="212" height="27" />
                    </AnchorLink>
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
                    <LinkText to="/#trade">Trade</LinkText>
                    <LinkText to="/#markets">Markets</LinkText>
                    <LinkText to="/#simple-steps">Tutorial</LinkText>
                    <LinkText to="/#our-clients">Testimonials</LinkText>
                </LinkWrapper>
                <HamburgerMenu on="tap:sidebar1.toggle">
                    <amp-img src={Hamburger} width="18" height="16" />
                </HamburgerMenu>
            </Container>
        </HeaderWrapper>
        <amp-sidebar id="sidebar1" side="left">
            <ul>
                <li>Nav item 1</li>
                <li>
                    <a href="#idTwo" on="tap:idTwo.scrollTo">
                        Nav item 2
                    </a>
                </li>
                <li>Nav item 3</li>
                <li>
                    <a href="#idFour" on="tap:idFour.scrollTo">
                        Nav item 4
                    </a>
                </li>
                <li>Nav item 5</li>
                <li>Nav item 6</li>
            </ul>
        </amp-sidebar>
    </>
)

export default Header
