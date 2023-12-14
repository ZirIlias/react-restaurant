import { useGetUsersQuery } from "../../store/services/api";
import Review from "./component";

const ReviewContainer = ( {review} ) => {

    const { data: users} = useGetUsersQuery();

    if (!review)
        return null;

    return <Review user={users?.find( ( {id} ) => id == review.userId)} review={review}/>
}

export default ReviewContainer;