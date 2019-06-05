import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Navbar = styled.nav`
    box-sizing: border-box;
    padding: 0 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;
    background-color: ${ props => props.theme.colors.primary};
    box-shadow: 0 8px 6px -6px rgba(0,0,0,0.5);
    position: relative;
    z-index: 2;
    @media (max-width: 450px){
      justify-content: center;
      flex-direction: column;
      padding: 0;
    }
`

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Brand = styled(Link)`
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    padding: 8px;
    text-decoration: none;
     &:hover {
    color: gainsboro;
  }
   @media (max-width: 400px){
      margin: 0;
    }
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  background-color: #f5f5f5;
`