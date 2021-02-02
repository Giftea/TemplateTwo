import React from "react";
import Image from "next/image";
import styles from "../../styles.module.css";

function Hero() {
  return (
    <main className={styles.main}>
      <div className={styles.HeroText}>
        <h1>Build exactly the eCommerce website you want</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          adipisci enim. Voluptatum a Lorem ipsum dolor sit amet.
        </p>
<div>
        <button>START A NEW STORE </button> 
        <p>or <span>Customize & Extend</span> </p>
        </div>
       
      </div>

      <div className={styles.ImageGallery}>
        <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={200} />
        <Image src="/Rectangle 225.png" alt="LOGO" width={350} height={200} />
        <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={200} />
        <Image src="/Rectangle 225.png" alt="LOGO" width={350} height={200} />
        <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={200} />
        <Image src="/Rectangle 225.png" alt="LOGO" width={350} height={200} />
      </div>
    </main>
  );
}

export default Hero;
