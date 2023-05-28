import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import starImage from '../images/icon-star.svg';
import ThankYou from './components/ThankYou';
const ratings = [
  { id: 1, value: '1' },
  { id: 2, value: '2' },
  { id: 3, value: '3' },
  { id: 4, value: '4' },
  { id: 5, value: '5' },
];

const Home = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState("");

  const handleRatingButtonClick = (event) => {
    const ratingId = parseInt(event.target.textContent);
    const selected = ratings.find((rating) => rating.id === ratingId);
    setSelectedRating(selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedRating.value) {
      console.log(selectedRating);
      setSubmitted(true);
    } else {
      setSubmitted(false);

      alert('Please select a rating');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Mentor | Interactive Rating Component</title>
        <link rel="icon" href="../images/favicon-32x32.png" />
      </Head>
      {isSubmitted ? (
        <ThankYou selectedRating={selectedRating} />
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
                  <button key={rating.id} className={styles.ratingbtn} onClick={handleRatingButtonClick} value={rating.value} >
                    {rating.value}
                  </button>
                ))}
              </div>
              <form onSubmit={handleSubmit}>
                <button className={styles.submitbtn} >Submit</button>
              </form>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Home;
