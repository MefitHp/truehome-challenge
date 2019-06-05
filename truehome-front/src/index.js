import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'emotion-theming'
import Routes from './Routes';
import './main.css'

let theme = {
    colors: {
        primary: '#0361e4',
        secondary: '#38f3b3',
        secondaryDark: '#2edba1',
        dark: '#262E61'
    }
}
let App = () => (
    <ThemeProvider theme={theme}>
        <Routes />
    </ThemeProvider>
)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
