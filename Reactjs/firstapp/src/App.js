import React from 'react';
import {Header} from './components/header';
import {Footer} from './components/footer';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
   var myname="Shivam Mani Tripathi";
   return (<div>
<Header/>
<Footer myname={myname}/>
   </div>);
}

export default App;
