import {Link} from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="image-place">
        <img src="/assets/images/login-image.png" alt="Login" />
        <div className="texts">
          <img src="/assets/images/finance-text.svg" alt="Image" />
          <div>
            <h2>Keep track of your money and save for your future</h2>
            <br />
            <p>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
      <div className="login-place">
        <div className="login-box">
          <h1>Login</h1>
          <div className="input-box">
            <form action="">
              <label htmlFor="">Email</label>
              <br />
              <div className="password-field">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="icon-input full-width"
                />
                <img src="/assets/images/email.svg" alt="" />
              </div>
              <br />
              <br />
              <br />
              <label htmlFor="">Password</label>
              <br />
              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  name=""
                  id=""
                  placeholder="Password"
                  className="icon-input full-width"
                />
                <img
                  src={
                    showPassword
                      ? "/assets/images/icon-hide-password.svg"
                      : "/assets/images/icon-show-password.svg"
                  }
                  alt=""
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                />
              </div>
              <br />
              <br />
              <input type="submit" name="" id="" value="Login" className="full-width"/>
            </form>
            <div className="account-creation-text">
              <p>
                Need to create an account, <a href="">Sign Up</a>
              </p>
              <p>
                Want to see website's demo? <Link to="/dashboard">Click Here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
