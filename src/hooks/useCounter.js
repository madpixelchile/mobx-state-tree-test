


export const useCounter = (counter = 0) => {
    const handleIncrement = (num) => {
        counter.increment(num);
    };
    const handleDecrement = (num) => {
        counter.decrement(num);
    };
    const handleReset = () => {
        counter.reset();
    };
    
  return{
    handleIncrement,
    handleDecrement,
    handleReset
  }
}

