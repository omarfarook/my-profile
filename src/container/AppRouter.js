import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Home from '../components/home';
import MyCv from '../components/my-cv';
import ContactMe from '../components/contact-me';

const Switch = require("react-router-dom").Switch
class AppRouter extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/mycv' component={MyCv} />
                <Route path='/contactme' component={ContactMe} />
                <Route component={Home} />
            </Switch>
        )
    }
}

export default AppRouter