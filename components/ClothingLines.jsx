import React from 'react';
import ClothingLine from './ClothingLine';

const ClothingLines = ({ clothingLines, products }) => {
  // for (let i = 0; i > clothingLines.clothingline.length; ++i) {
  //   if (clothingLines.clothingline[i] === products[i].clothingline) {
  //   }
  // }
  return (
    <div>
      {clothingLines.clothinglines.slice(0, 10).map((item, index) => {
        return <ClothingLine key={index} line={item} products={products} />;
      })}
    </div>
  );
};

export default ClothingLines;
