import { Fragment } from "react";
import Image from "next/image";
import styles from "../../styles.module.css";

function Body() {
  return (
    <section className={styles.bodySection}>
      <div className={styles.sectionOne}>
        <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={200} />
        <div className={styles.textArea}>
          <h3>Everything you need to start selling online</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Esse, aliquam odit sapiente laudantium <br /> aliquid cupiditate
            eaque sit quia volupt as hic vitae optio? <br /> quibusdam!
          </p>
          <button>ECOMMERCE FOR WORDPRESS</button>
        </div>
      </div>

      <div className={styles.sectionOne}>
        <div className={styles.textArea}>
          <h3>customize and extend</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Esse, aliquam odit sapiente laudantium <br /> aliquid cupiditate
            eaque sit quia volupt as hic vitae optio? <br /> quibusdam!
          </p>
          <button>BROWSE EXTENSIONS</button>
        </div>
        <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={200} />
      </div>

      <div className={styles.reviews}>
        <div>
          <h2>Trusted by Agencies & Store Owners</h2>
          <p>From startups to established brands, you'll be in good company</p>
        </div>
        <div className={styles.personReview}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Esse, aliquam odit sapiente laudantium <br /> aliquid cupiditate
            eaque sit quia volupt as hic vitae optio? <br /> Repudiandae eos
            deserunt voluptas repellat, soluta facilis quibusdam!
          </p>
        </div>
        <div className={styles.personReview}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Esse, aliquam odit sapiente laudantium <br /> aliquid cupiditate
            eaque sit quia volupt as hic vitae optio? <br /> Repudiandae eos
            deserunt voluptas repellat, soluta facilis quibusdam!
          </p>
        </div>
      </div>
      <div className={styles.sectionOne}>
        <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={200} />
        <div className={styles.textArea}>
          <h3>develop without limits</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Esse, aliquam odit sapiente laudantium <br /> aliquid cupiditate
            eaque sit quia volupt as hic vitae optio? <br /> Repudiandae eos
            deserunt voluptas repellat, soluta facilis quibusdam!
          </p>
          <button>ECOMMERCE FOR WORDPRESS</button>
        </div>
      </div>

      <div className={styles.sectionOne}>
        <div className={styles.textArea}>
          <h3>learn with a community</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Esse, aliquam odit sapiente laudantium <br /> aliquid cupiditate
            eaque sit quia volupt as hic vitae optio? <br /> Repudiandae eos
            deserunt voluptas repellat, soluta facilis quibusdam!
          </p>
          <button>START A NEW STORE </button>
        </div>
        <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={200} />
      </div>
      <div className={styles.support}>
        <div>
          <h3>Supported By Real People</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            perspiciatis!
          </p>
        </div>
        <Image src="/image 24.png" alt="LOGO" width={700} height={200} />
      </div>

      <div className={styles.about}>
        <p>WooCommerce - the <span>customisable eCommerce <br/> platform</span> for building <span>your online business.</span></p>
        <button>GET STARTED</button>
      </div>
      <div className={styles.sectionOne}>
        <div className={styles.textArea}>
          <h3>everythin you need to start selling online</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Esse, aliquam odit sapiente laudantium <br /> aliquid cupiditate
            eaque sit quia volupt as hic vitae optio? <br /> Repudiandae eos
            deserunt voluptas repellat, soluta facilis quibusdam!
          </p>
          <button>START A NEW STORE </button>
        </div>
        <Image src="/Rectangle 224.png" alt="LOGO" width={350} height={200} />
      </div>
    </section>
  );
}

export default Body;
