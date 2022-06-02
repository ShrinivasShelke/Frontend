import { createContext } from "react";

export const AuthContext=createContext({
    isloggined:false,
    login:()=>{},
    logout:()=>{}
})