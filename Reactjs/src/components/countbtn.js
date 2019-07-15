import React from 'react';
export const Count=(props)=>{
        return (
       <div> 
           <button onClick={props.add}>+1</button>
           <button onClick={props.sub}>-1</button>
           <button onClick={props.all}>reset</button>
       </div>
        )

}
