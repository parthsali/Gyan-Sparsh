import React from 'react'
import './Login.css'


const Login = () => {
  return (
    <>
        <div className='main-container'>
            <div className='info-container'>
                <div className='info-center-container'>
                    <h1 className='heading'><span className='blue'>Gyan Sparsh</span></h1>
                    <h3 className='subheading'>
                        An Education Platform for Hearing and <span className='blue'>Deaf</span> Alike
                    </h3>
                </div>
            </div>
            <div className='input-container'>
                <div className='input-center-container'>
                    <div className='welcome'>
                        <h1>Hey, welcome 👋</h1>
                        <h3>Enter the information you entered while registering</h3>
                    </div>
                    <div className='email input-field'>
                        <label>Email</label>
                        <input type='text'/>
                    </div>
                    <div className='password input-field'>
                        <label>Password</label>
                        <input type='password'/>
                    </div>
                    <div className='forgot-password'>
                        <div>
                            <input className='checkbox' type='checkbox'/>
                            <label>Remember me</label>
                        </div>
                        <a href='#'>Forget Password?</a>
                    </div>
                    <div className='signup-container'>
                        <button className='signup-btn'>Login</button>
                    </div>
                    <div className='footer'>
                        <p>Don't have account? <a href='/register'>Register</a></p>
                    </div>
                    <div className='line'>
                        
                    </div>
                    <div className='google'>
                        <button className='google-btn'><img src='https://blog.hubspot.com/hubfs/image8-2.jpg'/><span className='google-text'> Sign in with Google</span></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login