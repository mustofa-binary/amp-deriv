import React from 'react'
import styled from 'styled-components'
import Box from 'components/box'
import Container from 'components/box'
import { Text, Header } from 'components/typography'

const Trade = () => {
    return (
        <Box p="8rem 0" bg="var(--color-grey-2)">
            <Container>
                <Header as="h2" align="center" mb="1.2rem">
                    Trade the way you like
                </Header>
                <Text align="center" size="var(--text-size-m)" mb="4rem" weight="300">
                    Choose from three powerful platforms — designed with you in mind
                </Text>
            </Container>
        </Box>
    )
}

export default Trade
