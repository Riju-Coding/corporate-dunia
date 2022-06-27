import React from "react";
import Companycontext from "./Companycontext";
import { useState } from "react";
const Companystate=(props)=>{
    const host="http://localhost:5000/";
    const companiesIntial = [
    
   ]
 const [companies, setCompanies] = useState(companiesIntial)
 
 //get all 
 const getCompanies= async (props)=>{
   const response = await fetch(`${host}api/com/fetchallcompanies`, {
     method: 'GET', 
     
     headers: {
       'Content-Type': 'application/json',
      
       
     }
   });
   const json= await response.json()
 console.log(json)
 setCompanies(json)
 } 
 
return(
    <Companycontext.Provider value={{companies,getCompanies}}>
        {props.children}
    </Companycontext.Provider>
)
}
export default Companystate;