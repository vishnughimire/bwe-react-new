import React, { useState , useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import CounterView from './CounterView';
import './CounterApp.css';

const functions = new Set(); //set object that keep only unique data


const CounterApp = (props) => {
 const [count, setCount]= useState(0);

 const [whatever, setWhatever]= useState(10);
 const { title } = props;

 useEffect(()=>{
     console.log('Calling Use Effect');
 }, [])
//  const increment = (step) => () => setCount(count + step)
//  const doWhatever = () => setWhatever(whatever + 1);
const increment = useCallback((step) => () => setCount(count + step),[count])
const doWhatever= useCallback(() => setWhatever(whatever + 1), [whatever])

functions.add(increment);
functions.add(doWhatever);



 return (  
        <div>
        <div className = "counter-app">
        <h1> {title} </h1>
        <CounterView 
           countValue={count}
           handleIncrement={increment}
           />
           <button onClick ={doWhatever}> Do whatever </button>
           <h1> Functions: {functions.size}</h1>
        </div>

    </div>
       
    )
}

CounterApp.propTypes = {
    title: PropTypes.string.isRequired

}

// class counterApp extends React.Component {
// state = {
//     count :0
// }
// increment (){
// this.state.count = this.state.count+1; 
//            }

// decrement (){
//     this.state.count = this.state.count-1;
//             }

// redner(){
// return (
//     <div>
//     <div className = "counter-app">
//     <h1 className = 'value'> {this.state.count}</h1>
//     <button onClick = {this.increment}>Increment</button>
//     <button onClick = {this.decrement}> Decreament</button>
//     </div>

// </div>)
//       }
// }

export default CounterApp;
