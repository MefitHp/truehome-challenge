import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, Brand, Content } from './MainLayout.emotion';
import { Button } from '../elements/Button.emotion'
import LandingPage from '../components/LandingPage/LandingPage'

const MainLayout = () => {
    return (
        <div>
            <Navbar>
                <Brand to="/">
                    TrueHome
                </Brand>
                <Button
                    style={{ marginRight: 20 }}
                    to="/propiedades">Ver propiedades</Button>
            </Navbar>
            <Content>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={LandingPage}
                    />
                    <Route
                        exact
                        path="/propiedades"
                        render={props => <div>Propiedades</div>}
                    />
                </Switch>
            </Content>
        </div>
    )
}

export default MainLayout
