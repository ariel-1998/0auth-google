import React from "react";
import styles from "./GoogleAuthBtn.module.css";
import googleImg from "../../assets/google-img.png";

const GoogleAuthBtn: React.FC = () => {
  const googleAuth = async () => {
    window.open(
      `${import.meta.env.VITE_API_BASE_URL}/auth/google/login`,
      "_self"
    );
  };
  return (
    <button className={styles.google_btn} onClick={googleAuth}>
      <img src={googleImg} alt="google icon" />
      <span>Sign up with Google</span>
    </button>
  );
};

export default GoogleAuthBtn;
