import React from 'react';
import { cn } from "@/lib/utils"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon, MinusIcon, PlusIcon } from '@/components/icons';

const CateringCard = ({ guests, title, description, quantity = 0, image_url, isSelected, onClick, onQuantityChange }) => {
  return (
    <Card className={
      cn("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", isSelected && "border-primary")
    }
      onClick={() => { if (isSelected) {return} else onClick() }}
    >
      <CardContent className="p-6 flex flex-col items-left justify-between cursor-pointer h-full">
        <div className="flex flex-col items-left h-full">
          <img
            src={image_url}
            alt={title}
            loading="lazy"
            className="w-full aspect-ratio-1 rounded-md object-cover" />
          <h4 className="text-sm sm:text-md font-medium mt-4">{title}</h4>
          <p className="text-xs sm:text-sm mt-2">{description}</p>
        </div>
        {isSelected ? (
          <div className="mt-4 w-fit flex items-center justify-center rounded-full border-primary border-2 p-1 space-x-3">
            <div className="flex items-center justify-center bg-primary h-6 w-6 rounded-full m-1">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            {/* Quantity select controls. Minus circled icon control, quantity, plus circled icon control */}
            <div className="flex items-center justify-center space-x-2">
              <p className="text-primary font-medium">{quantity}</p>
              <Button 
                variant="outline" 
                className="!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg" 
                onClick={() => onQuantityChange(quantity - 1)}
                disabled={true} // {quantity <= 0}  
              >
                <MinusIcon className="h-5 w-5 text-primary group-hover:text-white" />
              </Button>
              <Button 
                variant="outline" 
                className="!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg" 
                onClick={() => onQuantityChange(quantity + 1)}
                disabled={true} // {quantity >= guests}
              >
                <PlusIcon className="h-6 w-6 text-primary group-hover:text-white" />
              </Button>
            </div>
          </div>
        ) : (
          <Button className="mt-2 w-fit">Add</Button>
        )}
      </CardContent>
    </Card>
  );
};

export default CateringCard;
