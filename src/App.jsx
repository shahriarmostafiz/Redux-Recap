import React from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counters/CounterSlice';
import { decrementby2, incrementby2 } from './features/counters2/newSlice';
import Posts from './components/Posts';

const App = () => {
  const counters = useSelector((state) => state.counters2) // ekhane amra store er sob gulo state theke amader jei state ta necessary ta nibo 
  const dispatch = useDispatch()
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0)

  const handleIncrement = (counterId) => {
    dispatch(incrementby2(counterId))
  }
  const handleDecrement = (counterId) => {
    dispatch(decrementby2(counterId))

  }
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700" >
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">

        {counters.map((counter) => (
          <Counter
            count={counter.value}
            key={counter.id}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        ))}
        <Stats totalCount={totalCount} />
        <Posts />
      </div>
    </div>
  );
};

export default App;