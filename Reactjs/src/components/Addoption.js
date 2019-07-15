import React from 'react';
export const Addoption=(props)=>{
     return (
         <div>
             <form onSubmit={props.add}>
                 <input type='text' name='option'/>
                 <button>Add</button>
             </form>
         </div>

     )
}