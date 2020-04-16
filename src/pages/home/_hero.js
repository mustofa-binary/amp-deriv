import React from 'react'
import styled, { keyframes } from 'styled-components'
import Container from 'components/container'
import Box from 'components/box'
import Flex from 'components/flex'
import { LinkButton } from 'components/button'
import { Text, Header } from 'components/typography'
import HeroImg from 'assets/images/hero-image.png'
import CheckIcon from 'assets/svg/checklist.svg'

const float = keyframes`
    0% {
        box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
    }
    50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`

const HandleAmp = styled(Box)`
    width: 100%;
    height: 82.7rem;

    ${Header} {
        color: white;
    }
    ${Text} {
        color: white;
    }
`

const FullWidth = styled(Container)`
    height: 100%;

    & > div > amp-img {
        animation: ${float} 3s ease-in-out infinite;
    }
`

const Hero = () => {
    return (
        <HandleAmp bg="var(--color-black)" position="relative" p="8rem 0">
            <FullWidth
                position="relative"
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                flexWrap="wrap"
            >
                <Box mr="3.2rem">
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
                    <LinkButton
                        primary
                        href="https://deriv.com/signup"
                        mt="3.2rem"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Create free demo account
                    </LinkButton>
                </Box>
                <div>
                    <amp-img src={HeroImg} width="52rem" height="30rem" />
                </div>
            </FullWidth>

            {/* <amp-video width="100vw" height="82.7rem" autoplay="" loop="">
                <source src={PlatformVideoMp4} type="video/mp4" />
            </amp-video> */}
        </HandleAmp>
    )
}

export default Hero
