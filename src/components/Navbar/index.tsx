import styles from "./navbar.module.scss"
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbar}> 
      <NavLink className={styles["navbar_link"]} to="/">Datemate</NavLink>
      <NavLink className={styles["navbar_link"]} to="/about">About</NavLink>
    </div>
  );
}