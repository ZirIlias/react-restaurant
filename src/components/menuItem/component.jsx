import { useState } from "react";
import Counter from "../../ui/counter/Counter";
import Dish from "../dish/component";
import styles from "./MenuItem.module.scss";

const MenuItem = ( {dish} ) => {

    const [count, setCount] = useState(0);
    return <div className={styles.menuItem}>
        <Dish dish={dish} className={styles.dish}/>
        <Counter value={count} onChange={setCount} />
    </div>
}

export default MenuItem;