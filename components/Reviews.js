import { useEffect, useState } from 'react';
import { getReviews } from '../services';
import Review from './Review';
import styles from '/styles/ReviewsForm.module.css';


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
            <div className={styles.reviewsFormContainer} /* className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8" */>
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