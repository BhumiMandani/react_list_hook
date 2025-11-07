import React, {useState,useEffect } from 'react'

 const LifecycleFunction = () => {
    const [name,setName] =useState("bhumii")
    useEffect(()=>{
        setTimeout(()=>{
            setName("ABCD")
        },3000);
    },[])
  return (
    <div>
    <h1> Function Lifecycle Example</h1>
    <h4>Name is == {name}</h4>
    </div>
  )
}
export default LifecycleFunction
