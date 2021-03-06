import React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import Box from 'components/box'
import Flex from 'components/flex'
import { LinkButton } from 'components/button'
import { Text, Header } from 'components/typography'
import device from 'themes/device'
import signupUrl from 'utils/signup-url'
import HeroImg from 'assets/images/hero-image.jpg'
import HeroPlatform from 'assets/images/hero-platform.png'
import CheckIcon from 'assets/svg/checklist.svg'

const BigButton = styled(LinkButton)`
    padding: 1.6rem 2.4rem;
    font-size: 2rem;
    position: relative;
    font-weight: normal;
    letter-spacing: 0.1rem;
    margin: 2rem auto 0;
`

const HandleAmp = styled(Box)`
    background: url(${HeroImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    position: relative;
    height: 100vh;
    padding: 14rem 0 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.8);
    }
    ${Header} {
        color: white;
    }
    ${Text} {
        color: white;
    }
`

const FullWidth = styled(Container)`
    width: 100%;
    margin-bottom: 2.4rem;

    & > * {
        margin: 1rem;
    }
    & > amp-img {
        margin-top: 5rem;
        @media ${device.tabletS} {
            display: none;
        }
    }
`

const Hero = () => {
    return (
        <HandleAmp bg="var(--color-black)" position="relative" p="12rem 0">
            <FullWidth
                position="relative"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                flexWrap="wrap-reverse"
            >
                <Box mt="3.2rem">
                    <Header as="h1" mb="2.4rem" size="var(--text-size-xl)" lh="1.25">
                        Simple. Flexible. Reliable.
                    </Header>
                    <Header as="h2" size="var(--text-size-m)" weight="300" mb="1.4rem">
                        Trade <strong>forex</strong>, <strong>commodities</strong>,{' '}
                        <strong>stock</strong> and <strong>synthetic indices</strong>
                    </Header>
                    <Flex alignItems="center" mb="0.8rem">
                        <amp-img width="18" height="18" src={CheckIcon} />
                        <Text ml="1rem" size="2.4rem" lh="1.5" weight="300">
                            Built upon 20+ years of experience
                        </Text>
                    </Flex>
                    <Flex alignItems="center" mb="0.8rem">
                        <amp-img width="18" height="18" src={CheckIcon} />
                        <Text ml="1rem" size="2.4rem" lh="1.5" weight="300">
                            100+ tradable assets
                        </Text>
                    </Flex>
                    <Flex alignItems="center" mb="0.8rem">
                        <amp-img width="18" height="18" src={CheckIcon} />
                        <Text ml="1rem" size="2.4rem" lh="1.5" weight="300">
                            24x7 trading, sharp prices, tight spreads
                        </Text>
                    </Flex>
                </Box>
                <amp-img src={HeroPlatform} width="540" height="345" />
            </FullWidth>

            <BigButton primary href={signupUrl()} target="_blank" rel="noopener noreferrer">
                Create free demo account
            </BigButton>

            {/* <amp-video width="100vw" height="82.7rem" autoplay="" loop="">
                <source src={PlatformVideoMp4} type="video/mp4" />
            </amp-video> */}
        </HandleAmp>
    )
}

export default Hero
