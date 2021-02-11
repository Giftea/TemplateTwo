import React, { useEffect} from 'react'
import Image from "next/image";
import styles from "../../styles.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {
 
    
    useEffect(() => {
        
        Aos.init({duration : 2000})
        
  
      }, [])
    return (
        <div>
            <div className={styles.support}>
        <div>
          <h2>Supported By Real People</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            perspiciatis!
          </p>
        </div>
        <Image src="/image 24.png" alt="LOGO" width={800} height={200} />
      </div>
      <footer className={styles.footer}>
      <div className={styles.about}>
        <p>WooCommerce - the <span>customisable eCommerce <br/> platform</span> for building <span>your online business.</span></p>
        <button>GET STARTED</button>
      </div>
      {/*  */}
      <div  className={styles.agreement}>
        <div>
        <Image src="/Vector.png" alt="LOGO" width={30} height={30} />
        <p>30 day <span>money back guarantee</span>
        </p>

        </div>
        <div>
        <Image src="/Union.png" alt="LOGO" width={30} height={30} />
        <p><span>support teams</span> around the world</p>
        </div>

        <div>
        <Image src="/Union2.png" alt="LOGO" width={30} height={30} />
        <p><span>Safe and secure</span> online payment</p>

        </div>
  
      </div>
      {/*  */}
      <div className={ styles.footer__logo}  data-aos='flip-right'>
      <Image src="/LOGO2.png" alt="LOGO" width={200} height={30} />
      </div>

      {/*  */}
      <div  className={styles.foot}>
            <div>
                <h4>WHO ARE WE</h4>
                <p>lorem</p>
                <p>lorem ipsum</p>
                <p>lorem</p>
                <p>lorem</p>
                
            </div>
            <div>
                <h4>WHO ARE WE</h4>
                <p>lorem ipsum</p>
                <p>lorem</p>
                <p>lorem ipsum</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem ipsum</p>
                
            </div>
            <div>
                <h4>WHO ARE WE</h4>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                
            </div><div>
                <h4>WHO ARE WE</h4>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                
            </div><div>
                <h4>WHO ARE WE</h4>
                <p>lorem</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem ipsum</p>
                <p>lorem</p>
                <p>lorem</p>
                <p>lorem</p>
                
            </div>
            
        </div>
      </footer>

      <div className={styles.bottom}  >
        <div className={styles.icons}  >
      <Image src="/twitter.png" alt="LOGO" width={20} height={20} />
      <Image src="/facebook.png" alt="LOGO" width={20} height={20} />
      <Image src="/wifi.png" alt="LOGO" width={20} height={20} />
      <Image src="/insta.png" alt="LOGO" width={20} height={20} />


        </div>

        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>

        <div>
      <Image src="/image 25.png" alt="LOGO" width={100} height={10} />

        </div>

      </div>
            
        </div>
    )
}

export default Footer
