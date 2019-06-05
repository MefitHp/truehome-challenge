import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, Brand, Content, Layout } from './MainLayout.emotion';
import { Button } from '../elements/Button.emotion'
import LandingPage from '../components/LandingPage/LandingPage'
import Properties from '../components/Properties/Properties'

const MainLayout = () => {
    return (
        <Layout>
            <Navbar>
                <Brand to="/">
                    TrueHome
                </Brand>
                <Button
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
                        component={Properties}
                    />
                </Switch>
            </Content>
        </Layout>
    )
}

export default MainLayout
