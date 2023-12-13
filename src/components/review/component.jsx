import styles from "./Review.module.scss";

const Review = ( {review, user} ) => {

    const {text, rating} = review ?? {};

    if (!review)
        return null;

    return <div>
        <p><strong>{user?.name}</strong> / <span className={styles.rating}><i>{rating} star</i></span></p>
        <p>{text}</p>
    </div>
}

export default Review;