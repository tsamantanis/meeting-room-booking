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
      <CardContent className="p-6 cursor-pointer">
        <img
          src={image_url}
          alt={title}
          loading="lazy"
          className="w-full h-40 rounded-md object-cover" />
        <h4 className="text-sm sm:text-mdfont-medium mt-4">{title}</h4>
        <p className="text-xs sm:text-sm mt-2">{description}</p>
        {isSelected ? (
          <div className="md:absolute mt-2 md:ml-0 md:mb-0 md:bottom-2 md:left-2 max-w-10 flex items-center justify-center rounded bg-primary">
            <div className="flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        ) : (
          <Button variant="outline" className="text-xs sm:text-md mt-2">Add</Button>
        )}      </CardContent>
    </Card>
  );
};

export default FacilityCard;
