import classNames from "classnames";
import styles from "./Dish.module.scss";

const Dish = ( {dish, className} ) => {
    if (!dish)
        return;
    
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