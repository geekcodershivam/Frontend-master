import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import{Home} from './components/Home';
import{About} from './components/About';
import{Contact} from './components/contact';
import{News} from './components/news';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route  path="/about" component={About}/>
         <Route path="/contact" component={Contact}/>
         <Route path="/news" component={News}/>
        </Switch>
      </div>
    );
  }
}

export default App;