import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image  from 'next/image';
import starImage from '../images/icon-star.svg';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
       

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.stardiv}>
            <Image src={starImage} width={20} height={20} alt="starimage" className={styles.starimage}/>
            </div>
            <h3 styles={styles.h3}>How did we do?</h3>
            <p styles={styles.headertxt}> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! .</p>
            <div className={styles.rating}>
              <button className={styles.ratingbtn}>1</button>
              <button className={styles.ratingbtn}>2</button>
              <button className={styles.ratingbtn}>3</button>
              <button className={styles.ratingbtn}>4</button>
              <button className={styles.ratingbtn}>5</button>

            </div>
            <button className={styles.submitbtn}>Submit</button>
          </div>


          
        </div>
      </main>

   
    </div>
  );
}
