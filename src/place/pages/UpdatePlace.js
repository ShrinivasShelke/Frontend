import React from "react"
import { useParams } from "react-router-dom"
import Input from "../../shared/components/FormElements/Input"
import Button from "../../shared/components/UIELement/Button"
import { useForm } from "../../shared/Hooks/FormHook"



const DUMMY_PLACES=[
    {
        id:"p1",
        title:"Nal-stop Metro Stop",
        description:"it is first stop of metro station",
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Kochi_Metro_train_at_Palarivattom%2C_Aug_2017.jpg",
        address:" 1, 2, Karve Rd, opposite Sndt College, Pandurang Colony, Erandwane, Pune",
        location:{
            lat:18.5579709,
            lng:18.5579709
        },
        creatorId:"u1"

    },
    {
    id:"p2",
    title:"Nal-stop Metro Stop",
    description:"it is first stop of metro station",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Kochi_Metro_train_at_Palarivattom%2C_Aug_2017.jpg",
    address:" 1, 2, Karve Rd, opposite Sndt College, Pandurang Colony, Erandwane, Pune",
    location:{
        lat:18.5579709,
        lng:18.5579709

    },
    creatorId:"u2"

}
]


const UpdatePlace=()=>{
    const placeId=useParams().placeId;
    

    const identifiedPlace=DUMMY_PLACES.find(p=>p.id===placeId)


  

    const[formState,inputHandler,setFormData]=useForm({
        title:{
            value:identifiedPlace.title,
            isValid:false
        },
        description:{
            value:identifiedPlace.description,
            isValid:false
        },
       

    },true)

    if(!identifiedPlace){
        return(<div className="center">
            <h3>place couldnot find</h3>
        </div>)
    }

    


    const placeSubmitHandler=(event)=>{
        event.preventDefault(); 
        console.log(formState.inputs)

    }

    
    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>
            <Input id='title' label='title' element='input' validator={[]} errortext="Please enter valid input" onInput={inputHandler}  value={formState.inputs.title.value}></Input>
            <Input id='description' label='description' element='textarea' validator={[]} errortext="Please enter valid input" onInput={inputHandler} value={formState.inputs.description.value}></Input>
            <Button type="submit">Update Place</Button>
        </form>
    )

}
export default UpdatePlace;