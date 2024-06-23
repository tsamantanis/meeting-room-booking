import React from 'react';
import { format } from 'date-fns';
import { UsersIcon, CheckIcon, CalendarDaysIcon, ClockIcon } from "@/components/icons";

const Overview = ({ date, guests, time, venue, tableSetup, currentStep, duration, event_package_price, facilitiesSelected, cateringSelected, totalExclVat }) => {
  return (
    <div className="flex flex-col sticky top-10 space-x-2">
      <h3 className="text-lg font-bold">Overview</h3>
      <div className="mt-4 space-y-6">
        <div className="flex items-center space-x-2">
          <CalendarDaysIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm">
            {date ? format(date, "PPP") : "Pick a date"}
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <UsersIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm">{guests} { guests > 0 ? "people" : "Select Number Guests"}</p>
        </div>
        <div className="flex items-center space-x-2">
          <ClockIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm">
            {time ? "Arrival at " + time : "Select Time"}
          </p>
        </div>
        <hr />
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-bold">Venue Preference</h4>
          <p className="text-sm">
            {venue ? venue + ' - ' + tableSetup : "Select a venue"}
          </p>
        </div>
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-bold">Always included</h4>
          <div className="flex items-center space-x-2">
            <CheckIcon className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm">Conference system</p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckIcon className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm">Presentation screen</p>
          </div>
          <div className="flex items-center space-x-2">
            <CheckIcon className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm">Post it's & markers</p>
          </div>
        </div>
        {currentStep > 1 && duration && venue && guests > 0 && <hr />}
        {currentStep > 1 && duration && venue && guests > 0 && (
          <div className="mt-4 space-y-2">
          <h4 className="text-sm font-bold">Selected Services</h4>
          <div className="flex items-center justify-between space-x-2">
            <span className="text-sm">
              {`${duration} hour meeting`}
            </span>
            <span className="text-sm">
              {event_package_price}€
            </span>
          </div>

          {facilitiesSelected.map((facility, index) => (
            <div key={index} className="flex items-center justify-between space-x-2">
              <span className="text-sm">
                {`${facility.title}`}
              </span>
              <span className="text-sm">
                {`${facility.price}€`}
              </span>
            </div>
          ))}
          {cateringSelected.map((item, index) => (
            <div key={index} className="flex items-center justify-between space-x-2">
              <span className="text-sm">
                {`${item.name} x ${item.quantity}`}
              </span>
              <span className="text-sm">
                {`${item.price * item.quantity}€`}
              </span>
            </div>  
          ))}
         {currentStep > 1 && duration && venue && guests > 0 && <hr />}
          <div className="flex items-center justify-between space-x-2">
            <span className="text-md font-medium">
              Total excl. VAT 
            </span>
            <span className="text-md font-medium">
              {`${totalExclVat}€`}
            </span>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <span className="text-xs text-muted-foreground">
              Per person
            </span>
            <span className="text-sm text-muted-foreground">
              {`${parseFloat(totalExclVat / guests).toFixed(2)}€`}
            </span>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Overview;
