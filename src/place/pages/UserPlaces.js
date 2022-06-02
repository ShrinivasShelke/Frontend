import React from "react"

import { useParams } from "react-router-dom";
import PlaceList from "../component/PlaceList";

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
];
const UserPlaces= () => {
    const userId=useParams().userId;
    const loaderItems=DUMMY_PLACES.filter(place=>place.creatorId===userId)
    return (
         <PlaceList items={loaderItems}/>
       )
}

export default UserPlaces;