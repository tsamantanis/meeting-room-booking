import React from 'react';
import { format } from 'date-fns';
import { UsersIcon, CheckIcon, CalendarDaysIcon, ClockIcon } from "@/components/icons";

const Overview = ({ date, guests, time, venue, tableSetup }) => {
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
      </div>
    </div>
  );
}

export default Overview;
