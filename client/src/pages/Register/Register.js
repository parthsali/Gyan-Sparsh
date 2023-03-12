import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <>
        <div className='main-container'>
            <div className='input-container'>
                <div className='input-center-container'>
                    <div className='welcome'>
                        <h1>Hey, welcome 👋</h1>
                        <h3>Enter your information</h3>
                    </div>
                    <div className='input-field'>
                        <label>Name</label>
                        <input type="text"/>
                    </div>
                    <div className='input-field'>
                        <label>Email</label>
                        <input type="email"/>
                    </div>
                    <div className='input-field'>
                        <label>Password</label>
                        <input type="-password"/>
                    </div>
                    <div className='signup-container'>
                        <button className='signup-btn'>Login</button>
                    </div>
                    
                    <div className='footer'>
                        <p>Already have account? <a href='/login'>Login</a></p>
                    </div>
                    <div className='line'>
                        
                    </div>
                    <div className='google'>
                        <button className='google-btn'><img src='https://blog.hubspot.com/hubfs/image8-2.jpg'/><span className='google-text'> Sign up with Google</span></button>
                    </div>
                </div>

            </div>
            <div className='info-container'>
                <div className='info-center-container'>
                    <h1 className='heading'><span className='blue'>Gyan Sparsh</span></h1>
                    <h3 className='subheading'>
                        An Education Platform for Hearing and <span className='blue'>Deaf</span> Alike
                    </h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register