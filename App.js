
// import React, { Component } from 'react';  
// import Display from './Display';
// import './App.css';
// export default class App extends Component {
//   state = {
//     name:'Nikhil',
//     Age:21,
//     }
//   render() {
//     return (
//       <div className='container'>
//       <Display name={this.state.name} age={this.state.Age}/>
//       <center>
//       <button className='Click' onClick={()=> console.log('Clicked')}>Click Here</button>
//       </center>
      
//       </div>
//       )
//   }
// }

// import React, {useState} from 'react';
// import "./App.css";
// export const App = () => {
//     const [input, setInput] = useState("");
//     const [result,setResult]   = useState(0);
//     const changeHandler = e => {
//         setInput(e.target.value);
//     }
    
    
//   return (
//     <div>
//         <center>
            
//                 <input type="text" name="input" value={input} onChange={changeHandler} /> <br/>
//                 <button onClick={()=>setResult(eval(input))}>Result</button>
//                 <h2>Result is: {result}</h2>
//                 <button onClick={()=>setInput(input+'1')}>1</button>
//                 <button onClick={()=>setInput(input+'2')}>2</button>
//                 <button onClick={()=>setInput(input+'3')}>3</button>
//                 <button onClick={()=>setInput(input+'4')}>4</button>
//                 <button onClick={()=>setInput(input+'5')}>5</button><br/>

//                 <button onClick={()=>setInput(input+'6')}>6</button>
//                 <button onClick={()=>setInput(input+'7')}>7</button>
//                 <button onClick={()=>setInput(input+'8')}>8</button>
//                 <button onClick={()=>setInput(input+'9')}>9</button>
//                 <button onClick={()=>setInput(input+'0')}>0</button><br/>

//                 <button onClick={()=>setInput(input+'+')}>+</button>
//                 <button onClick={()=>setInput(input+'-')}>-</button>
//                 <button onClick={()=>setInput(input+'*')}>x</button>
//                 <button onClick={()=>setInput(input+'/')}>/</button>
//                 <button onClick={()=>setInput('')}>clr</button>

//         </center>
//     </div>
//   );
// };


// import React,{useState,useEffect} from 'react';
// import axios from 'axios';

// export const App = () => {
//     const [input,setInput] = useState({
//         username:'',
//         password:''
//     });
//     const {username,password}=input;
//     const changeHandler = e => {
//         setInput({...input,[e.target.name]:e.target.value});
//     }
//     const submitHandler = e => {
//         e.preventDefault();
//         axios.post("https://sample-project-e663f-default-rtdb.firebaseio.com/registor.json",input).then(() =>alert('Successfully Submited'))
//     }
//   return (
//     <div>
//         <center>
//         <form onSubmit={submitHandler}>
//             <input type="email" name="username" value={username} onChange={changeHandler}/> <br/>
//             <input type="password" name="password" value={password} onChange={changeHandler}/>  <br/>
//             <input type='submit'/>
//         </form>
//         </center>
        
        
//     </div>
//   )
// };


import React from 'react';
import Navbar  from './Navbar';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import  Dashboard  from './Dashboard';

const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element component={()=><h1>Welcome Home !!</h1>} />
                <Route path='/about' element component={() => <h1>About Us</h1>} />
                <Route path='/dashboard' element component={Dashboard}/>
            </Routes>
        </BrowserRouter>    
    </div>
  )
};


export default App;