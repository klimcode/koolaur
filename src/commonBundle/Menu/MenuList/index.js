import React from 'react';
import './List.css';

export default (props) => {
  const items = Array.isArray(props.items)
    ? props.items
    : ['Lorem', 'Ipsum'];

  return (
    <div className="Menu__container">
      <ul className="Menu__list">
        { items.map((item, i) => (<li key={i}>{item}</li>)) }
      </ul>
    </div>
  );
};
