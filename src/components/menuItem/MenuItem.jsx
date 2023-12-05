import { useState } from "react";
import Counter from "../../ui/counter/Counter";
import Dish from "../dish/Dish";
import styles from "./MenuItem.module.scss";

const MenuItem = ( {id} ) => {

    const [count, setCount] = useState(0);
    return <div className={styles.menuItem}>
        <Dish id={id} className={styles.dish}/>
        <Counter value={count} onChange={setCount} />
    </div>
}

export default MenuItem;