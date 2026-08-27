import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Auth() {
  const currentPath = window.location.pathname;
  return (
    <div className='login-page'>
      <div className='login-page-header padding-300'>
        <img src='/images/finance-text.svg' alt='Image' />
      </div>
      <div className='image-place'>
        <img src='/images/login-image.png' alt='Login' />
        <div className='texts padding-500'>
          <img src='/images/finance-text.svg' alt='Image' />
          <div>
            <h2 className='text-1'>Keep track of your money and save for your future</h2>
            <br />
            <p className='text-4'>Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</p>
          </div>
        </div>
      </div>
      {currentPath === "/login" && <Login />}
      {currentPath === "/sign-up" && <SignUp />}
    </div>
  );
}
