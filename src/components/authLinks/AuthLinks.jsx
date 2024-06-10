import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
const AuthLinks = () => {
  // trmporary
  const status = "unaunthenticated";
  return (
    <>
      {status === "unaunthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
