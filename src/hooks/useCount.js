import { useCallback, useState } from "react";

export function useCount( {initialState = 0, minValue = 0, maxValue = 5, step = 1}) {
    const [amount, setAmount] = useState(initialState);
    
    const increment = useCallback( () => setAmount( (currentAmount) => currentAmount < maxValue ? currentAmount + step : currentAmount ), [step, maxValue] );

    const decrement = useCallback( () => setAmount( (currentAmount) => (currentAmount > minValue) ? currentAmount - step : currentAmount), [step, minValue]);

    return {
        amount, increment, decrement
    };
}