import React , { useReducer } from 'react';


const initialState = {count: 0};

 function Reducers(state, action) {
  switch (action.type) {
    case '+':
      return {count: state.count + 1};
    case '-':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(Reducers, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: '+'})}>+</button>
      <button onClick={() => dispatch({type: '-'})}>-</button>
    </>
  );
}