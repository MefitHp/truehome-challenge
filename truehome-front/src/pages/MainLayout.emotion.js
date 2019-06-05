import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Navbar = styled.nav`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: ${ props => props.theme.colors.primary};
`

export const Brand = styled(Link)`
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    padding: 8px;
    margin-left: 12px;
    text-decoration: none;
     &:hover {
    color: gainsboro;
  }
`

export const Content = styled.div`
  min-height: calc(100vh - 70px);
  background-color: #f5f5f5;
`