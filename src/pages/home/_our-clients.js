import React from 'react'
import styled from 'styled-components'
import Box from 'components/box'
import Flex from 'components/flex'
import Container from 'components/container'
import { Text, Header } from 'components/typography'

const Wrapper = styled(Flex)`
    max-width: 58.2rem;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
`

const ClientCard = styled.div`
    width: 78.8rem;
    height: 22rem;
    padding: 1.8rem 0 0;
    position: relative;

    &::after {
        content: '“';
        position: absolute;
        font-size: 24rem;
        left: 9.5rem;
        top: -2rem;
        color: var(--color-grey-6);
    }
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    margin-bottom: 1.6rem;
    max-width: 376px;
    background: var(--color-grey-2);
`

const OurClients = () => {
    return (
        <Box p="8rem 0" bg="white">
            <Container flexDirection="column" alignItems="center">
                <Header as="h2" mb="2.2rem" align="center">
                    What our clients say about Deriv
                </Header>
                <amp-layout width="78.8rem" height="17.2rem">
                    <amp-carousel
                        id="our-clients-carousel"
                        width="78.8rem"
                        height="22rem"
                        layout="responsive"
                        type="slides"
                        autoplay=""
                        loop=""
                        delay={3000}
                    >
                        <ClientCard>
                            <Wrapper>
                                <Text mb="3.2rem">
                                    Customer service support very awesome and first to respond to
                                    queries and helping on marketing part. No much struggle
                                    introducing new members to binary.com since the company name
                                    already have a known truck of good ethics.
                                </Text>
                                <Divider />
                                <Text weight="bold" mb="0.4rem">
                                    Paul Mugenda
                                </Text>
                                <Text>Forex trader</Text>
                            </Wrapper>
                        </ClientCard>
                        <ClientCard>
                            <Wrapper>
                                <Text mb="3.2rem">
                                    Customer service support very awesome and first to respond to
                                    queries and helping on marketing part. No much struggle
                                    introducing new members to binary.com since the company name
                                    already have a known truck of good ethics.
                                </Text>
                                <Divider />
                                <Text weight="bold" mb="0.4rem">
                                    Paul Mugenda
                                </Text>
                                <Text>Forex trader</Text>
                            </Wrapper>
                        </ClientCard>
                        <ClientCard>
                            <Wrapper>
                                <Text mb="3.2rem">
                                    Customer service support very awesome and first to respond to
                                    queries and helping on marketing part. No much struggle
                                    introducing new members to binary.com since the company name
                                    already have a known truck of good ethics.
                                </Text>
                                <Divider />
                                <Text weight="bold" mb="0.4rem">
                                    Paul Mugenda
                                </Text>
                                <Text>Forex trader</Text>
                            </Wrapper>
                        </ClientCard>
                    </amp-carousel>
                </amp-layout>
            </Container>
        </Box>
    )
}

export default OurClients
