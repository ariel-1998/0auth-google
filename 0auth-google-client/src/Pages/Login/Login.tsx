import React from "react";
import styles from "./login.module.css";
import loginImg from "../../assets/login-img.png";
import googleImg from "../../assets/google-img.png";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const googleAuth = () => {
    // window.open(
    //   `${import.meta.env.VITE_API_BASE_URL}/auth/google/callback`,
    //   "_blank"
    // );
    window.open(`${import.meta.env.VITE_API_BASE_URL}/auth/google`, "_blank");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Log in form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img src={loginImg} className={styles.img} alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Members Login</h2>
          <input type="text" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button className={styles.btn}>Login</button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src={googleImg} alt="google icon" />
            <span>Sign in with Google</span>
          </button>

          <p className={styles.text}>
            New Here? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
