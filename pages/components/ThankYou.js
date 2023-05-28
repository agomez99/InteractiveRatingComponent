import React from 'react'
import Image from 'next/image';
import thanks from "../../images/illustration-thank-you.svg"
import styles from "../../styles/Home.module.css"

const ThankYou = ({ selectedRating }) => (
    <div>
        <main className={styles.main}>
            <div className={styles.grid}>
                <div className={styles.thankcard}>
                    <Image src={thanks} alt="thank you" width={100} height={90} />
                    <div className={styles.thanktext}>
                        <h4 className={styles.thanktextp}>You selected {selectedRating.value} out of 5</h4>
                    </div>
                    <h3>Thank you!</h3>
                    <p>
                        We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
                    </p>
                </div>
            </div>
        </main>
    </div>
);
export default ThankYou