import React, {useRef, useEffect} from 'react'
import Image from "next/image";
import styles from "../../styles.module.css";
import {TweenMax , Power3, TimelineLite} from 'gsap';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  let hero = useRef(null)
  let heroText = useRef(null)
  let heroImg = useRef(null)
  let tl = new TimelineLite()
 

    useEffect(() => {
    
      Aos.init({duration : 2000})

      TweenMax.to(hero , 0,{css:{visibility :'visible'}})
      tl
      .from (heroImg, 2, {y:1280, ease: Power3.easeOut}, )
      .from(heroImg.firstElementChild, 2, {scale:1.6, ease: Power3.easeOut}, .2)
      

    }, [])
    return (
        <main className={styles.main} ref = {el => hero = el}>
        <div className={styles.HeroText}  data-aos='fade-right'>
          <h1>Build exactly the <br/> eCommerce website you want</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            adipisci enim. Voluptatum a Lorem ipsum dolor sit amet.
          </p>
         <div>
          <button>START A NEW STORE </button> 
          <p>or <span>Customize & Extend</span> </p>
          </div>
         
        </div>
  
        <div className={styles.Hero__img} ref = {el => heroImg = el} >
          <Image src="/featured-image.png" alt="LOGO" width={600} height={600} />
       
        </div>
      </main>
    )
}

export default Hero
