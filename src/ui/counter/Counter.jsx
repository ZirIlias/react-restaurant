import Button from "../button/Button";

const Counter = ( {onChange, value = 0, minValue = 0, maxValue = 5, step = 1} ) => {
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
        <Button onClick={decrement}>-</Button>
        {value}
        <Button onClick={increment}>+</Button>
    </div>
}

export default Counter;