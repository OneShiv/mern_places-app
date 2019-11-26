import React,{useState} from 'react';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button/Button";
import {useForm} from "../../shared/hooks/form-hook";
import {VALIDATOR_MINLENGTH,VALIDATOR_EMAIL,VALIDATOR_REQUIRE} from "../../shared/utils/validators";
import Card from "../../shared/components/UIElements/Card/Card";

import "./Auth.css";

const AuthenticationPage = props  =>{
    const [isLoginMode,setLoginMode] = useState(true);
    const [formState,inputHandler,setFormData] = useForm({
        email:{
            value: '',
            isValid: false
        },
        password:{
            value:'',
            isValid:false
        }
    },false);

    const toggleLoginMode = () =>{
        if(!isLoginMode){
            setFormData({ 
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        }else{
            setFormData({
                ...formState.inputs,
                name:{
                    value: '',
                    isValid: false
                }
            })
        }
        setLoginMode(!isLoginMode);
    }
    const formSubmitHandler = (e) =>{
        e.preventDefault();
        console.log("==>> login form submitted <<===");
        console.log(formState.inputs);
    }
    
    return(
        <Card className="authentication">
            <form className="place-form" onSubmit={formSubmitHandler}>
                {!isLoginMode && <Input 
                element="input"
                type="inut"
                onInput={inputHandler}
                label="Name"
                errorText="Name is required"
                validators={[VALIDATOR_REQUIRE()]}
                id="name"/>}
                <Input
                id="email"
                element="input"
                type="text"
                label="Email"
                errorText={"Please enter valid Email Id"}
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]}
                />
                <Input
                id="password"
                element="input"
                type="password"
                label="Password"
                errorText={"Please enter valid Password"}
                onInput={inputHandler}
                validators={[VALIDATOR_MINLENGTH(4)]}
                />
                <Button  type="submit" disabled={!formState.isValid}>Submit</Button>
            </form>
            <Button onClick={toggleLoginMode}>Switch to {!isLoginMode?'Login':"Sign up"}</Button>
        </Card>
    )
}

export default AuthenticationPage;