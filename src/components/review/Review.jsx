import {  useDispatch, useSelector } from "react-redux";
import styles from "./Review.module.scss";
import { selectReviewById } from "../../store/entities/review/selectors";
import { getUsers } from "../../store/entities/user/thunks/get-users";
import { useEffect } from "react";
import { selectUserById } from "../../store/entities/user/selectors";

const Review = ( {id} ) => {
    const review = useSelector( state => selectReviewById(state, id));


    const {userId, text, rating} = review ?? {};

    const dispatch = useDispatch();
    useEffect( () => {
        dispatch( getUsers() );
    }, [dispatch]);
    const user = useSelector( state => selectUserById(state, userId));
    
    if (!review)
        return null;

    return <div>
        <p><strong>{user.name}</strong> / <span className={styles.rating}><i>{rating} star</i></span></p>
        <p>{text}</p>
    </div>
}

export default Review;