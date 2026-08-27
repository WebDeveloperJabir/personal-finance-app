import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='login-place'>
      <div className='login-box'>
        <h1 className='text-1'>Sign Up</h1>
        <div className='input-box'>
          <form action=''>
            <label className='text-5-bold'>Name</label>
            <br />
            <div className='password-field'>
              <input type='text' placeholder='Name' className='icon-input full-width' />
              <img src='/images/user.svg' alt='' />
            </div>
            <br />
            <label className='text-5-bold'>Email</label>
            <br />
            <div className='password-field'>
              <input type='email' placeholder='Email' className='icon-input full-width' />
              <img src='/images/email.svg' alt='' />
            </div>
            <br />
            <label className='text-5-bold'>Create Password</label>
            <br />
            <div className='password-field'>
              <input type={showPassword ? "text" : "password"} placeholder='Password' className='icon-input full-width' />
              <img
                src={showPassword ? "/images/icon-hide-password.svg" : "/images/icon-show-password.svg"}
                alt=''
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              />
            </div>
            <p className='text-5' style={{ textAlign: "right", marginBottom: "0px", marginTop: "5px" }}>
              Passwords must be at least 8 characters
            </p>
            <br />
            <br />
            <input type='submit' value='Login' className='full-width ' />
          </form>
          <div className='account-creation-text text-5'>
            <p>
              Need to create an account, <a href=''>Sign Up</a>
            </p>
            <p>
              Want to see website's demo? <Link to='/dashboard'>Click Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
