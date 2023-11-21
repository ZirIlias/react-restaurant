import { useState } from "react";
import Counter from "../../ui/counter/Counter";
import Dish from "../dish/Dish";

const MenuItem = ( {dish} ) => {

    const [count, setCount] = useState(0);
    return <>
        <Counter value={count} onChange={setCount} />
        <br/>
        <Dish dish={dish}/>
    </>
}

export default MenuItem;