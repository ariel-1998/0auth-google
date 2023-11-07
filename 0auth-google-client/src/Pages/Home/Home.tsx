import React from "react";
import styles from "./home.module.css";
import { UserModel } from "../../models/UserModel";
import profileImg from "../../assets/profile-img.png";
// import googleImg from "../../assets/google-img.png";

type HomeProps = {
  user: UserModel;
};
const Home: React.FC<HomeProps> = ({ user }) => {
  const logout = () => {
    window.open(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, "_self");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Home</h1>
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img src={profileImg} className={styles.img} alt="profile" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Profile</h2>
          <img
            src={user.picture}
            className={styles.profile_img}
            alt="profile"
          />
          <input
            type="text"
            placeholder="Username"
            defaultValue={user.name}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Email"
            className={styles.input}
            defaultValue={user.email}
          />
          <button className={styles.btn} onClick={logout}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
