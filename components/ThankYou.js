import React from 'react'
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import thanks from "../images/illustration-thank-you.svg";

function ThankYou(props) {
    const { rating } = props;
  
    return (
      <div>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <Image src={thanks} alt="thank you" width={300} height={300} />
              You selected {rating} out of 5
              <h3>Thank you!</h3>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in</p>
            </div>
          </div>
        </main>
      </div>
    )
  }
  
  export default ThankYou;
  