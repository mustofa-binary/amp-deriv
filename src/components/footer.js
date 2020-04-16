import React from 'react'
import styled from 'styled-components'
import Container from 'components/container'
import Box from 'components/box'
import Flex from 'components/flex'
import { Text } from 'components/typography'
import Warning from 'assets/svg/warning.svg'

const FooterWrapper = styled.footer`
    background: var(--color-grey-6);
    padding: 4rem 0;
    border-top: 1px solid var(--color-red);
`

const White = styled(Text)`
    color: white;
`

const Footer = () => (
    <>
        <FooterWrapper>
            <Container flexDirection="column">
                <Text>
                    In the EU, financial products are offered by Binary Investments (Europe) Ltd, W
                    Business Centre, Level 3, Triq Dun Karm, Birkirkara, BKR 9033, Malta, regulated
                    as a Category 3 Investment Services provider by the Malta Financial Services
                    Authority (view licence).
                </Text>
                <Text>
                    Outside the EU, financial products are offered by Binary (SVG) Ltd, Hinds
                    Building, Kingstown, St Vincent and the Grenadines; Binary (V) Ltd, Govant
                    Building, Port Vila, P.O. Box 1276, Vanuatu, regulated by the Vanuatu Financial
                    Services Commission (view licence); Binary (BVI) Ltd, Kingston Chambers, P.O.
                    Box 173, Road Town, Tortola, British Virgin Islands, regulated by the British
                    Virgin Islands Financial Services Commission (view licence); and Binary (FX)
                    Ltd, Lot No. F16, First Floor, Paragon Labuan, Jalan Tun Mustapha, 87000 Labuan,
                    Malaysia, regulated by the Labuan Financial Services Authority to carry on a
                    money-broking business (view licence).
                </Text>
                <Text mt="0.8rem">
                    This website's services are not made available in certain countries including
                    the USA, Canada, Hong Kong, and Japan, or to persons below 18.
                </Text>
                <Flex mt="2.4rem" mb="0.8rem" alignItems="center">
                    <amp-img src={Warning} width="14" height="14" />
                    <Text ml="0.8rem" weight="bold">
                        Risk warning
                    </Text>
                </Flex>
                <Text>
                    The financial products offered via this website include digitals, contracts for
                    difference (CFDs), and other complex derivatives and financial products. Trading
                    options may not be suitable for everyone. Trading CFDs carries a high level of
                    risk since leverage can work both to your advantage and disadvantage. As a
                    result, the products offered on this website may not be suitable for all
                    investors because of the risk of losing all of your invested capital. You should
                    never invest money that you cannot afford to lose, and never trade with borrowed
                    money. Before trading in the complex financial products offered, please be sure
                    to understand the risks involved and learn about Secure and responsible trading.
                </Text>
            </Container>
        </FooterWrapper>
        <Box bg="var(--color-black)">
            <Container p="1.6rem 0">
                <White>&copy; 2020 Deriv | All rights reserved</White>
            </Container>
        </Box>
    </>
)

export default Footer
