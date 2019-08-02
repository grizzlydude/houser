import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'

export default class route extends Component {
    render() {
        return (
            <div className='ROUTER'>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                </Switch>
                <Switch>
                    <Route path='/wizard' component={Wizard} />
                </Switch>
            </div>
        )
    }
}