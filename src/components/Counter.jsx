import React from 'react';
import Button from './Button';

const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <h5 className="text-2xl font-semibold">{count}  </h5>
            <div className="flex space-x-3">

                <Button handler={onIncrement}>Add 2 </Button>
                <Button type={"danger"} handler={onDecrement} >Substract 2   </Button>
            </div>

        </div>
    );
};

export default Counter;