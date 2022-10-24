import React from 'react';
import ClothingLine from './ClothingLine';

const ClothingLines = ({ clothingLines, products }) => {
  return (
    <>
      {clothingLines.clothinglines.map((item, index) => {
        return <ClothingLine key={index} line={item} products={products} />;
      })}
    </>
  );
};

export default ClothingLines;
