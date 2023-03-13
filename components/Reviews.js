import { useEffect, useState } from 'react';
import { getReviews } from '../services';
import Review from './Review';
import styles from '/styles/Reviews.module.css';


const Reviews = ({slug}) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews(slug).then((result) => {
            setReviews(result);
        });
    }, []);

    return (
         <>
        {reviews.length > 0 && (
            <div className={styles.reviewsContainer}>
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                {reviews.length}
                {' '}
                {reviews.length > 1 ? "Reseñas" : "Reseña" }
            </h3>
                {reviews.map((review, index) => (
                    <Review index={index} review={review}/>
                ))}
            </div>
        )}
        </>
    );
}
 
export default Reviews;