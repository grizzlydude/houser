import React, {Component} from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'
import Wizard from '../Wizard/Wizard'

function Routes (){
    return (
        <div>
            <Switch>
            <Route exact path='/' component = {Dashboard}/>
         <Route path='/wizard' component ={Wizard}/>
            </Switch>
        </div>
    )
}

export default Routes