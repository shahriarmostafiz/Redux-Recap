import React from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

const App = () => {
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700" >
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple COunter Application </h1>
      <div className="max-w-md mx-auto mt-10 space-y-5">

        <Counter />
        <Counter />
        <Stats totalCount={10} />
      </div>
    </div>
  );
};

export default App;