import { useSelector } from "react-redux";
import styles from "./Review.module.scss";
import { selectReviewById } from "../../store/features/entities/review/selectors";
import { selectUserById } from "../../store/features/entities/user/selectors";

const Review = ( {id} ) => {
    const review = useSelector( state => selectReviewById(state, id));

    const {userId, text, rating} = review ?? {};

    const user = useSelector( state => selectUserById(state, userId));
    
    return <div>
        <p><strong>{ user.name }</strong> / <span className={styles.rating}><i>{rating} star</i></span></p>
        <p>{text}</p>
    </div>
}

export default Review;