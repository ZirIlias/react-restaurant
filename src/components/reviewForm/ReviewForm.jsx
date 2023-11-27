import { useReducer } from "react";
import Counter from "../../ui/counter/Counter";

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
        default: 
            return state;
    }
}

const ReviewForm = ()=> {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    return <div>
        <h3>Оставить отзыв</h3>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                <label htmlFor="name">Имя</label>
                <br/>
                <input name="name" id="name" type="text" value={formValue.name} onChange={(e) => dispatch({type: "setName", payload: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="text">Текст</label>
                <br/>
                <textarea name="text" id="text" value={formValue.text} onChange={(e) => dispatch({type: "setText", payload: e.target.value})}/>
            </div>
            <div>
                <label htmlFor="name">Рейтинг </label>
                <br/>
                <Counter value={formValue.rating} onChange={(count) => dispatch({type:"setRating", payload: count})} step={0.5} minValue={1}/>
            </div>
        </form>
    </div>
}

export default ReviewForm;