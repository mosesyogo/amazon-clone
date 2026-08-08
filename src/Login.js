import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (event) => {
    event.preventDefault()

    // Add authentication logic here later
  }

  const register = (event) => {
    event.preventDefault()

    // Add account-creation logic here later
  }

  return (
    <div className='login'>
      <Link
        to='/'
        className='login_logo'
        aria-label='Return to homepage'
      >
        amazon<span>clone</span>
      </Link>

      <div className='login_container'>
        <h1>Sign in</h1>

        <form onSubmit={signIn}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete='email'
            required
          />

          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete='current-password'
            required
          />

          <button
            type='submit'
            className='login_signInButton'
          >
            Sign in
          </button>
        </form>

        <p className='login_terms'>
          By signing in, you agree to the conditions of use and privacy
          notice.
        </p>

        <div className='login_divider'>
          <span>New to Amazon Clone?</span>
        </div>

        <button
          type='button'
          className='login_registerButton'
          onClick={register}
        >
          Create your Amazon Clone account
        </button>
      </div>
    </div>
  )
}

export default Login