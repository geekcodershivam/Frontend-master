import React, { Component } from 'react';
import {Visibility} from '../components/Visibility';
class VVisibility extends Component {
    constructor(props){
        super(props);
        this.toggles=this.toggles.bind(this);
        this.state={
            visible:false
        }
    }
    toggles(){
        this.setState((prev)=>{
            return{visible: !prev.visible
            }
        });
    }
    render() {
        return (
            <div>
                <h1></h1>
                <Visibility show={this.toggles} paste={this.state.visible}/>
            </div>
        );
    }
}

export default VVisibility;
