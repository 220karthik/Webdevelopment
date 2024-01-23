import './login.css'
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from "react"
import ButtonAppBar from './navbar';
import {Link} from "react-router-dom";
import Footer from './Footer';

export default function Login() {

<ButtonAppBar
/>
    let [authMode, setAuthMode] = useState("signin")
  
    const changeAuthMode = () => {
      setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
      return (
        <div className="Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>E-mail</label>
                <input
                  type="email"
                 
                  className="form-control mt-1"
                  placeholder="email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
              <Link to="/combobox">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                </Link>
              </div>
              
            </div>
          </form>
        </div>
      )
    }
  
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Gender</label>
              <input
                type="id"
                className="form-control mt-1"
                placeholder="Gender"
              />
            </div>
            <div className="form-group mt-3">
              <label>DOB</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="DOB"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <Link to="/combobox">
              <button type="submit" className="btn btn-primary">
                Create account
              </button>
              </Link>
            </div>
            
          </div>
        </form>
      
      </div>
    )
  }


