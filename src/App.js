import React ,{useState} from 'react';
import Home from './component/Home';
import {useSelector } from 'react-redux'
import { Button, TextField } from '@material-ui/core'; 
import {increament,decrement} from './actions/index'
import { useDispatch } from 'react-redux';
import Dashoboard from './Dashoboard';
import CWUMNT from './component/CWUNMT'

// import Test from './Test';
function App() {
  const myState = useSelector((state)=>state.changeTheNumber )
   const dispatch = useDispatch()
 const [show,setShow] = useState(false) 
    
    return ( 
      <>
     {/* click me to call componentWillUnmount  */}
     {show?<CWUMNT/>:""} 

 
  <Button color="primary" onClick={e=>setShow(!show) }> Click me  </Button> 



     {/* click me to call componentWillUnmount  */}

    <Home />
     
     
           
         </>

    );
}

export default App;