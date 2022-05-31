import React, { useCallback, useReducer } from "react"
import Input from "../../shared/components/FormElements/Input";
import "./NewPlace.css"

const formReducer=(state,action)=>{
    switch(action.type){
        case 'INPUT CHANGE':
            let formIsValid=true;
            for(const inputId in state.inputs){
                if(inputId===action.inputId){
                    formIsValid =formIsValid && action.isValid
                }
                else{
                    formIsValid =formIsValid && state.inputs[inputId].isValid

                }
            }
            return{
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputId]:{value:action.value,isValid:action.isValid}
                },
                isValid:formIsValid
            }
            default:
                return state

    }


}


const NewPlace= () => {
   const[formState,dispatch]=useReducer(formReducer,{
       inputs:{
           title:{
           value:"",
           isValid:false
           },
           description:{
               value:'',
               isValid:false
           }
       },
       isValid:false
   })
    const inputHandler=useCallback((id,value,isValid)=>{
        dispatch({type:'INPUT CHANGE',value:value,isValid:isValid,inputId:id})
    },[dispatch])
   

    const placeSubmitHandler=(event)=>{
        event.preventDefault();
        console.log(formState.inputs)

    }




    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input id='title' label='title' element='input' validator={[]} errortext="Please enter valid input" onInput={inputHandler}></Input>
            <Input id='description' label='description' element='textarea' validator={[]} errortext="Please enter valid input" onInput={inputHandler}></Input>
            <Input id='address' label='address' element='input' validator={[]} errortext="Please enter valid input" onInput={inputHandler}></Input>
            <button type="submit">ADD Place</button>
        </form>
    )
}

export default NewPlace;