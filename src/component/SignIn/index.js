import React, { useState } from 'react';
import PropTypes from "prop-types"
import {Redirect} from "react-router-dom"




const SignIn = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username,password)
    }
    return ( <>
    <form onSubmit={handleSubmit}>
        <label>UserName</label>
        <input type="text" value = {username} onChange={(e)=>setusername(e.target.value)}/> <br/>
        <label>password</label>
        <input type="text" value = {password} onChange={(e)=>setpassword(e.target.value)}/>
        <input type="submit"/>
    </form>
    </> );
}
 
export default SignIn;


// Child.PropTypes={
//     user: Proptypes
// }