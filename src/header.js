
import React, {  useState } from "react";

import "./header.css"
const Header =()=>{


    const[data,setData] = useState({
        name :" ",
        email :"",
})
    const[empty,setEmp] =useState([])
    
    const {name, email} = {...data}
    const changeHandler =(e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    // const 
    
    const submitHandler = async(e)=>{
        e.preventDefault();
        const obj ={
               
               first_name :data.name,
                 user_mail :data.email
            }
             console.log(obj);
             setEmp(((prev)=> [...prev,obj]))

         var dataadded = await setData({
            name :"",
            email :"",
        })
   
    }
    
    return (
        <div className="maincontainer">
            <h2> Registration Form</h2>
            <form onSubmit={submitHandler} >
                <center>
                <label>Name</label><br/>
                <input type ="text" name="name" onChange={changeHandler} value={name}></input><br/>
                <label >Email:</label><br/>
                <input type="email" name="email" onChange={changeHandler} value={email}></input><br/>
                <button  type="submit" onClick={submitHandler }>Postdata</button>
                </center>
            </form>
          <div>
            <ul>{
            empty.map((item)=>(
                <li>
                   
               <div className="map">
                Credentials:
                <p>name:{item.first_name}</p>
                <p>email:{item.user_mail}</p>
                </div>
                
            </li>
            ))}
            </ul>


            </div> 

        </div>
    )
}

export default Header 
