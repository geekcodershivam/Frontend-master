import React, { Component } from 'react';
import {Header} from './components/Header';
import {Apply} from './components/Apply';
import {Option} from './components/Option';
import {Addoption} from './components/Addoption';
import {Addremove} from './components/Addremove';
import Counter from './store/counter'
import VVisibility  from './store/VVisibility';
class App extends Component {
    Handleremove(){
        alert('remove all');
    }
    Handleadd(e){
        e.preventDefault();
        const option=e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }

    }
    render() {
        const title='Header';
        const options=['one','two','three','four','five'];
       

        return (
            <div>
               <Header title={title}/>
               <Apply/> 
               <Option options={options}/>
               <Addoption add={this.Handleadd}/>
               <Addremove show={this.Handleremove}/>
               <Counter/>
               <VVisibility />
            </div>
        );
    }
}

export default App;