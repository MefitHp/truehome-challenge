import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 18px;
    text-decoration: none;
    font-size: 24px;
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    border-radius: 4px;
    height: 32px;
    font-weight: 600;
    &:hover {
        background-color: ${props => props.theme.colors.secondaryDark};
    }
`