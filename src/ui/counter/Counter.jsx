import Button from "../button/Button";
import styles from "./Counter.module.scss";

const Counter = ( {onChange, value = 0, minValue = 0, maxValue = 5, step = 1, labelText} ) => {
    function increment() {
        const res = (value < maxValue) ? value+step : 
        value;
        onChange(res);
    }
    function decrement() {
        const res = (value > minValue) ? value-step : 
        value;
        onChange(res);        
    }
    
    return <div>
        {labelText && 
		<label className={styles.label}>{labelText}</label>}
        <div className={styles.counter}>
            <Button onClick={decrement} color="blue" type="square" disabled={value === minValue}>-</Button>
            <span className={styles.value}>{value}</span>
            <Button onClick={increment} color="blue" type="square" disabled={value === maxValue}>+</Button>
        </div>
    </div>
}

export default Counter;