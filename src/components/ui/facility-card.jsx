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
          alt="Blossom Private Space"
          loading="lazy"
          className="w-full h-40 rounded-md object-cover" />
        <h4 className="font-medium mt-4">{title}</h4>
        <p className="text-sm mt-2">{description}</p>
        {isSelected ? (
          <div className="absolute bottom-2 left-2 flex items-center justify-center rounded bg-primary">
            <div className="flex items-center justify-center border-2 border-white h-6 w-6 rounded-full m-1">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        ) : (
          <Button variant="outline" className="mt-2">Add</Button>
        )}      </CardContent>
    </Card>
  );
};

export default FacilityCard;
