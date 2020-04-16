import React from 'react'
import styled from 'styled-components'
import { Text, Header } from 'components/typography'
import Box from 'components/box'
import Flex from 'components/flex'
import Container from 'components/container'
import Forex from 'assets/svg/market-forex.svg'
import Commodities from 'assets/svg/market-commodities.svg'
import Stock from 'assets/svg/market-stock-indices.svg'
import Synthetic from 'assets/svg/market-synthetic-indices.svg'

const Ul = styled(Flex).attrs({ as: 'ul' })`
    max-width: 996px;
    flex-wrap: wrap;
`

const Li = styled(Flex).attrs({ as: 'li' })`
    max-width: 462px;
    display: flex;
    margin: 2rem 1.2rem;
`

const Markets = () => {
    return (
        <Box p="8rem 0" bg="var(--color-white)" id="markets">
            <Container flexDirection="column" alignItems="center">
                <Header as="h2" align="center" mb="4rem">
                    Markets
                </Header>
                <Ul justifyContent="center" alignItems="center">
                    <Li>
                        <div>
                            <amp-img src={Forex} width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">Forex</Header>
                            <Text>
                                Take part in the world’s largest financial market where more than $5
                                trillion worth of currencies are bought and sold each day.
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <amp-img src={Stock} width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">Stock indices</Header>
                            <Text>
                                Predict broader market trends and diversify your risk with indices
                                that measure the overall performance of a market.
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <amp-img src={Synthetic} width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">Synthetic Indices</Header>
                            <Text>
                                Enjoy synthetic markets that emulate the excitement of real-world
                                markets without unpredictable real-world disruptions.
                            </Text>
                        </Box>
                    </Li>
                    <Li>
                        <div>
                            <amp-img src={Commodities} width="64" height="64" />
                        </div>
                        <Box ml="1.6rem">
                            <Header as="h4">Commodities</Header>
                            <Text>
                                Trade natural resources that are central to the world’s economy and
                                profit from the opportunities created by volatile markets.
                            </Text>
                        </Box>
                    </Li>
                </Ul>
            </Container>
        </Box>
    )
}

export default Markets
