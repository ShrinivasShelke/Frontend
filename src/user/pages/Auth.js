import React, { useContext, useState } from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/UIELement/Button";
import Card from "../../shared/components/UIELement/Card";
import { useForm } from "../../shared/Hooks/FormHook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../shared/components/Util/validators";
import { AuthContext } from "../../shared/components/Context/AuthContext";

import "./Auth.css"

const Auth = () => {
    const auth = useContext(AuthContext)

    const [isLogging, setIsLogging] = useState()
    const [formstate, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false)

    const switchHandler = () => {
        if (!isLogging) {
            setFormData({ name: undefined }, formstate.inputs.email.isValid && formstate.inputs.password.isValid)
        }
        else {
            setFormData({
                ...formstate.inputs,
                name: {
                    value: '',
                    isvalid: false
                }
            }, false)
        }
        setIsLogging(prevMode => !prevMode)

    }
    const authSubmitHandler = async event => {
        event.preventDefault();

        console.log(formstate.inputs)
        console.log("now we are in logging", isLogging)

        try {
            const response = await fetch('https://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formstate.inputs.name.value,
                    email: formstate.inputs.email.value,
                    password: formstate.inputs.password.value
                })
            })
            const responsedata = await response.json()
            console.log(responsedata)
            auth.login()

        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <Card className='authentication'>
            <h2>Login</h2>
            <form onSubmit={authSubmitHandler} className='form-control'>
                {!isLogging && <Input type="text" id="name" element='input' validators={[]} label='Name' onInput={inputHandler}></Input>}
                <Input type="email" id="email" element='input' validators={[VALIDATOR_EMAIL()]} errorText="Input is invalid" label='E-mail' onInput={inputHandler}></Input>

                <Input type="password" id="password" element='input' validators={[VALIDATOR_MINLENGTH(5)]} label='Password' errorText="Input is invalid" onInput={inputHandler}></Input>
                <Button type='submit' disabled={!formstate.isValid}>{isLogging ? 'LOGIN' : 'SIGN IN'}</Button>

            </form>
            <Button inverse onclick={switchHandler} > Switch To{isLogging ? 'SIGN IN' : 'LOGIN'}</Button>
        </Card>
    )
}



export default Auth;