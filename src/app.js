import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, BrowserRouter } from 'react-router-dom'


import HeaderBar from './components/HeaderBar/HeaderBar'
import IndexPage from './components/IndexPage/IndexPage'
import UserProfile from './components/UserProfile/UserProfile'
import BestPage from './components/BestPage/BestPage'
import Login from './components/Login/Login'


class App extends Component
{
    render()
    {
        return  (
            <BrowserRouter>
               <div>
                   <HeaderBar/>
                   <Switch>
                       <Route exact path = '/' component={IndexPage} />
                       <Route exact path = '/home' component={IndexPage} />
                       <Route exact path = '/best' component={BestPage} />
                       <Route exact path = '/user/:id' component={UserProfile}/>
                       <Route exact path = "/login"  component={Login} />
                   </Switch>
               </div>
            </BrowserRouter>
        )
    }
}



ReactDOM.render( <App/> , document.getElementById('root'));