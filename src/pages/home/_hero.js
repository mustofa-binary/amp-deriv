import React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import Box from 'components/box'
import Flex from 'components/flex'
import { Text, Header } from 'components/typography'
import PlatformVideoMp4 from 'assets/videos/Deriv_platform_tour.mp4'
import CheckIcon from 'assets/svg/checklist.svg'

const HandleAmp = styled(Box)`
    width: 100%;
    height: 82.7rem;

    & > amp-video {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.25;

        & > video {
            object-fit: fill;
        }
    }

    ${Header} {
        color: white;
    }
    ${Text} {
        color: white;
    }
`

const FullWidth = styled(Container)`
    height: 100%;
`

const Hero = () => {
    return (
        <HandleAmp bg="var(--color-black)" position="relative">
            <amp-video width="100vw" height="82.7rem" autoplay loop>
                <source src={PlatformVideoMp4} type="video/mp4" />
            </amp-video>
            <FullWidth position="relative" justifyContent="center" flexDirection="column">
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
            </FullWidth>
        </HandleAmp>
    )
}

export default Hero
