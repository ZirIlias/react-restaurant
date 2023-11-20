const Review = ( { review: {user, rating, text} } ) => {
    return <div>
        <p><strong>{ user }</strong> / <i>{rating} star</i></p>
        <p>{text}</p>
    </div>
}

export default Review;