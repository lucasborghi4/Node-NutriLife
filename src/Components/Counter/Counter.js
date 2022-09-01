import React, { useState } from 'react';
import "./Counter.css";

export default function Counter({stock, initial}) {

    const [counter, setCounter] = useState(initial);

    const handlerCounterUp = () => {
        if (counter < stock) {setCounter(counter + 1)};
    };

    const handlerCounterDown = () => {
        if (counter > initial) {
        setCounter(counter - 1);}
    };

    return(
        <div>
            <p className="contador d-flex justify-content-center">
                {counter}
            </p>
            <div className="botones d-flex justify-content-evenly"><button type="button" className="boton btn btn-secondary btn-sm" onClick={handlerCounterDown}>-</button>
            <button type="button" className="boton btn btn-secondary btn-sm" onClick={handlerCounterUp}>+</button></div>
        </div>
    )
}