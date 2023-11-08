import React, { useEffect } from "react";
import styles from "./login.module.css";
import loginImg from "../../assets/login-img.png";
import { Link } from "react-router-dom";
import GoogleAuthBtn from "../../components/GoogleAuthBtn/GoogleAuthBtn";

const Login: React.FC = () => {
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
          <GoogleAuthBtn />

          <p className={styles.text}>
            New Here? <Link to={"/signup"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
