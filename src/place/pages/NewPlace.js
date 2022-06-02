import React from "react"
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css"
import { useForm } from "../../shared/Hooks/FormHook";
import Button from "../../shared/components/UIELement/Button";



const NewPlace= () => {
    const[formState,inputHandler]=useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        address:{
            value:'',
            isValid:false
        }

    },false)
  
    
   
    const placeSubmitHandler=(event)=>{
       event.preventDefault(); 
        console.log(formState.inputs)

    }
    
    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input id='title' label='title' element='input' validator={[]} errortext="Please enter valid input" onInput={inputHandler}></Input>
            <Input id='description' label='description' element='textarea' validator={[]} errortext="Please enter valid input" onInput={inputHandler}></Input>
            <Input id='address' label='address' element='input' validator={[]} errortext="Please enter valid input" onInput={inputHandler}></Input>
            <Button type="submit">ADD Place</Button>
        </form>
    )
}

export default NewPlace;