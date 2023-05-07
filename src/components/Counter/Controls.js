import React from 'react';
const Controls = ({ onIcrement, onDecrement }) => (
         <div className="Counter__controls">
                        <button type="button" onClick={onIcrement}>Увеличить на 1</button>
                        <button type="button" onClick={onDecrement}>Уменьшить на 1</button>
                </div>
)
export default Controls;