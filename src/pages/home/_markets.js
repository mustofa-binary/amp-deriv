import React from 'react'
import { Text, Header } from 'components/typography'
import Box from 'components/box'
import Container from 'components/container'

const Markets = () => {
    return (
        <Box p="8rem 0" bg="var(--color-white)">
            <Container flexDirection="column">
                <Header as="h2" align="center" mb="1.2rem">
                    Markets
                </Header>
            </Container>
        </Box>
    )
}

export default Markets
