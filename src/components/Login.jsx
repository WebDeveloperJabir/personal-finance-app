import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='login-place'>
      <div className='login-box'>
        <h1 className='text-1'>Login</h1>
        <div className='input-box'>
          <form action=''>
            <label className='text-5-bold'>Email</label>
            <br />
            <div className='password-field'>
              <input type='email' name='' id='' placeholder='Email' className='icon-input full-width' />
              <img src='/images/email.svg' alt='' />
            </div>
            <br />
            <label className='text-5-bold'>Password</label>
            <br />
            <div className='password-field'>
              <input type={showPassword ? "text" : "password"} name='' id='' placeholder='Password' className='icon-input full-width' />
              <img
                src={showPassword ? "/images/icon-hide-password.svg" : "/images/icon-show-password.svg"}
                alt=''
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
              />
            </div>
            <br />
            <br />
            <input type='submit' name='' id='' value='Login' className='full-width ' />
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
