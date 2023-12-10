import { useSelector } from "react-redux";
import Ul from "../../ui/ul/Ul";
import Review from "../review/Review";
import { selectRestaurantReviewIds } from "../../store/entities/restaurant/selectors";

const Reviews = ( {restaurantId} ) => {
    const reviewIds = useSelector( state => selectRestaurantReviewIds( state, restaurantId) );

    return <div>
        <h3 className={"title-h3"}>Отзывы</h3>
        <Ul>
            {reviewIds.map( (reviewId) => (
                <li key={reviewId}>
                    <Review id={reviewId}/>
                </li>
            ))}
        </Ul>
    </div>
}

export default Reviews;