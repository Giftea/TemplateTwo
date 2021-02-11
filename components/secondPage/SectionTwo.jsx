import React, { useEffect} from 'react'
import Image from "next/image";
import styles from "../../styles.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

function SectionTwo() {
    useEffect(() => {
        
        Aos.init({duration : 1000})
        
  
      }, [])
    
    return (
        <section className={styles.section__two}>
              <div  className={styles.sectionTwo__image}>
          <Image src="/Union23.png" alt="LOGO" width={500} height={300} />
          </div>
           <div className={styles.section__two_div}>

           <div  className={styles.sectionTwo__image1}  data-aos='fade-right'>
          <Image src="/Rectangle 233.png" alt="LOGO" width={280} height={300} />
          </div>
          <div className={styles.sectionTwo__Text1}  data-aos='fade-left'>
              <h3>Develop <br/> Without LImits</h3>
              <p>Lorem ipsum dolor sit, amet consectetur a
                  dipisicing elit. Corrupti voluptatem ut pariatur, officiis possi
                  mus atque deserunt quam. Ipsum veritatis consectetur aspernatur tenetur, eos
                  , </p>
                  <button>REad the Documentation</button>
          </div>
           </div>
           <div>

           <div  className={styles.sectionTwo__image2}  data-aos='fade-right'>
          <Image src="/Rectangle 233.png" alt="LOGO" width={280} height={300} />
          </div>
          <div className={styles.sectionTwo__Text2}  data-aos='fade-left'>
              <h3>Develop <br/> Without LImits</h3>
              <p>Lorem ipsum dolor sit, amet consectetur a
                  dipisicing elit. Corrupti voluptatem ut pariatur, officiis possi
                  mus atque deserunt quam. Ipsum veritatis consectetur aspernatur tenetur, eos
                  , </p>
                  <button>REad the Documentation</button>
          </div>
           </div>
          
     


        </section>
    )
}

export default SectionTwo
