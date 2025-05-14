
import React from 'react';

interface PriceDisplayProps {
  currentPrice: number;
  originalPrice: number;
  discountPercentage: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ 
  currentPrice, 
  originalPrice, 
  discountPercentage 
}) => {
  const formatPrice = (price: number) => price.toLocaleString('ru-RU');

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-baseline">
        <span className="text-3xl font-bold">{formatPrice(currentPrice)} ₽</span>
        <span className="text-muted-foreground line-through ml-2">{formatPrice(originalPrice)} ₽</span>
      </div>
      <div className="bg-wb-orange text-white text-sm font-bold px-3 py-1 rounded-full">
        Скидка {discountPercentage}%
      </div>
    </div>
  );
};

export default PriceDisplay;
