import logo from './logo.svg';
import './App.css';
import {TestComponent} from "./test.component";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Home} from "./components/pages/home.component";
import {About} from "./components/pages/about.component";
import Beers from "./components/pages/beers.component";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {message: '123'}
    }
    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/beers'}>Beers</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/beers">
                        <Beers/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>

            {/*<div className="App">*/}
            {/*    <header className="App-header">*/}
            {/*        <img src={logo} className="App-logo" alt="logo"/>*/}
            {/*        <p>*/}
            {/*            Edit <code>src/App.js</code> and save to reload.*/}
            {/*        </p>*/}
            {/*        <TestComponent message={this.state.message} changeMessage={() => {*/}
            {/*            this.setState({message: '456'})}*/}
            {/*        }/>*/}
            {/*        <a*/}
            {/*            className="App-link"*/}
            {/*            href="https://reactjs.org"*/}
            {/*            target="_blank"*/}
            {/*            rel="noopener noreferrer"*/}
            {/*        >*/}
            {/*            Learn React*/}
            {/*        </a>*/}
            {/*    </header>*/}
            {/*</div>*/}
            </Router>
        );
    }
}

export default App;
