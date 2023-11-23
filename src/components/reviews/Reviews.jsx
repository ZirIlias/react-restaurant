import Review from "../review/Review";

const Reviews = ( {reviews} ) => {
    return <>
        <h3>Отзывы</h3>
        <ul> 
            {reviews.map( (review) => (
                <li key={review.id}>
                    <Review review={review}/>
                </li>
            ))}
        </ul>
    </>
}

export default Reviews;