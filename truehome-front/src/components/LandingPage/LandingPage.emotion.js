import styled from '@emotion/styled'

export const LandingPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 70px);
    background-image: url('${props => props.src ? props.src : 'https://www.setaswall.com/wp-content/uploads/2017/06/House-Wallpapers-37-1920-x-1200.jpg'}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

export const LandingText = styled.h1`
    text-align: center;
    font-size: 42px;
    text-shadow: 1px 3px 1px rgba(0,0,0,0.15);
    color: ${props => props.secondary ? props.theme.colors.primary : '#FFF'}
`