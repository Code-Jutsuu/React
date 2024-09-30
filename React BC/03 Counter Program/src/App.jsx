// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]

import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return( <div className="counter-container text-center font-sans bg-slate-800 h-full">
                <p className="count-display text-[10em] mt-0 mb-12">{count}</p>
                <button className="counter-button w-[150px] h-[50px] text-2xl font-bold mx-1 bg-cyan-500 text-white rounded hover:bg-cyan-400" onClick={decrement}>Decrement</button>
                <button className="counter-button w-[150px] h-[50px] text-2xl font-bold mx-1 bg-cyan-500 text-white rounded hover:bg-cyan-400" onClick={reset}>Reset</button>
                <button className="counter-button w-[150px] h-[50px] text-2xl font-bold mx-1 bg-cyan-500 text-white rounded hover:bg-cyan-400 mb-96" onClick={increment}>Increment</button>
            </div>);
}
export default Counter
