import React from 'react';
import { cn } from "@/lib/utils"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckIcon } from '@/components/icons';

const FacilityCard = ({ title, description, image_url, isSelected, onClick }) => {
  return (
    <Card className={
      cn("relative bg-gray-50 border-2 shadow-sm border-transparent hover:border-primary cursor-pointer", isSelected && "border-primary")
    }
      onClick={onClick}
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
        <Button className="mt-4 w-fit outline-none" onClick={onClick}>
          <span className={isSelected && 'hidden'}>Choose</span>            
          <div className={
            `${!isSelected && 'hidden'} animate-fade-in flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1`
            }>
            <CheckIcon className="h-4 w-4 text-white " />
          </div>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FacilityCard;
