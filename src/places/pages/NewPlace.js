import React from 'react';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button/Button";

import "./FormPlace.css";
import {VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from "../../shared/utils/validators";

import {useForm} from "../../shared/hooks/form-hook";
const Places = () => {
    const [formState,inputHandler] = useForm({
        title:{
            value:"",
            isValid: false
        },
        description: {
            value:"",
            isValid: false
        },
        address: {
            value:"",
            isValid: false
        }
    },false);
    
    
    const formSubmitHandler = (e) =>{
        e.preventDefault();
        console.log(formState.inputs);
    }
    return(
        <form className="place-form" onSubmit={formSubmitHandler}>
            <Input 
            id="title" 
            type="text" 
            label="Title" 
            element="input"
            validators ={[VALIDATOR_REQUIRE()]}
            errorText={"Please enter valid input"}
            onInput={inputHandler}/>
            <Input id="description" type="text" label="Description" element="text-area"
            validators ={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]}
            errorText={"Please enter some desc"}
            onInput={inputHandler}/>
            <Input id="address" type="text" label="Address" element="input"
            validators ={[VALIDATOR_REQUIRE()]}
            errorText={"Please enter some desc"}
            onInput={inputHandler}/>
            <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
        </form>
    )
}

export default Places;
