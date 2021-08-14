import React from "react";

import { Link } from "react-router-dom";

// Styles
import styles from "./Header.module.css";
// Styles

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        На главную
      </Link>
      <Link to="/cards" className={styles.link}>
        Cards
      </Link>
      <Link to="/counter" className={styles.link}>
        Counter
      </Link>
    </header>
  );
}

export default Header;
