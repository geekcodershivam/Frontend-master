import React from 'react';
//import {Options} from './Options'
export const Option=(props)=>{
     return (
         <div> <h3>Options length is : {props.options.length}</h3>
        
         {
             props.options.map((option) => <p key={option}>{option}</p>)
        }

         </div>
     )
}