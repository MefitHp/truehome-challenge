import React from 'react'
import { LandingPageContainer, LandingText } from './LandingPage.emotion'
const LandingPage = () => {
    return (
        <LandingPageContainer
            src="https://cdn.shopify.com/s/files/1/0012/4393/8877/files/Home_Wallpapers_Banner.jpg?11543310328790733081">

            <LandingText>
                La forma inteligente de vender tu casa
            </LandingText>
            <br />
            <LandingText secondary>
                Por un precio justo
            </LandingText>

        </LandingPageContainer>
    )
}

export default LandingPage
