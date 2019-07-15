import React, { Component } from 'react';
import {Count} from '../components/countbtn'
class Counter extends Component {
    constructor(props){
        super(props);
        this.inc=this.inc.bind(this);
        this.sub=this.sub.bind(this);
        this.all=this.all.bind(this);
        this.state={
            count:0
        };
    }
    inc(){
      this.setState((prevstate)=>{
        return {
            count:prevstate.count+1
        }
      });
    }
    sub(){
        this.setState((prevstate)=>{
            return {
                count:prevstate.count-1
            }
          });
     }
     all(){
        this.setState(()=>{
            return {
                count:0
            }
          });
     }
    render() {
        return (
            <div>
                <h1>Count : {this.state.count} </h1>
                <Count add={this.inc} sub={this.sub} all={this.all}/>
            </div>
        );
    }
}

export default Counter;