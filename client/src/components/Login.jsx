import React, { useRef, useState } from "react";
import style from "../module/auth.module.css";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoEyeOff } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLocalLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

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
          toast.success(
            "Login Successful! redirecting you back. Welcome back!"
          );
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
  };

  const handleGoogleLogin = () => {
    window.open(`http://localhost:3000/auth/api/v1/google/register`, "_self");
  };

  return (
    <div className={style.outer}>
      <div className={style.wrapper}>
        <Link to="/">
          <div className={style.closeBtn}>&times;</div>
        </Link>
        <form onSubmit={handleLocalLogin}>
          <h2>Login</h2>
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
              className={style.eyeIcon}
              style={{
                position: "absolute",
                right: "10px",
                top: "70%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {!showPassword ? (
                <IoMdEye className={style.eyeIcon} size={30} />
              ) : (
                <IoEyeOff className={style.eyeIcon} size={30} />
              )}
            </span>
          </div>

          <button type="submit" className={style.button}>
            Log In
          </button>
        </form>
        <div className={style.line}></div>
        <button className={style.button} onClick={handleGoogleLogin}>
          <FaGoogle size={30} className={style.Icon} />
          <span>Log In with Google</span>
        </button>
        <div className={style.register}>
          <p>
            Don't have an account?
            <Link to="/auth/register">&nbsp;Register</Link>
          </p>
        </div>
      </div>
      <ToastContainer position="bottom-center"/>
    </div>
  );
};

export default Login;
