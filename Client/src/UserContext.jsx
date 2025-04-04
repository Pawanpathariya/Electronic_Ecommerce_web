import { createContext,useState } from "react";
const mycont=createContext();
const UserContext=({children})=>{
    const [btnstatus,setbtnstatus]=useState(false);
    const [user,setuser]=useState("");
    return(
        <>
        <mycont.Provider value={{btnstatus,setbtnstatus,user,setuser}}>
        {children}
        </mycont.Provider>
      
        </>
    )
}

export default UserContext;
export {mycont};