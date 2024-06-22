import React from 'react';
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

const Step1 = ({ guests, setGuests, date, setDate, time, setTime, duration, setDuration, isMultiDay, setMultiDay, tableSetup, setTableSetup, venue, setVenue, eventPackages, venues }) => {
  return (
    <>
      <div className="space-y-4 mt-8 grid grid-rows-2 justify-center">
        <div className="grid grid-cols-2 space-x-4">
          <div className="max-w-[330px] w-full">
            <Label htmlFor="guests">Number of guests</Label>
            <div className="relative mt-2">
              <Input className="pr-8" type="number" id="guests" placeholder="12" max="22" value={guests} onChange={(e) => setGuests(e.target.value)} />
              <UserIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="max-w-[330px] w-full">
            <Label htmlFor="date">When is it happening</Label>
            <div className="relative mt-2">
              <DatePicker date={date} setDate={setDate} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 space-x-4 items-end">
          <div className="flex-1 max-w-[330px]">
            <Label htmlFor="time">Time of arrival</Label>
            <div className="relative mt-2">
              <Input type="time" id="time" placeholder="09:00 am" value={time} onChange={(e) => setTime(e.target.value)} />
              <ClockIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="multi-day" checked={isMultiDay} onClick={(e) => setMultiDay(e.target.checked)} />
            <Label htmlFor="multi-day">Multi day event</Label>
          </div>
        </div>
      </div>
      <div className="mt-12 space-y-8 flex flex-col items-center">
        <h3 className="text-center text-lg font-bold">
          Event Duration <span className="text-sm text-red-400">(required)</span>
        </h3>
        <div className="flex space-x-4 mt-8">
          {eventPackages.map(pkg => (
            <CardOption
              key={pkg.id}
              title={`${pkg.duration_hours} Hours`}
              description={pkg.description}
              onClick={() => setDuration(pkg.duration_hours)}
              duration={duration}
              value={pkg.duration_hours}
            />
          ))}
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
        <div className="grid grid-cols-2 gap-4 mt-4">
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
