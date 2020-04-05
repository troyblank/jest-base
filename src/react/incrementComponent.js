import React, { useState } from 'react';

export default function incrementComponent() {
    const [count, setCount] = useState(0);

    return (
      <div className={'incrementor'}>
        <button
          className={'incrementor__button'}
          onClick={() => { setCount(count + 1); }}
        >
          Increment
        </button>
        <span className={'incrementor__count'}>The count is currently: {count}</span>
      </div>
    );
}
