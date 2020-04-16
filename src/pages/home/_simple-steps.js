import React from 'react'
import styled from 'styled-components'
import Box from 'components/box'
import Container from 'components/container'
import Flex from 'components/flex'
import { Text, Header } from 'components/typography'
import { LinkButton } from 'components/button'
import SimpleStepsBG from 'assets/images/simple-steps.png'
import SimpleStepIcon1 from 'assets/svg/simple-steps-1.svg'
import SimpleStepIcon2 from 'assets/svg/simple-steps-2.svg'
import SimpleStepIcon3 from 'assets/svg/simple-steps-3.svg'

const HandleAmp = styled(Box)`
    position: relative;
    width: 100%;
    background-image: url(${SimpleStepsBG});
`
const Ul = styled(Flex).attrs({ as: 'ul' })`
    max-width: 996px;
    flex-wrap: wrap;
`

const Li = styled(Flex).attrs({ as: 'li' })`
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    border-radius: 4px;
    max-width: 304px;
    display: flex;
    padding: 3.2rem 2.4rem;
    margin: 1.2rem;
    height: 204px;
    background: var(--color-white);
    flex-direction: column;
`

const SimpleSteps = () => {
    return (
        <HandleAmp p="8rem 0">
            <Container flexDirection="column" alignItems="center">
                <Header as="h2" align="center" mb="4rem">
                    3 simple steps
                </Header>
                <Ul>
                    <Li>
                        <Flex alignItems="center" mb="0.8rem">
                            <Header as="h4">Practise</Header>
                            <amp-img src={SimpleStepIcon1} width="32" height="32" />
                        </Flex>
                        <Text>
                            Open a demo account and start trading for free. Practise with an
                            unlimited amount of virtual funds.
                        </Text>
                    </Li>
                    <Li>
                        <Flex alignItems="center" mb="0.8rem">
                            <Header as="h4">Trade</Header>
                            <amp-img src={SimpleStepIcon2} width="32" height="32" />
                        </Flex>
                        <Text>
                            Open a real account, make a deposit, and start trading for real. Trade
                            forex, indices, commodities, and more.
                        </Text>
                    </Li>
                    <Li>
                        <Flex alignItems="center" mb="0.8rem">
                            <Header as="h4">Withdraw</Header>
                            <amp-img src={SimpleStepIcon3} width="32" height="32" />
                        </Flex>
                        <Text>
                            Get your funds quickly and easily. We support a variety of withdrawal
                            options.
                        </Text>
                    </Li>
                </Ul>
                <LinkButton
                    href="https://deriv.com/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    primary
                    mt="4rem"
                >
                    Sign up now
                </LinkButton>
            </Container>
        </HandleAmp>
    )
}

export default SimpleSteps
