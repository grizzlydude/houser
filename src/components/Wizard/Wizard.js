import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export default class Wizard extends Component {
    render() {
        return (
            <div className='Wizard'>
                <h1>Add New Listing</h1>
                <Switch>
                    <Route exact path='wizard/step1' component={StepOne} />
                    <Route path='wizard/step2' component={StepTwo} />
                    <Route path='wizard/step3' component={StepThree} />
                </Switch>
            </div>
        )
    }
}

