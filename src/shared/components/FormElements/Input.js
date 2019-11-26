import React, {useReducer, useEffect} from 'react';
import "./Input.css";

import {validate} from "../../utils/validators";

const inputReducer = (state,action) =>{
    switch(action.type){
        case "CHANGE" :
            return {
                ...state,
                inputValue: action.val,
                isInputValid: validate(action.val,action.validators)
            }
        case "TOUCH":
            return{
                ...state,
                isTouched: true
            }
        default :
            return state;
    }
}

const Input = props => {
    const [inputState, dispatch ] = useReducer(inputReducer,{
        inputValue: props.initialValue || '',
        isInputValid: props.initialValid || false,
        isTouched: false
    });
    const {id, onInput} = props;
    const {inputValue,isInputValid} = inputState;

    useEffect(() =>{
        onInput(id,inputValue,isInputValid);
    },[id,onInput,inputValue,isInputValid]);

    const element = props.element === 'input' ? 
    
    <input id={props.id} type={props.type} placeholder={props.placeholder} onChange={(e) => dispatch({
        type: "CHANGE",
        val: e.target.value,
        validators: props.validators
    })} onBlur={()=> dispatch({
        type:"TOUCH"
    })} value={inputState.inputValue}/> : 
    
    <textarea onBlur={()=> dispatch({
        type:"TOUCH"
    })} 
    onChange={(e) => dispatch({
        type: "CHANGE",
        val: e.target.value,
        validators: props.validators
    })} value={inputState.inputValue} id={props.id} rows={props.row}/> 
    return(
        <div className={`form-control ${!inputState.isInputValid && inputState.isTouched?'form-control--invalid':''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isInputValid && inputState.isTouched && <p className="">{props.errorText}</p>}
        </div>
    )
}

export default Input;