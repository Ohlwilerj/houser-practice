import {Switch, Route} from 'react-router-dom'
import React from 'react'
import Dashboard from './Components/Dashboard/Dashboard'
// import Header from './Components/Header/Header'
import House from './Components/House/House'
import Wizard from './Components/Wizard/Wizard'


export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        {/* <Route exact path='/' component={Header} /> */}
        <Route path='/House' component={House} />
        <Route path='/Wizard' component={Wizard} />
    </Switch>
)