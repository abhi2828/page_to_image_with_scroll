import React from 'react'
import Home from "./Home";
import Login from "./Login";
import Sign_up from './Sign_up'
import { Switch, Route, Redirect } from 'react-router-dom';
import Forgot from './Forgot';
import Doc from './Doc';
import Blog from './Blog';
import Query_builder from './Query_builder';
import Usage from './Usage';
import Account from './Account';
import Access_key from './Access_key';
import Plans from './Plans';
import Get_started from './Get_started';

const App = ()=>{
    return( 
        <>  
           <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/sign_up' component={Sign_up} />
                <Route exact path='/Doc' component={Doc} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/forgot_password' component={Forgot} />
                <Route exact path='/usage' component={Usage} />
                <Route exact path='/Query_builder' component={Query_builder} />
                <Route exact path='/Access_key' component={Access_key} />
                <Route exact path='/Account' component={Account} />
                <Route exact path='/Plans' component={Plans} />
                <Route exact path='/Get_started' component={Get_started} />
                <Redirect to='/' />
            </Switch>
            
        </>
    )
}

export default App