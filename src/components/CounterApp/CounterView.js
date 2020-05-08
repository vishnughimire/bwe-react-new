import React, {useEffect} from 'react'
//import CounterApp from './CounterApp';

const generateColor = ()=> {
    return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);

}
const CounterView = (props) => {
    const {countValue, handleIncrement}= props;

    useEffect(()=>{
        console.log('Calling Use Effect From Counter view');
    })

return (
<div style= {{background: generateColor()}}>
    <h2 className = "value"> {countValue}</h2>
    <button onClick ={handleIncrement(2)}> Increment </button>
    <button onClick ={handleIncrement(-4)}> Decrement </button>
    </div>
)
}
export default React.memo(CounterView);
