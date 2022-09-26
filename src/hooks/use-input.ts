import { ChangeEventHandler, useReducer } from 'react';

type UseInputAction = 
    | { type: 'INPUT', value: string}
    | { type: 'BLUR'}
    | { type: 'RESET'}

type UseInputState = {
    value: string,
    isTouched: boolean
}

type UseInput = {
    value: string,
    isValid: {},
    hasError: boolean,
    valueChangeHandler?: ChangeEventHandler<HTMLInputElement>,
    inputBlurHandler: ChangeEventHandler<HTMLInputElement>,
    textAreaChangeHandler?: ChangeEventHandler<HTMLTextAreaElement>,
    textAreaBlurHandler: ChangeEventHandler<HTMLTextAreaElement>,
    reset: () => void
}


const initialInputState  = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state: UseInputState, action: UseInputAction): UseInputState => {
    if (action.type === 'INPUT') {
        return { value: action.value, isTouched: state.isTouched};
    }
    if (action.type === 'BLUR') {
        return { value: state.value, isTouched: true};
    }
    if (action.type === 'RESET') {
        return { value: '', isTouched: false}
    }

    return state;
};

const useInput = (validateValue: (value: string) => {}): UseInput => {
    const [inputState, dispatch] = useReducer(
        inputStateReducer,
        initialInputState
    );

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;
    
    const valueChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
    };

    const inputBlurHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        dispatch({type: 'BLUR'});
    };

    const textAreaChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        dispatch({type: 'INPUT', value: event.target.value});
    };

    const textAreaBlurHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        dispatch({type: 'BLUR'});
    };

    const reset  = () => {
        dispatch({type: 'RESET'});
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        textAreaChangeHandler,
        inputBlurHandler,
        textAreaBlurHandler,
        reset
    };
};

export default useInput;