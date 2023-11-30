import Ul from "../../ui/ul/Ul";
import Review from "../review/Review";

const Reviews = ( {reviews} ) => {
    return <div>
        <h3 className={"title-h3"}>Отзывы</h3>
        <Ul>
            {reviews.map( (review) => (
                <li key={review.id}>
                    <Review review={review}/>
                </li>
            ))}
        </Ul>
    </div>
}

export default Reviews;