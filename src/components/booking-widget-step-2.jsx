import React, { useState } from 'react';
import FacilityCard from '@/components/ui/facility-card';
import CateringCard from '@/components/ui/catering-card';


const Step2 = ({ facilities, catering, guests, facilitiesSelected, setFacilitiesSelected, cateringSelected, setCateringSelected, comments, setComments }) => {
  const handleFacilityClick = (id) => {
    if (facilitiesSelected.includes(id)) {
      setFacilitiesSelected(facilitiesSelected.filter(facility => facility !== id));
    } else {
      setFacilitiesSelected([...facilitiesSelected, id]);
    }
  };

  const handleCateringClick = (id) => {
    const isAlreadySelected = cateringSelected.some(item => item.id === id);
    if (isAlreadySelected) {
      setCateringSelected(cateringSelected.filter(item => item.id !== id));
    } else {
      setCateringSelected([...cateringSelected, { id, quantity: 1 }]); // Default quantity is 1
    }
  };

  const handleQuantityChange = (id, quantity) => {

    if (quantity <= 0) {
      setCateringSelected(cateringSelected.filter(item => item.id !== id));
      return;
    }

    setCateringSelected(cateringSelected.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  return (
    <div className="flex flex-col space-y-8 mt-8">
      <h2 className="text-2xl font-bold text-center">Make your event complete</h2>
      <p className="text-center text-muted-foreground">Choose one of the default packages or create your custom event</p>

      <div>
        <h3 className="text-lg text-primary">Facilities</h3>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 mt-4">
          {facilities.map(facility => (
            <FacilityCard
              key={facility.id}
              title={facility.title}
              description={facility.description}
              image_url={facility.image}
              isSelected={facilitiesSelected.includes(facility.id)}
              onClick={() => handleFacilityClick(facility.id)}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg text-primary">Catering arrangements</h3>
        <p className="text-muted-foreground mt-2">Specific delivery times are be added later from your customer portal.</p>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 mt-4">
          {catering.map(cater => {
            const selectedCater = cateringSelected.find(item => item.id === cater.id);
            return (
              <CateringCard
                key={cater.id}
                guests={guests}
                title={cater.title}
                description={cater.description}
                image_url={cater.image}
                isSelected={!!selectedCater}
                quantity={selectedCater ? selectedCater.quantity : 0}
                onClick={() => handleCateringClick(cater.id)}
                onQuantityChange={(quantity) => handleQuantityChange(cater.id, quantity)}
              />
            );
          })}
        </div>
      </div>

      <div>
        <h3 className="text-lg text-primary">Special Requests / Comments</h3>
        <textarea
          className="w-full p-4 border rounded mt-2 bg-gray-50 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50"
          rows="4"
          placeholder="Let us know how we can help with your event."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Step2;
