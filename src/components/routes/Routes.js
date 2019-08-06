import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
// import Wizard from './components/Wizard/Wizard'
import StepOne from '../Wizard/StepOne'
import StepTwo from '../Wizard/StepTwo'
// import StepThree from '../Wizard/StepThree'


export default class Routes extends Component {
    render() {
        return (
            <div className='ROUTER'>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                </Switch>
                <Switch>
                    <Route path='/wizard/step1' component={StepOne} />
                </Switch>
                <Switch>
                    <Route path='/wizard/step2' component={StepTwo} />
                </Switch>
                {/* <Switch>
                    <Route path='/wizard/step3' component={StepThree} />
                </Switch>  */}
            </div>
        )
    }
}