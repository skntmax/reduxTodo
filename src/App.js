import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {useSelector } from 'react-redux'
import { TextField } from '@material-ui/core'; 
import {increament,decrement} from './actions/index'
import { useDispatch } from 'react-redux';
import Dashoboard from './Dashoboard';
// import Test from './Test';
function App() {
  const myState = useSelector((state)=>state.changeTheNumber )
   const dispatch = useDispatch()
    return ( 
      <>
       
    <Home />
     {/* <Dashoboard/> */}
     
           
         </>

    );
}

export default App;