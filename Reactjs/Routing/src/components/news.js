import React from 'react';
import {Switch,Route} from 'react-router-dom';
import{Link} from 'react-router-dom';
export const News = (props)=>{
    return (
        <div>
            <h1>I am News Component</h1>
            <Link to="/news/india">india</Link>
            &nbsp;
            <Link to="/news/usa">usa</Link>
            <Switch>
         <Route  path="/news/india" render={()=><h1>I am news india</h1>}/>
         <Route  path="/news/usa"   render={()=><h1>I am news usa</h1>}/>

        </Switch>
        </div>
    )
}