import React from "react";
import styles from "./signup.module.css";
import signupImg from "../../assets/signup-img.png";
import googleImg from "../../assets/google-img.png";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  const googleAuth = () => {
    window.open(
      `${import.meta.env.VITE_API_BASE_URL}/auth/google/callback`,
      "_self"
    );
  };

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
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src={googleImg} alt="google icon" />
            <span>Sign up with Google</span>
          </button>

          <p className={styles.text}>
            Have an Account? <Link to={"/login"}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
