import { useState } from "react";
import Button from "../../ui/button/Button";
import styles from "./Review.module.scss";
import ReviewForm from "../reviewForm/ReviewForm";

const Review = ( {review, user} ) => {

    const {text, rating} = review ?? {};
    const [isEditMode, setIsEditMode] = useState(false);

    if (!review)
        return null;

    return <div>
        <p><strong>{user?.name}</strong> / <span className={styles.rating}><i>{rating} star</i></span></p>
        <p>{text}</p>
        <Button onClick={ () => setIsEditMode( (mode) => !mode) }>Изменить</Button>
        { isEditMode && <ReviewForm review={review} isEditMode={isEditMode}/>
 }
    </div>
}

export default Review;