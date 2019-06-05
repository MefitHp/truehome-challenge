import styled from '@emotion/styled'

export const PropertiesTitle = styled.h1`
    font-size: 42px;
    border-bottom: 2px solid gainsboro;
    color: ${props => props.dark ? props.theme.colors.dark : '#FFF'}
`