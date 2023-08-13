"use client";
import styles from "./page.module.css";
import Image from "next/image";
import profilePic from "../../public/image1.png";
import logo from "../../public/logo.png";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.css"; // Add this line
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.imageContainer}>
        <Image
          src={profilePic}
          alt="Odontology image"
          width={600}
          height={400}
          className={styles.imageWithWidth}
        />
      </div>
      <div className={styles.imageContainer2}>
        <Image
          src={logo}
          alt="Odontology logo"
          width={500}
          height={90}
          className={styles.imageWithWidth2}
        />
        <Login />
      </div>
    </main>
  );
}
