import React, { useEffect, useState } from "react";
import styles from "./signup.module.css";
import signupImg from "../../assets/signup-img.png";
import { Link, useLocation } from "react-router-dom";
import GoogleAuthBtn from "../../components/GoogleAuthBtn/GoogleAuthBtn";

const Signup: React.FC = () => {
  // const [error, setError] = useState(false);
  // const { search } = useLocation();

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(search);
  //   const error = urlParams.get("error");

  //   if (error == "true") setError(true);
  // }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Signup Form</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img src={signupImg} className={styles.img} alt="signup" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Create an Account</h2>
          <input type="text" placeholder="Username" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <button className={styles.btn}>Sign Up</button>
          {/* <span className={styles.text + " " + styles.error}>
            {error ? "error!" : "no"}
          </span> */}
          <p className={styles.text}>or</p>
          <GoogleAuthBtn />
          <p className={styles.text}>
            Have an Account? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
