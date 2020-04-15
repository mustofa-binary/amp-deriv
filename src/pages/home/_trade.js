import React from 'react'
import styled from 'styled-components'
import Box from 'components/box'
import Flex from 'components/flex'
import Container from 'components/container'
import { Text, Header, LinkText } from 'components/typography'
import Dtrader from 'assets/images/dtrader-trade.png'
import Dbot from 'assets/images/dbot-trade.png'
import Dmt5 from 'assets/images/dmt5-trade.png'
import DtraderIcon from 'assets/svg/dtrader-icon.svg'
import DbotIcon from 'assets/svg/dbot-icon.svg'
import Dmt5Icon from 'assets/svg/dmt5-icon.svg'

const FullWidth = styled(Box)`
    width: 100%;
`

const A = styled(LinkText)`
    font-size: var(--text-size-m);
    font-weight: bold;
`

const Card = styled(Flex)`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    width: 100%;
    background: var(--color-white);
    padding: 1.6rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.25s;

    &:hover {
        background: ${props => props.hover};
    }
`

const Trade = () => {
    return (
        <Box p="8rem 0" bg="var(--color-grey-2)">
            <Container flexDirection="column">
                <Header as="h2" align="center" mb="1.2rem">
                    Trade the way you like
                </Header>
                <Text align="center" size="var(--text-size-m)" mb="4rem" weight="300">
                    Choose from three powerful platforms — designed with you in mind
                </Text>
                <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
                    <FullWidth
                        maxWidth="65.8rem"
                        mr={[0, 0, 0, '5.6rem']}
                        mb={['5.6rem', '5.6rem', '5.6rem', 0]}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <amp-carousel
                            id="carousel-with-preview"
                            width="65.8rem"
                            height="38.7rem"
                            layout="responsive"
                            type="slides"
                            autoplay=""
                            loop=""
                            delay={3000}
                        >
                            <amp-img
                                src={Dtrader}
                                width="65.8rem"
                                height="38.7rem"
                                layout="responsive"
                                alt="apples"
                            ></amp-img>

                            <amp-img
                                src={Dbot}
                                width="65.8rem"
                                height="38.7rem"
                                layout="responsive"
                                alt="lemons"
                            ></amp-img>
                            <amp-img
                                src={Dmt5}
                                width="65.8rem"
                                height="38.7rem"
                                layout="responsive"
                                alt="blueberries"
                            ></amp-img>
                        </amp-carousel>
                    </FullWidth>
                    <FullWidth maxWidth="38.4rem">
                        <Card
                            role="button"
                            tabIndex="-1"
                            alignItems="center"
                            mb="2.4rem"
                            on="tap:carousel-with-preview.goToSlide(index=0)"
                            hover="rgba(255, 68, 79, 0.02)"
                        >
                            <div>
                                <amp-img src={DtraderIcon} width="72" height="72" />
                            </div>
                            <Box ml="1.6rem">
                                <A as="h4" href="https://deriv.com/dtrader">
                                    Dtrader
                                </A>
                                <Text weight="300">
                                    The platform to start with. It’s powerful yet easy to use.
                                </Text>
                            </Box>
                        </Card>
                        <Card
                            role="button"
                            tabIndex="-1"
                            alignItems="center"
                            mb="2.4rem"
                            on="tap:carousel-with-preview.goToSlide(index=1)"
                            hover="rgba(255, 100, 68, 0.02)"
                        >
                            <div>
                                <amp-img src={DbotIcon} width="72" height="72" />
                            </div>
                            <Box ml="1.6rem">
                                <A as="h4" href="https://deriv.com/dbot">
                                    DBot
                                </A>
                                <Text weight="300">
                                    Automated trading at your fingertips. No coding needed.
                                </Text>
                            </Box>
                        </Card>
                        <Card
                            role="button"
                            tabIndex="-1"
                            alignItems="center"
                            on="tap:carousel-with-preview.goToSlide(index=2)"
                            hover="rgba(133, 172, 176, 0.02)"
                        >
                            <div>
                                <amp-img src={Dmt5Icon} width="72" height="72" />
                            </div>
                            <Box ml="1.6rem">
                                <A as="h4" href="https://deriv.com/dmt5">
                                    DMT5
                                </A>
                                <Text weight="300">
                                    The platform of choice for professionals worldwide.
                                </Text>
                            </Box>
                        </Card>
                    </FullWidth>
                </Flex>
            </Container>
        </Box>
    )
}

export default Trade
