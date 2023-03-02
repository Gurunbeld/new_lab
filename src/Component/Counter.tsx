import React, {useState} from 'react';

const Counter = () => {
    const[state, setState] = useState(0);
    const[currentN, setCurrentN] = useState('1');
    let n = 0;

    const onChange = (value:number) =>{
        setState(prev => prev + value);
    }

    return (
        <div>
            <div>
                <input type={"text"} value={currentN} onChange={(e) =>setCurrentN(e.target.value)}></input>
            </div>
            <div>
                {state}
            </div>
            <div>
                <button onClick={() => onChange(1)}> Plus 1</button>
                <button onClick={() => onChange(-1)}> Minus 1</button>
                <button onClick={() => onChange(parseInt(currentN))}> CHANGE </button>
            </div>
        </div>
    );
};

export default Counter;