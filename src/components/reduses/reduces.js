import React, {useReducer} from 'react';

const Reduces = () => {
    const reducer = (state, action) => {

        if (action.type === 'inc1') {
            return {...state, num1: state.num1 + 1}
        } else if (action.type === 'der1') {
            return {...state, num1: state.num1 - 1};
        } else if (action.type === 'reset1') {
            return {...state, num1: state.num1 = 0};
        } else if (action.type === 'inc2') {
            return {...state, num2: state.num2 +1};
        } else if (action.type === 'der2') {
            return {...state, num2: state.num2 -1};
        } else if (action.type === 'reset2') {
            return {...state, num2: state.num2 =0};
        } else if (action.type === 'inc3') {
            return {...state, num3: state.num3 +1};
        } else if (action.type === 'der3') {
            return {...state, num3: state.num3 -1};
        } else if (action.type === 'reset3') {
            return {...state, num3: state.num3 =0};
        }
        return state;
    };

    const [state, dispatch] = useReducer(reducer,{num1:0, num2:0, num3:0});



    return (
        <div>
            <div>
                <div>{state.num1}</div>
                <button onClick={() => dispatch({type: 'inc1'})}>inc1</button>
                <button onClick={() => dispatch({type: 'der1'})}>decr1</button>
                <button onClick={() => dispatch({type: 'reset1'})}>clear1</button>
            </div>

            <div>
                <div>{state.num2}</div>
                <button onClick={() => dispatch({type: 'inc2'})}>inc2</button>
                <button onClick={() => dispatch({type: 'der2'})}>decr2</button>
                <button onClick={() => dispatch({type: 'reset2'})}>clear2</button>
            </div>

            <div>
                <div>{state.num3}</div>
                <button onClick={() => dispatch({type: 'inc3'})}>inc3</button>
                <button onClick={() => dispatch({type: 'der3'})}>decr3</button>
                <button onClick={() => dispatch({type: 'reset3'})}>clear3</button>
            </div>

        </div>
    );
};

export default Reduces;