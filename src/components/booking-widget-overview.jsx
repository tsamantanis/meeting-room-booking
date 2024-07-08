
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { UsersIcon, CheckIcon, CalendarDaysIcon, ClockIcon, ArrowUpCircleIcon, ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from '@/hooks/use-media-query';

const Overview = ({ 
  date, 
  guests, 
  time, 
  venue, 
  tableSetup, 
  currentStep, 
  setCurrentStep, 
  isStep1Valid,
  isStep3Valid,
  facilitiesSelected, 
  cateringSelected, 
  selectedEventPackages,
  totalExclVat
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isWindowWidthMd = useMediaQuery("(min-width: 1024px)")

  const aggregatedPackages = selectedEventPackages.reduce((acc, pkg) => {
    const key = pkg.duration;
    if (!acc[key]) {
      acc[key] = { ...pkg, quantity: 0, totalPrice: 0 };
    }
    acc[key].quantity += 1;
    acc[key].totalPrice += pkg.price;
    return acc;
  }, {});

  // Convert aggregated packages object to an array for rendering
  const aggregatedPackagesArray = Object.entries(aggregatedPackages).map(([duration, pkg]) => pkg);

  const OverviewData = () => (
    <div className=" mt-4 space-y-6">
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
      {/* {currentStep > 1 && ((isMultiDay && multiDayPackages.every(pkg => pkg))) && venue && guests > 0 && <hr />} */}
      {currentStep > 1 && ((selectedEventPackages.every(pkg => pkg))) && venue && guests > 0 && (
        <div className="mt-4 space-y-2">
        <h4 className="text-sm font-bold">Selected Services</h4>

      {
        aggregatedPackagesArray.map((pkg, index) => (
          <div key={index} className="flex items-center justify-between space-x-2">
            <span className="text-sm">
              {`${pkg.duration} hour meeting x ${pkg.quantity}`}
            </span>
            <span className="text-sm">
              {pkg.totalPrice}€
            </span>
          </div>
        ))
      }

        {facilitiesSelected.map((facility, index) => (
          <div key={index} className="flex items-center justify-between space-x-2">
            <span className="text-sm">
              {`${facility.title}`}<span className="text-muted-foreground">{selectedEventPackages.length > 1 ? ` per day` : ''}</span>
            </span>
            <span className="text-sm">
              {`${facility.price}€`}
            </span>
          </div>
        ))}
        {cateringSelected.map((item, index) => (
          <div key={index} className="flex items-center justify-between space-x-2">
            <span className="text-sm">
              {`${item.name} x ${item.quantity}`}<span className="text-muted-foreground">{selectedEventPackages.length > 1 ? ` per day` : ''}</span>
            </span>
            <span className="text-sm">
              {`${item.price * item.quantity}€`}
            </span>
          </div>  
        ))}
      {currentStep > 1 && venue && guests > 0 && <hr />}
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
  )

  if (isWindowWidthMd) {
    return (
      <div className="w-1/4 p-8 bg-gray-50 overflow-visible mt-0 rounded-md">
        <div className="flex flex-col sticky top-10 space-x-2">
          <h3 className="text-lg font-bold">Overview</h3>
          <OverviewData />
        </div>
      </div>
    );
  } else {
    return (
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        {/* <DrawerTrigger > */}
          <div className="h-fit inset-x-0 z-[40] m-0 flex items-center h-auto flex-col rounded-t-[10px] border bg-background">
            {/* <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" /> */}
            <div className="w-full flex flex-row items-center justify-between p-2">
              {/* circle icon arrow up */}
              <div className="flex items-center space-x-2 bg-gray-50 rounded-full p-1 px-2 text-primary" onClick={() => setIsDrawerOpen(true)}>
                  <span className="text-sm text-muted-foreground font-medium">Overview</span>
                <div className="flex items-center justify-center bg-gray-100 h-8 w-8 rounded-full m-1">
                  <ArrowUpCircleIcon className="h-8 w-8 text-primary" />
                </div>
              </div>
              {/* button next step */}
              { currentStep === 1 && <Button className="ml-auto" disabled={!isStep1Valid()} onClick={() => setCurrentStep(2)}>Add Event Options</Button>} 
              { currentStep === 2 && (
                <div className="relative space-x-4 flex justify-center items-center">
                  <Button variant="outline" onClick={() => setCurrentStep(1)}>
                    <ArrowLeftIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                  </Button> 
                 <Button className="ml-auto" onClick={() => setCurrentStep(3)}>Next</Button>
                </div>
              )}
              { currentStep === 3 && (
                <div className='flex space-x-4 items-center'>
                  <Button variant="outline" onClick={() => setCurrentStep(2)}>
                    <ArrowLeftIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button disabled={!isStep3Valid()}>
                    Request Proposal <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        {/* </DrawerTrigger> */}
        <DrawerContent className="block lg:hidden">
          <div className="h-[95%] p-4 lg:p-0 w-full flex flex-col fixed">
            <DrawerHeader>
              <DrawerTitle>Event Overview</DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col items-between justify-start h-full overflow-y-auto">
              <OverviewData />

              { currentStep === 1 &&  <Button className="w-full mt-auto" disabled={!isStep1Valid()} onClick={() => {
                setCurrentStep(2)
                setIsDrawerOpen(false)
              }}>Add Event Options</Button> }
              { currentStep === 2 && (
                <div className="relative mt-12 space-x-4 flex justify-center items-center">
                  <Button variant="outline" onClick={() => {
                    setCurrentStep(1)
                    setIsDrawerOpen(false)
                  }}>
                    <ArrowLeftIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                  </Button> 
                 <Button className="ml-auto w-full" onClick={() => {
                    setCurrentStep(3)
                    setIsDrawerOpen(false)
                  }}>Next</Button>
                </div>
              )}
              { currentStep === 3 && (
                <div className='relative mt-12 space-x-4 flex justify-center items-cente'>
                  <Button variant="outline" onClick={() => {
                    setCurrentStep(2)
                    setIsDrawerOpen(false)
                  }}>
                    <ArrowLeftIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                  </Button>
                  <Button className="w-full" disabled={!isStep3Valid()}>
                    Request Proposal <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    )
  }
}

export default Overview;
