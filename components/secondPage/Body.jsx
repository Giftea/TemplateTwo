import React from 'react'
import Image from "next/image";
import styles from "../../styles.module.css";
import Section0ne from './Section0ne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Footer from './Footer';

function Body() {
    return (
        <div>
            <Section0ne/>
            <SectionTwo />
            <SectionThree />
            <Footer/>
        </div>
    )
}

export default Body
