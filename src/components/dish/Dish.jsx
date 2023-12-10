import classNames from "classnames";
import styles from "./Dish.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../store/entities/dish/selectors";
import { useEffect } from "react";
import { getDishById } from "../../store/entities/dish/thunks/get-dish-by-id";

const Dish = ( {id, className} ) => {
    const dish = useSelector( state => selectDishById(state, id) );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( getDishById( id ) );
    },[id, dispatch]);

    if (!dish)
        return null;
    
    const {name, price, ingredients} = dish ?? {};
    return <div className={ classNames(className) }>
        <div className={styles.dishHeader}>
            <span className={"title-h3"}>{ name }</span> / <span className={styles.price}><i>{price} $</i></span>
        </div>
        <p className={styles.ingredientsHeader}><b>Ингредиенты:</b></p>
        <ul>
            {ingredients.map( (ingredient, index) => (
                <li key={index}>
                    {ingredient}
                </li>
            ))}
        </ul>
    </div>
}

export default Dish;