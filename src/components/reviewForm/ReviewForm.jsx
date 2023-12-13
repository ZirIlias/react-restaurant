import { useCallback, useReducer } from "react";
import Counter from "../../ui/counter/Counter";
import Input from "../../ui/input/Input";
import Textarea from "../../ui/textarea/Textarea";
import styles from "./ReviewForm.module.scss";
import { useCreateReviewMutation, useGetUsersQuery } from "../../services/api";
import Button from "../../ui/button/Button";

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 5,
}

const reducer = (state, action) => {
    switch(action.type) {
        case "setName":
            return {...state, name: action.payload};
        case "setText": 
            return {...state, text: action.payload};
        case "setRating":
            return {...state, rating: action.payload}
        case "setDefaultValues":
            return {...state, ...DEFAULT_FORM_VALUE}
        default: 
            return state;
    }
}

const ReviewForm = ( {restaurantId} )=> {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const { data: users} = useGetUsersQuery();    
    const [createReview] = useCreateReviewMutation();

    const setDefaultFormData = useCallback( () => {
        dispatch({ type: "setDefaultValues" });
      }, []
    );

    const handlecreateReview = useCallback( async () => {
        await createReview( { 
            restaurantId, 
            newReview: {...formValue, userId: users[0].id } 
        } );
        setDefaultFormData();
      }, [createReview, formValue, restaurantId, users, setDefaultFormData]
    );

    if (!restaurantId)
        return null;
    return <div>
        <h3 className="title-h3">Оставить отзыв</h3>
        <form onSubmit={(e)=>e.preventDefault()} className={styles.form}>
            <Input labelText="Имя" name="name" value={formValue.name} onChange={(e) => dispatch({type: "setName", payload: e.target.value})} />
            
            <Textarea labelText="Текст" name="text" value={formValue.text} onChange={(e) => dispatch({type: "setText", payload: e.target.value})} fixedSize/>
            
            <Counter labelText="Рейтинг" value={formValue.rating} onChange={(count) => dispatch({type:"setRating", payload: count})} step={0.5} minValue={1}/>

            <Button onClick={ handlecreateReview }>Сохранить</Button>
        </form>
    </div>
}

export default ReviewForm;