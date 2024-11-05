import React, { useState} from 'react'


const Signup = () => {
    const [username, setUserName] = useState ("")
    const [email, setEmail] = useState ("")
    const [password, setPassword] = useState ("")
    const [error, setError] = useState ("")
    const [success, setSuccess] = useState ("")

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    if (!username || !email || !password) {
        setError("All fields are required")
        return
    }

    setError ("")
    setSuccess("Registration successful")


    console.log("Form Submitted", { username, email, password });

    setUserName("")
    setEmail("")
    setPassword("")
    };

return (

    <div className = "Formstyle">
    <div className ="form-input">
    <h1> Sign up </h1>
    <form onSubmit = {handleSubmit}>
        <label className='UserNamelabel'> Username </label>
        <br></br>
        <br></br>
        <input
        onChange = {handleUserName}
        className = "input"
        value = {username}
        type = "text"
        placeholder = "Enter your Username"
        />
        
        <br></br>
        <br></br>
        
    <label className='Emaillabel'> Email </label>
    <br></br>
    <br></br>
        <input
        onChange = {handleEmail}
        className = "input"
        value = {email}
        type = "email"
        placeholder = "Enter your email"
        />
        <br></br>
        <br></br>
        
        <label className='Passwordlabel'>  Password </label>
        <br></br>
        <br></br>
        <input
        onChange = {handlePassword}
        className = "input"
        value = {password}
        type = "password"
        placeholder ="Enter your password"
        />
        
        <br></br>
        <br></br>
        <br></br>
        <button  className = "btn" type= "submit"> Register</button>
        
        </form>
    </div>
</div>
)
}

export default Signup