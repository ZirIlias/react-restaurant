import Button from "../button/Button";

const Counter = ( {onChange, value, minValue, maxValue } ) => {
    function increment() {
        const res = (value < maxValue) ? ++value : 
        value;
        onChange(res);
    }
    function decrement() {
        const res = (value > minValue) ? --value : 
        value;
        onChange(res);        
    }
    
    return <div>
        <Button onClick={decrement}>-</Button>
        {value}
        <Button onClick={increment}>+</Button>
    </div>
}
Counter.defaultProps = {minValue: 0, maxValue: 5, value: 0};

export default Counter;