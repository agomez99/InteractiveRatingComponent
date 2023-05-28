import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import starImage from '../images/icon-star.svg';
import thanks from '../images/illustration-thank-you.svg';
import ThankYou from '../components/ThankYou';
import styles from '../styles/Home.module.css';
export default function Home() {
  const [isSubmitted, setSubmitted] = useState(false);
  const ratings = [
    { id: 1, value: '1' },
    { id: 2, value: '2' },
    { id: 3, value: '3' },
    { id: 4, value: '4' },
    { id: 5, value: '5' },
  ];




 const [rating, setRating] = useState(ratings[0]);
 const ratingBtnClickHandler = (event) => {
     setRating(ratings.find((rating) => rating.id === +event.target.textContent));
   }
   console.log(rating);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your form submission logic here
    console.log('Form submitted');
    // After the form is submitted, set the isSubmitted state to true
    setSubmitted(true);
  };



  const thankYou = () => {
    return (
      <div>
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}>
          <Image src={thanks} alt="thank you" width={300} height={300} />
          You selected {rating.value} rating.out of 5
              <h3>Thank you!</h3>
              <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (isSubmitted) {
   return thankYou();
  }
  // Render your form he
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Interactive Rating Component</title>
        <link rel="icon" href="../images/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.stardiv}>
              <Image src={starImage} width={20} height={20} alt="starimage" className={styles.starimage} />
            </div>
            <h3>How did we do?</h3>
            <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering! .</p>
            <div className={styles.rating}>
              {ratings.map((rating) => (
                <button key={rating.id} className={styles.ratingbtn} onClick={ratingBtnClickHandler}>
                  {rating.id}
                </button>
              ))}
            </div>
              <form onSubmit={handleSubmit}>
                 <button className={styles.submitbtn} >Submit</button>
              </form>
          </div>
        </div>
      </main>
    </div>
  );
}
