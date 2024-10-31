import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleUserName = (e) => {
        setUserName(e.target.value)
      }
    
      const handlePassword = (e) => {
        setPassword(e.target.value)
      }
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
    
    const data = {
          username: userName,
          password: password
        }

    console.log("Form Submitted", data);
    };

    return (

      <div className="forms">
        <div className ="form-input">
          <h1> Login</h1>
          <form onSubmit={handleSubmit}>
            <label className='UserNamelabel'> Username </label>
            
            <br></br>
            <br></br>
        
            <input
              onChange={handleUserName}
              className="input"
              value={userName}
              type="userName"
              placeholder="Enter your username"
              />

             <br></br>
             <br /><br/>
        
              <label className='Passwordlabel'>  Password </label>

              <br></br>
              <br></br>

              <input
              onChange={handlePassword}
              className="input"
              value={password}
              type="password"
              placeholder="Enter your password"
              />
        
              <br></br>
              <br></br>
              <br></br>

              <button className="btn" type="submit"> Login </button>

               </form>
            </div>
        </div>
        )
    }

    export default Login