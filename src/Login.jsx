import React, { useState } from 'react'

const Login = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

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

    try {
      const response = await fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
         
        },
        body: JSON.stringify(data),
      })

      if(response.ok) {
      const result = await response.json();
      console.log('Login successfull')
      setError('')
    } else {
      const errorData = await response.json();
      setError(errorData.message || 'Invalid credentials')
    } 
    
  } catch (error) {
      console.error('Error', error)
      setError ('Login failed')
    }

  } 

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
              type="text"
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