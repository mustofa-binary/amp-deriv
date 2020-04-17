import React from 'react'
import styled from 'styled-components'
import SEO from 'components/seo'
import Flex from 'components/flex'
import Layout from 'components/layout'
import { Header, Text } from 'components/typography'
import { LinkButton } from 'components/button'
import NotFound from 'assets/images/page-not-found.png'

const ImageSection = styled(Flex)`
    justify-content: center;
    align-items: center;
    width: 50%;
`
const PageNotFoundContainerInfo = styled.div`
    width: 50%;

    * {
        margin: 1.6rem 0;
    }
`
const PageNotFoundContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 100vh;
    background: var(--color-white);
    justify-content: center;
    align-items: center;
    padding: 16rem 0;
`
const ButtonWrapper = styled.div`
    margin-top: 2.6rem;
`
const PageNotFound = () => (
    <Layout>
        <SEO
            title="404 - Page not found"
            description="The page you are looking for does not exist."
        />
        <PageNotFoundContainer>
            <ImageSection>
                <amp-img src={NotFound} width="59.4rem" height="48rem" />
            </ImageSection>
            <PageNotFoundContainerInfo>
                <Header as="h3">This channel doesn't work</Header>
                <Text>
                    You may have followed a broken link, or the page has moved to a new address.
                </Text>
                <Text>Error code: 404 page not found</Text>
                <ButtonWrapper>
                    <LinkButton primary href="/">
                        Go to the homepage
                    </LinkButton>
                </ButtonWrapper>
            </PageNotFoundContainerInfo>
        </PageNotFoundContainer>
    </Layout>
)

export default PageNotFound
