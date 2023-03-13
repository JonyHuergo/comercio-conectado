import styles from '/styles/Review.module.css';

import parse from 'html-react-parser';

const Review = ({review, index}) => {

    return (
        <div key={index} className={styles.review}>
            <p><b>{review.name}</b></p>
            <p>{parse(review.content)}</p>
        </div>
    );
}
 
export default Review;