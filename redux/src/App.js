
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './action/index'

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
    <div className ="container">
    <h1>Increment/Decrement Counter</h1>
    <h4>By using the React Redux</h4>
      <div >
        <button className='quantity_minus'  onClick={()=>{dispatch(decNumber(5))
        console.log("clicked",myState)
        }} title="Decrement"> <span>-</span></button>
        <input  className= "quantity_input" name="quantity" type ="number" value= {myState}  />
        <button  className='quantity_plus' onClick={()=>{dispatch(incNumber(10))
        console.log("clicked",myState)
        }} title="Increment"> <span>+</span></button>
      </div>
      </div>
    </>
  );
}

export default App;
