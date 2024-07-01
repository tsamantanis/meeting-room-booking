import React, { useState } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { CardOption } from "@/components/ui/card-option"
import { VenueCardOption } from "@/components/ui/venue-card-option"
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { UserIcon, CalendarDaysIcon, ClockIcon } from "@/components/icons";

const Step1 = ({ 
  guests, 
  setGuests, 
  date, 
  setDate, 
  endDate, 
  setEndDate, 
  time, 
  setTime, 
  endTime, 
  setEndTime, 
  isMultiDay, 
  setMultiDay, 
  tableSetup, 
  setTableSetup, 
  venue,
  setVenue, 
  eventPackages,
  selectedEventPackages,
  setSelectedEventPackages,
  venues 
}) => {

  const handleSelectEventPackage = (index, id) => {
    const newPackages = [...selectedEventPackages];
    newPackages[index] = id;
    setSelectedEventPackages(newPackages);
  }
  console.log(selectedEventPackages)
  return (
    <>
      <div className="space-y-4 mt-8 grid grid-rows-2 justify-center lg:max-w-[680px] mx-auto">
        <div className="grid md:grid-cols-2 space-y-8 md:space-y-0 md:space-x-4 ">
          <div className="lg:max-w-[330px] w-full">
            <Label htmlFor="guests">Number of guests</Label>
            <div className="relative mt-2">
              <Input className="pr-8" type="number" id="guests" placeholder="12" max="22" value={guests} onChange={(e) => setGuests(e.target.value)} />
              <UserIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="lg:max-w-[330px] w-full">
            <Label htmlFor="date">When is it happening</Label>
            <div className="relative mt-2">
              <DatePicker 
                date={date} 
                setDate={
                  (date) => {
                    setDate(date);
                    setEndDate(new Date(date).setDate(new Date(date).getDate() + 1));
                  }
                } />
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 items-end">
          <div className="flex-1 lg:max-w-[330px]">
            <Label htmlFor="time">Time of arrival</Label>
            <div className="relative mt-2">
              <Input type="time" id="time" placeholder="09:00 am" value={time} 
                className="w-full"
                onChange={(e) => {
                  setTime(e.target.value);
                  let new_end_time = new Date().setHours(parseInt(e.target.value.split(":")[0]) + 8)
                  new_end_time = new Date(new_end_time).setMinutes(e.target.value.split(":")[1])
                  setEndTime(new Date(new_end_time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
                }} />
              <ClockIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="multi-day" checked={isMultiDay} onClick={(e) => {
              setMultiDay(!isMultiDay); 
              if (date && !isMultiDay) {
                setEndDate(new Date().setDate(new Date(date).getDate() + 1)); 
                if (time) {
                  setEndTime(new Date(date).setHours(new Date(date).getHours() + 8)).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
                }
              } else {
                setEndDate(new Date().setDate(new Date().getDate() + 2))
                setEndTime("17:00");
              }
              }} />
            <Label htmlFor="multi-day">Multi day event</Label>
          </div>
        </div>
        { isMultiDay && (
          <>
            <div className="grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4">
              <div className="lg:max-w-[330px] w-full">
                <Label htmlFor="end-date">End date</Label>
                <div className="relative mt-2">
                  <DatePicker 
                    date={endDate} 
                    setDate={setEndDate} 
                  />
                </div>
              </div>
              <div className="lg:max-w-[330px] w-full">
                <Label htmlFor="end-time">Time of Departure</Label>
                <div className="relative mt-2">
                  <Input type="time" id="end-time" min={time ? time +":00" : "10:00:00"} placeholder="17:00" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
                  <ClockIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
            </div>
          </>
        )}
      <div className="mt-12 space-y-8 flex flex-col items-center">
        <h3 className="text-center text-lg font-bold">
          {`Select Packages${isMultiDay ? " for each day" : ""}`}
        </h3>
        { isMultiDay && date && endDate ? Array.from({ length: (new Date(endDate).getDate() - new Date(date).getDate() + 1) }, (date, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div>Day {index + 1}</div>
            <div className="flex space-x-4 mt-4">
              {eventPackages.map(pkg => (
                <CardOption
                  key={pkg.id}
                  title={`${pkg.duration_hours} Hours`}
                  description={pkg.description}
                  onClick={() => handleSelectEventPackage(index, pkg.id)}
                  id={pkg.id}
                  isSelected={selectedEventPackages[index] === pkg.id}
                  noneSelected={!selectedEventPackages[index]}
                  value={pkg.id}
                />
              ))}
            </div>
          </div>
        )) : (
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 mt-4">
            {eventPackages.map(pkg => (
              <CardOption
                key={pkg.id}
                title={`${pkg.duration_hours} Hours`}
                description={pkg.description}
                onClick={() => handleSelectEventPackage(0, pkg.id)}
                id={pkg.id}
                isSelected={selectedEventPackages.length > 0 && selectedEventPackages[0] === pkg.id}
                noneSelected={selectedEventPackages.length === 0}
                value={pkg.id}
              />
            ))}
          </div>
        )}
      </div>
      </div>
      <div className="mt-12 space-y-8 flex flex-col items-center">
        <h3 className="text-lg font-bold text-center">
          Venue Preference <span className="text-muted-foreground">(optional)</span>
        </h3>
        <div className="flex items-center space-x-2 mt-4">
          <Select onValueChange={(value) => setTableSetup(value)} defaultValue="Boardroom">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Boardroom Setup" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Boardroom">Boardroom</SelectItem>
              <SelectItem value="U-Shape">U-Shape</SelectItem>
              <SelectItem value="Classroom">Classroom</SelectItem>
              <SelectItem value="Intimate">Intimate - no tables</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {venues.map(v => (
            <VenueCardOption
              key={v.id}
              venue_name={v.name}
              venue_description={v.description}
              image_url={v.images[0]}
              capacity={v.capacity}
              area={v.area}
              isSelected={v.id === venue}
              onClick={() => setVenue(v.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Step1;
