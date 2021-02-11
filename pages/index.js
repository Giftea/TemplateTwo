
import { Fragment } from "react";
// import Body from "../components/welcomePage/Body";
// import Footer from "../components/welcomePage/Footer";
import Hero from "../components/secondPage/Hero";
// import NavBar from '../components/welcomePage/NavBar'
import NavBar from '../components/secondPage/NavBar'
import Body from '../components/secondPage/Body'

import Image from "next/image";
import styles from "../styles.module.css";




 const  Index = () => (<Fragment>
    
     <div className ={styles.back__img}> <Image src="/back.png" alt="LOGO" width={600} height={500} className={styles.back} /></div>
     <NavBar />
     <Hero/>
     <Body/>
 
    {/* <NavBar/>
    <Hero/>
    <Body/>
    <Footer/> */}
</Fragment>)


  
  export default Index;