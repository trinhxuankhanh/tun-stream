import className from "classnames"
import React, { useState } from "react"
import "./style.css"

const LoginPage = () => {
  const [success, setSuscess] = useState(false)

  const handleOnClickLogin = () => setSuscess(true)
  return (
    <div
      className={className({
        wrapper: true,
        "form-success": success,
      })}
    >
      <div className='container'>
        <h1>Welcome</h1>

        <form className='form' onSubmit={e => e.preventDefault()}>
          <input type='text' placeholder='Username' />
          <input type='password' placeholder='Password' />
          <button type='submit' id='login-button' onClick={handleOnClickLogin}>
            Login
          </button>
        </form>
      </div>

      <ul className='bg-bubbles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default LoginPage
