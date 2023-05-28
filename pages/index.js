import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import starImage from '../images/icon-star.svg';
import thanks from '../images/illustration-thank-you.svg';

const ratings = [
  { id: 1, value: '1' },
  { id: 2, value: '2' },
  { id: 3, value: '3' },
  { id: 4, value: '4' },
  { id: 5, value: '5' },
];

const ThankYouMessage = ({ selectedRating }) => (
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

const Home = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(ratings[0]);

  const handleRatingButtonClick = (event) => {
    setSelectedRating(ratings.find((rating) => rating.id === +event.target.textContent));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Interactive Rating Component</title>
        <link rel="icon" href="../images/favicon-32x32.png" />
      </Head>
      {isSubmitted ? (
        <ThankYouMessage selectedRating={selectedRating} />
      ) : (
        <main className={styles.main}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.stardiv}>
                <Image src={starImage} width={20} height={20} alt="starimage" className={styles.starimage} />
              </div>
              <h3>How did we do?</h3>
              <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
              <div className={styles.rating}>
                {ratings.map((rating) => (
                  <button key={rating.id} className={styles.ratingbtn} onClick={handleRatingButtonClick}>
                    {rating.value}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <button className={styles.submitbtn}>Submit</button>
              </form>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Home;
