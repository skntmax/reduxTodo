import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {useSelector } from 'react-redux' 
import {increament,decrement} from './actions/index'
import { useDispatch } from 'react-redux';
import Dashoboard from './Dashoboard';
// import Test from './Test';
function App() {
  const myState = useSelector((state)=>state.changeTheNumber )
   const dispatch = useDispatch()
    return ( 
      <>
     <Dashoboard/>
           
         </>

    );
}

export default App;