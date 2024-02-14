const increment = () => {
    store.dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
  };

export {increment, decrement};