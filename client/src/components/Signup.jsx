import React, { useState, useRef } from "react";
import style from "../module/auth.module.css";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleGoogleLogin = () => {
    window.open(`http://localhost:3000/auth/api/v1/google/register`, "_self");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    axios
      .post(
        "/auth/api/v1/local/register",
        { email, password },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("reached in res of signup", response);
        if (response.status === 200) {
          axios
            .post(
              "/auth/api/v1/local/login",
              {
                email,
                password,
              },
              { withCredentials: true }
            )
            .then((response) => {
              if (response.status === 200) {
                toast.success("Registeration Successfull!");
                setTimeout(() => {
                  window.location.href = "/";
                }, 1500); // 1.5 seconds delay
              }
            })
            .catch((error) => {
              if (error.response && error.response.status === 401) {
                toast.error("Invalid email or password. Please try again.");
              } else {
                toast.error("There was an error logging in!");
              }
            });
          // setTimeout(() => {
          //   // window.location.href = "/";
          // }, 1500); // 1.5 seconds delay
        } else {
          toast.error(response.message);
        }
      })
      .catch((error) => {
        console.log("reached in catch of signup");
        if (error.response) {
          toast.error(error.response.data.message);
          console.error("Registration failed", error.response.data);
        } else if (error.request) {
          toast.error("No response received");
          console.error("No response received", error.request);
        } else {
          toast.error("Error setting up request");
          console.error("Error setting up request", error.message);
        }
      });
  };

  return (
    <div className={style.outer}>
      <div className={style.wrapper}>
        <Link to="/">
          <div className={style.closeBtn}>&times;</div>
        </Link>
        <form onSubmit={handleSignup}>
          <h2>Register</h2>
          <div className={style.inputField}>
            <input type="text" required ref={emailRef} />
            <label>Enter your email</label>
          </div>
          <div className={style.inputField}>
            <input
              type={showPassword ? "text" : "password"}
              required
              ref={passwordRef}
              onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
            />
            <label>Enter your password</label>
            <span
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                right: "10px",
                top: "70%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {!showPassword ? (
                <IoMdEye size={30} className={style.eyeIcon} />
              ) : (
                <IoEyeOff size={30} className={style.eyeIcon} />
              )}
            </span>
          </div>
          <div className={style.inputField}>
            <input type="password" required ref={confirmPasswordRef} />
            <label>Confirm your password</label>
          </div>
          <button type="submit"  className={style.button} >Register</button>
        </form>
        <div className={style.line}></div>
        <button className={style.button} onClick={handleGoogleLogin}>
          <FaGoogle size={30} className={style.Icon} />
          <span>Log In with Google</span>
        </button>
        <div className={style.register}>
          <p>
            Already have an account?
            <Link to="/auth/login">&nbsp;Login</Link>
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-center"/>
    </div>
  );
};

export default Signup;
