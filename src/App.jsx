import React from 'react'
import Home from "./Home";
import Login from "./Login";
import Sign_up from './Sign_up'
import { Switch, Route, Redirect } from 'react-router-dom';
import Forgot from './Forgot';
import Doc from './Doc';
import Blog from './Blog';
import DashBoard from './DashBoard';
const App = ()=>{
    return(
        <>  
           <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/sign_up' component={Sign_up} />
                <Route exact path='/Doc' component={Doc} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/dashboard' component={DashBoard} />
                <Route exact path='/forgot_password' component={Forgot} />
                <Redirect to='/' />
            </Switch>
            
        </>
    )
}

export default App