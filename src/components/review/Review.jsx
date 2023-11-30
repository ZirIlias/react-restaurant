import styles from "./Review.module.scss";

const Review = ( { review: {user, rating, text} } ) => {
    return <div>
        <p><strong>{ user }</strong> / <span className={styles.rating}><i>{rating} star</i></span></p>
        <p>{text}</p>
    </div>
}

export default Review;