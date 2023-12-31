import { useReducer } from "react"

type CounterState = {
    count : number
}

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction


const initialState = {count: 0}


function reducer(state: CounterState, action: CounterAction){ //reducer function is to update the state && accepts state and action as parameters
    switch (action.type) { //action.type updates the counter value
        case 'increment' :
            return {count : state.count + action.payload}
        case 'decrement' :
            return {count : state.count - action.payload}
        case 'reset' :
            return initialState
        default:
            return state
    }
}


export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return ( 


    <>Count: {state.count}

    <button onClick={() => dispatch({ type:  'increment', payload: 10})}>
        Increment by 10
    </button>

    <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
        Decrement by 10
    </button>
    
    
    
    </>)
}
