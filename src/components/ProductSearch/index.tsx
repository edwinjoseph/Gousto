import * as React from 'react';
import './styles.css';

function ProductSearch(props: any) {
  return (
    <div className="category-search">
      Filter
      <input
        type="text"
        value={props.value}
        onChange={props.handleUpdate}
      />
    </div>
  );
}

export default ProductSearch;
