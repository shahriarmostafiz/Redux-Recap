import React from 'react';
import Button from './Button';

const Counter = () => {
    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <h5 >Count Value  </h5>
            <div className="flex space-x-3">

                <Button >Increment </Button>
                <Button type={"danger"} >Decrement  </Button>
            </div>

        </div>
    );
};

export default Counter;