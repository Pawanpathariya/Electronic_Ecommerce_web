import { createContext,useState } from "react";
const mycont=createContext();
const UserContext=({children})=>{
    const [btnstatus,setbtnstatus]=useState(false);
    return(
        <>
        <mycont.Provider value={{btnstatus,setbtnstatus}}>
        {children}
        </mycont.Provider>
      
        </>
    )
}

export default UserContext;
export {mycont};