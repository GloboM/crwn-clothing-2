import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collecttion.preview.styles.scss';

const ColectionPreview = ({ title, items }) => {
  return (
    <div className="collecttion-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((el, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default ColectionPreview;
