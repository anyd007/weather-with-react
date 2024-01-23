import { useReducer } from "react";

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    SET_FIELD: 'setField',
    HANDLE_SUBMIT: 'handleSubmit',
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case ACTIONS.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case ACTIONS.RESET:
            return {
                ...state,
                count: 0,
                age: '',
                name: '',
                submited: false,
            }
        case ACTIONS.SET_FIELD:
            return {
                ...state,
                [action.field]: action.payload
            }
        case ACTIONS.HANDLE_SUBMIT:
            return {
                ...state,
                submited: true,
            }
        default:
            return state
    }
}

const ReducerLern = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0, name: '', age: '', submited: false })

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT })
    }
    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT })
    }
    const reset = () => {
        dispatch({ type: ACTIONS.RESET })
    }

    const setField = (field, value) => {
        dispatch({ type: ACTIONS.SET_FIELD, field, payload: value })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (state.name.trim() !== '' && state.age.trim() !== '') {
            dispatch({ type: ACTIONS.HANDLE_SUBMIT });
        }
        else{
            return
        }
    }

    return (
        <div className="reducer-lern">
            <h1>nauka reducera</h1>
            <div className="lern-box">
                {!state.submited &&
                    <form onSubmit={handlesubmit}>
                        <label>
                            <input
                                type="text"
                                value={state.name}
                                onChange={(e) => setField('name', e.target.value)}
                            />
                            <input
                                type="number"
                                value={state.age}
                                onChange={(e) => setField('age', e.target.value)}
                            />
                        </label>
                        <button>add</button>
                    </form>
                }
                {state.submited &&
                    <>
                        <p>imię: {state.name}</p>
                        <p>wiek: {state.age}</p>
                    </>}

                <p>{state.count}</p>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>zeruj</button>
            </div>
        </div>
    );
}

export default ReducerLern;