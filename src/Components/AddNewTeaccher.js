import React, { useState } from "react";
import Base from "../Base/Base";


export default function AddNewTeacher({teacherdatas, setTeacherdatas,history}){
    
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [classes,setClasses] = useState("")
    const [address,setAddress] = useState("")
    
    function addNewTeacher(){
        const addTeacher = {
            id:id,
            Name:name,
            class:classes,
            address:address
        }
        // console.log(addTeacher)
        setTeacherdatas([...teacherdatas,addTeacher])
        history.push('/teacher')
    }

    return (
        <Base>
            <div className="input my-5">
                <input className="form-control m-2" placeholder="ID" 
                onChange={(e) => setId(e.target.value)}/>
                <input className="form-control m-2" placeholder="Name" 
                onChange={(e) => setName(e.target.value)}/>
                <input className="form-control m-2" placeholder="Class" 
                onChange={(e) => setClasses(e.target.value)}/>
                <input className="form-control m-2" placeholder="Address" 
                onChange={(e) => setAddress(e.target.value)}/>
                <button className="btn btn-primary" onClick={()=>addNewTeacher()}>Add Teacher</button>
            </div>
        </Base>
    )
}