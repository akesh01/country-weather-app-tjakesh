import React, { useEffect, useState } from "react";
import InputForm from "./InputForm";
const CountryDetails = (props:any)=> {
    const [Data,setData] = useState("");
    useEffect(()=> {
        const getData = async ()=> {
            try {
                    const response = await fetch('https://restcountries.com/v3.1/name/india');
                    if(!response.ok) {
                        throw new Error ('This is an HTTP Error');
                    }
                let actualData = await response.json();
                setData(actualData);
                console.log(actualData[0].capital);
                
            }
            catch(err) 
            {
                console.log("Error");
                
            }
        }
        getData()

    },[])
    return (
      
      <div>
        
      </div>
    )
};

 export default CountryDetails ;