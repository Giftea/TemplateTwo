import React, { useEffect} from 'react'
import Image from "next/image";
import styles from "../../styles.module.css";
import {TweenMax , Power3, TimelineLite} from 'gsap';
import Aos from 'aos'
import 'aos/dist/aos.css'


function Section0ne() {
    
    useEffect(() => {
        
        Aos.init({duration : 2000})
        
  
      }, [])
    return (
        <section className={styles.body__section} >
        <h2>Your eCommerce <br/> made simple</h2>

        <div className={styles.image__section} >

            <div className={styles.section__card1}  data-aos='fade-up'>
                <div className={styles.image__box} >
                <div className={styles.img__main}>    <Image src="/Rectangle 223.png" alt="LOGO" width={350} height={230} /></div>
                <div className={styles.img__medium}>  <Image src="/page.png" alt="LOGO" width={150} height={200} /></div>
              <div className={styles.img__small}> <Image src="/apple.png" alt="LOGO" width={50} height={40}  /></div> 

                </div>
                <div  className={styles.card__textArea} >
                    <h3>All You Need to Start</h3>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Necessitatibus ex consequuntur iste!</p>
                    <a href="#">Ecommerce for Wordpress</a>

                </div>
            </div>
            {/*  */}
            <div className={styles.section__card2}  data-aos='fade-up'>
                <div className={styles.image__box} >
                <div className={styles.img__main}>    <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={230} /></div>
                <div className={styles.img__square}>  <Image src="/image 17.png" alt="LOGO" width={120} height={100} /></div>
              <div className={styles.img__mailchimp}> <Image src="/image 18.png" alt="LOGO" width={120} height={100}  /></div> 
              <div className={styles.img__facebook}> <Image src="/image 19.png" alt="LOGO" width={120} height={100}  /></div> 
              <div className={styles.img__google}> <Image src="/image 20.png" alt="LOGO" width={120} height={100}  /></div> 
              <div className={styles.img__jetpack}> <Image src="/image 22.png" alt="LOGO" width={120} height={100}  /></div> 


                </div>
                <div  className={styles.card__textArea} >
                    <h3>All You Need to Start</h3>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Necessitatibus ex consequuntur iste!</p>
                    <a href="#">Ecommerce for Wordpress</a>

                </div>
            </div>
           {/*  */}
           <div className={styles.section__card3} data-aos='fade-up' >
                <div className={styles.image__box} >
                <div className={styles.img__main}>    <Image src="/Rectangle 225.png" alt="LOGO" width={350} height={230} /></div>
                <div className={styles.img__square}>  <Image src="/Rectangle 227.png" alt="LOGO" width={160} height={120} /></div>
              <div className={styles.img__top}> <Image src="/Rectangle 228.png" alt="LOGO" width={150} height={120}  /></div> 
              <div className={styles.img__side}> <Image src="/Rectangle 226.png" alt="LOGO" width={180} height={140}  /></div> 

                </div>
                <div  className={styles.card__textArea} >
                    <h3>All You Need to Start</h3>
                    <p>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Necessitatibus ex consequuntur iste!</p>
                    <a href="#">Ecommerce for Wordpress</a>

                </div>
            </div>

        </div>

        {/*  */}

        
    </section>
    )
}

export default Section0ne
