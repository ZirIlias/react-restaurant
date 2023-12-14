import Ul from "../../ui/ul/Ul";
import ReviewContainer from "../review/container";

const Reviews = ( {reviews} ) => {
    
    return <div>
        <h3 className={"title-h3"}>Отзывы</h3>
        <Ul>
            {reviews.map( (review) => (
                <li key={review.id}>
                    <ReviewContainer review={review}/>
                </li>
            ))}
        </Ul>
    </div>
}

export default Reviews;