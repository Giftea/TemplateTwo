import React from 'react'
import Image from "next/image";
import styles from "../../styles.module.css";

function NavBar() {
    return (
        <nav className={styles.nav}>

       
         
      <div>
        <Image src="/LOGO.png" alt="LOGO" width={200} height={25} />

        <ul className={styles.links}>
          <p>Sell</p>
          <p>Marketplace</p>
          <p>Community</p>
          <p>Develop</p>
          <p>Resources</p>
        </ul>
        </div>

        <div className={styles.links}>
        <a href="#">LOG IN</a>
            <button href="#" className={styles.get__started} >GET STARTED</button>
            
        </div>
     
    </nav>
    )
}

export default NavBar
