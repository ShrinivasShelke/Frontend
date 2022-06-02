import React from "react"
import UserList from "../component/UserList"
const User = () => {
    const USER=[{id:'u1',name:'Max',image:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg', places:3},{id:'u2',name:'Goerge',image:'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg', places:2}]


    return (
        <UserList items={USER}/>
    )
}

export default User