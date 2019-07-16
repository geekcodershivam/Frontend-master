import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import{Home} from './components/Home';
import{About} from './components/About';
import{Contact} from './components/contact';
import{News} from './components/news';
import { Header } from './components/Header';
import { withRouter } from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
  }
  redirect(){
    console.log('History is ',this.props);
    this.props.history.push("/news");
  }

  render() {
    return (
      <div>
        <Header/>
        <hr/>
        <button onClick={this.redirect.bind(this)}>click</button>
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

export default  withRouter(App);