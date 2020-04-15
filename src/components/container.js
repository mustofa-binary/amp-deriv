import styled from 'styled-components'
import Box from './box'
import device from 'themes/device'

const Container = styled(Box)`
    margin: 0 auto;
    display: flex;
    width: 80%;

    @media ${device.desktop} {
        max-width: 1200px;
    }
    @media ${device.laptopL} {
        width: 84%;
    }
    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

export default Container
