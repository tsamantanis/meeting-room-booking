import React, { useState, useEffect } from 'react';
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { CardOption } from "@/components/ui/card-option"
import { LayoutCardOption } from "@/components/ui/layout-card-option"
import { DatePicker } from "@/components/ui/date-picker";
import {
  UserIcon,
  UsersIcon,
  RulerIcon,
  CalendarDaysIcon,
  ClockIcon,
  BoardroomGlyph,
  UShapeGlyph,
  ClassroomGlyph,
  CircleGlyph,
  TheatreGlyph,
} from "@/components/icons";
import { mockVenuePackages, EXTRA_HOUR_RATE, MAX_TOTAL_HOURS } from "@/data";

const LAYOUTS = [
  { value: "Boardroom", label: "Boardroom", Glyph: BoardroomGlyph },
  { value: "U-shape", label: "U-shape", Glyph: UShapeGlyph },
  { value: "Classroom", label: "Classroom", Glyph: ClassroomGlyph },
  { value: "Circle", label: "Circle", Glyph: CircleGlyph },
  { value: "Theatre", label: "Theatre", Glyph: TheatreGlyph },
];

const Step1 = ({
  language,
  guests,
  setGuests,
  guestsError,
  setGuestsError,
  date,
  setDate,
  dateError,
  endDate,
  setEndDate,
  endDateError,
  time,
  setTime,
  timeError,
  endTime,
  setEndTime,
  isMultiDay,
  setMultiDay,
  tableSetup,
  setTableSetup,
  venue,
  setVenue,
  venueError,
  eventPackages,
  eventPackagesError,
  selectedEventPackages,
  setSelectedEventPackages,
  extraHours = 0,
  setExtraHours = () => {},
  venues
}) => {

  const handleSelectEventPackage = (index, id) => {
    const newPackages = [...selectedEventPackages];
    newPackages[index] = id;
    setSelectedEventPackages(newPackages);
  }

  // Price of a package for the currently selected venue.
  const getPackagePrice = (packageId) =>
    mockVenuePackages.find(vp => vp.venue_id === venue && vp.package_id === packageId)?.price;

  // Card title is the package label; subtitle shows the duration (and price for
  // the increment-rate / Weekend-Evening package).
  const packageTitle = (pkg) => pkg.short_description?.[language] || `${pkg.duration_hours} hours`;
  const packageSubtitle = (pkg) => {
    const price = getPackagePrice(pkg.id);
    if (pkg.is_increment_rate && price) {
      return `${pkg.duration_hours} hrs @ €${price}`;
    }
    return `${pkg.duration_hours} hour${pkg.duration_hours === 1 ? '' : 's'}`;
  };

  // Extra-hours cap: keep duration + extra hours within MAX_TOTAL_HOURS for every selected day.
  const selectedDurations = selectedEventPackages
    .map(id => eventPackages.find(pkg => pkg.id === id)?.duration_hours)
    .filter((hours) => typeof hours === 'number');
  const maxSelectedDuration = selectedDurations.length ? Math.max(...selectedDurations) : 0;
  const maxExtraHours = Math.max(0, MAX_TOTAL_HOURS - maxSelectedDuration);
  const hasDurationSelected = selectedEventPackages.some(Boolean);

  // Clamp extra hours to the available headroom; reset to 0 when no duration is selected.
  useEffect(() => {
    const cap = hasDurationSelected ? maxExtraHours : 0;
    if (extraHours > cap) {
      setExtraHours(cap);
    }
  }, [hasDurationSelected, maxExtraHours, extraHours, setExtraHours]);

  return (
    <>
      <h2 className="text-xl font-bold text-center mt-8">Give us the basic details</h2>
      <div className="space-y-4 mt-8 grid grid-rows-2 justify-center lg:max-w-[680px] mx-auto">
        <div className="grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 ">
          <div className="lg:max-w-[330px] w-full">
            <Label htmlFor="guests">Number of guests</Label>
            <div className="relative mt-2">
              <Input
                className={`pr-8 ${guestsError && "border-red-500"}`}
                type="number"
                id="guests"
                placeholder="12"
                max="20"
                value={guests}
                onChange={(e) => {setGuests(e.target.value); setGuestsError(null)}}
              />
              <UserIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            { guestsError && <p className="text-red-500 text-sm mt-1">{guestsError}</p> }
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
            { dateError && <p className="text-red-500 text-sm mt-1">{dateError}</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-4 items-end">
          <div className="flex-1 lg:max-w-[330px]">
            <Label htmlFor="time">Time of arrival</Label>
            <div className="relative mt-2">
              <Input type="time" id="time" placeholder="09:00 am" value={time} step="1800"
                className={`w-full ${timeError && "border-red-500"}`}
                onChange={(e) => {
                  setTime(e.target.value);
                  let new_end_time = new Date().setHours(parseInt(e.target.value.split(":")[0]) + 8)
                  new_end_time = new Date(new_end_time).setMinutes(e.target.value.split(":")[1])
                  setEndTime(new Date(new_end_time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
                }} />
              <ClockIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            { timeError && <p className="text-red-500 text-sm mt-1">{timeError}</p> }
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="multi-day" checked={isMultiDay} onClick={(e) => {
              setMultiDay(!isMultiDay);
              if (date && !isMultiDay) {
                setEndDate(new Date(new Date(date).getTime() + 24 * 60 * 60 * 1000));
                if (time) {
                  const endTimeDate = new Date(date);
                  endTimeDate.setHours(endTimeDate.getHours() + 8);
                  setEndTime(endTimeDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
                }
              } else {
                setEndDate(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000))
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
                    // disable days before the start date
                    disabled={(d) => new Date(d) < new Date(date)}
                    label={"Pick an end date"}
                  />
                </div>
                { endDateError && <p className="text-red-500 text-sm mt-1">{endDateError}</p> }
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
      <div className="pt-8 space-y-8 flex flex-col items-center">
        <h3 className="text-center text-lg font-bold">
          {`Select Duration${isMultiDay ? "s for each day" : ""}`}
        </h3>
        { isMultiDay && date && endDate ? Array.from({ length: (new Date(endDate).getDate() - new Date(date).getDate() + 1) }, (date, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div>Day {index + 1}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 mt-4">
              {eventPackages.map(pkg => (
                <CardOption
                  key={pkg.id}
                  title={packageTitle(pkg)}
                  subtitle={packageSubtitle(pkg)}
                  description={pkg.description[language]}
                  onClick={() => handleSelectEventPackage(index, pkg.id)}
                  id={pkg.id}
                  isSelected={selectedEventPackages[index] === pkg.id}
                  noneSelected={!selectedEventPackages[index]}
                  value={pkg.id}
                  extraHours={extraHours}
                  onExtraHoursChange={setExtraHours}
                  maxExtraHours={maxExtraHours}
                  extraHourRate={EXTRA_HOUR_RATE}
                />
              ))}
            </div>
          </div>
        )) : (
          <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 md:space-y-0 md:space-x-4 mt-4">
            {eventPackages.map(pkg => (
              <CardOption
                key={pkg.id}
                title={packageTitle(pkg)}
                subtitle={packageSubtitle(pkg)}
                description={pkg.description[language]}
                onClick={() => handleSelectEventPackage(0, pkg.id)}
                id={pkg.id}
                isSelected={selectedEventPackages.length > 0 && selectedEventPackages[0] === pkg.id}
                noneSelected={selectedEventPackages.length === 0}
                value={pkg.id}
                extraHours={extraHours}
                onExtraHoursChange={setExtraHours}
                maxExtraHours={maxExtraHours}
                extraHourRate={EXTRA_HOUR_RATE}
              />
            ))}
          </div>
        )}
      { eventPackagesError && <p className="text-red-500 text-sm mt-1">{eventPackagesError}</p> }
      </div>
      </div>
      <div className="mt-12 space-y-6 flex flex-col items-center lg:max-w-[680px] mx-auto">
        <h3 className="text-lg font-bold text-center">
          What layout do you require?
        </h3>
        {venues.map(v => (
          <div key={v.id} className="flex items-center gap-3 w-full rounded-lg bg-gray-50 border p-3">
            <img
              src={v.images[0]}
              alt={v.name[language]}
              loading="lazy"
              className="h-14 w-20 rounded-md object-cover shrink-0"
            />
            <div className="min-w-0">
              <p className="font-bold leading-tight">{v.name[language]}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mt-0.5">
                <span className="flex items-center gap-1">
                  <UsersIcon className="h-4 w-4" /> up to {v.capacity}
                </span>
                <span className="flex items-center gap-1">
                  <RulerIcon className="h-4 w-4" /> {v.area} m²
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
          {LAYOUTS.map(({ value, label, Glyph }) => (
            <LayoutCardOption
              key={value}
              label={label}
              Glyph={Glyph}
              isSelected={tableSetup === value}
              onClick={() => setTableSetup(value)}
            />
          ))}
        </div>
        { venueError && <p className="text-red-500 text-sm mt-1">{venueError}</p> }
      </div>
    </>
  );
}

export default Step1;
