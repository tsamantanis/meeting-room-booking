import React, { useState, useEffect } from 'react';
// import { createClient } from '@supabase/supabase-js';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowLeftIcon } from "@/components/icons";
import Overview from '@/components/booking-widget-overview';
import Step1 from '@/components/booking-widget-step-1';
import Step2 from '@/components/booking-widget-step-2';
import Step3 from '@/components/booking-widget-step-3';

// Initialize Supabase client
// const supabaseUrl = 'https://your-supabase-url.supabase.co';
// const supabaseKey = 'your-supabase-anon-key';
// const supabase = createClient(supabaseUrl, supabaseKey);


export function BookingWidget() {
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [isMultiDay, setMultiDay] = useState(false);
  const [tableSetup, setTableSetup] = useState('Boardroom');
  const [venue, setVenue] = useState('');
  const [facilitiesSelected, setFacilitiesSelected] = useState([]);
  const [cateringSelected, setCateringSelected] = useState([]);
  const [comments, setComments] = useState('');
  const [company, setCompany] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [venues, setVenues] = useState([]);
  const [eventPackages, setEventPackages] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // fetchVenues();
    // fetchEventPackages();
    setVenues(mockVenues);
    setEventPackages(mockEventPackages);
  }, []);

  // Mock Data
  const mockVenues = [
    {
      id: '1',
      name: 'Blossom Private Space',
      description: 'With a spacious garden can host teams up to...',
      images: ['/placeholder.svg'],
      capacity: 22,
      area: 70
    },
    {
      id: '2',
      name: 'Aurora Private Space',
      description: 'With a spacious garden can host teams up to...',
      images: ['/placeholder.svg'],
      capacity: 22,
      area: 70
    }
  ];

  const mockEventPackages = [
    {
      id: '1',
      duration_hours: 8,
      duration_minutes: 0,
      description: 'Includes Post-its, markers & Presentation screen.'
    },
    {
      id: '2',
      duration_hours: 4,
      duration_minutes: 0,
      description: 'Includes Post-its, markers & Presentation screen.'
    },
    {
      id: '3',
      duration_hours: 1,
      duration_minutes: 0,
      description: 'Includes Post-its, markers & Presentation screen.'
    }
  ];

  // const fetchVenues = async () => {
  //   let { data: venues, error } = await supabase
  //     .from('Venues')
  //     .select('*');
    
  //   if (error) console.error('Error fetching venues:', error);
  //   else setVenues(venues);
  // };

  // const fetchEventPackages = async () => {
  //   let { data: eventPackages, error } = await supabase
  //     .from('EventPackages')
  //     .select('*');
    
  //   if (error) console.error('Error fetching event packages:', error);
  //   else setEventPackages(eventPackages);
  // };

  const isStep1Valid = () => {
    return guests > 0 && date !== '' && time !== '' && duration !== '';
  };

  const isStep3Valid = () => {
    return company !== '' && firstName !== '' && lastName !== '' && email !== '' && phone !== '' && agreeTerms;
  };

  return (
    <div className="flex justify-center space-x-8 overflow-visible">
      <div className="w-3/4 p-8 mt-8">
        {currentStep === 1 && (
          <>
            <h2 className="text-2xl font-bold text-center">Let's get you started</h2>
            <p className="text-center text-muted-foreground mt-6">When and with how many people will you meet?</p>
            <Step1
              guests={guests}
              setGuests={setGuests}
              date={date}
              setDate={setDate}
              time={time}
              setTime={setTime}
              duration={duration}
              setDuration={setDuration}
              isMultiDay={isMultiDay}
              setMultiDay={setMultiDay}
              tableSetup={tableSetup}
              setTableSetup={setTableSetup}
              venue={venue}
              setVenue={setVenue}
              eventPackages={eventPackages}
              venues={venues}
            />
            <div className="mt-12 space-y-8 flex flex-col items-center">
              <Button className="mt-8" disabled={!isStep1Valid()} onClick={() => setCurrentStep(2)}>
                Add Event Options <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
              </Button>
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <Step2
              guests={guests}
              facilitiesSelected={facilitiesSelected}
              setFacilitiesSelected={setFacilitiesSelected}
              cateringSelected={cateringSelected}
              setCateringSelected={setCateringSelected}
              comments={comments}
              setComments={setComments}
            />
            <div className="relative mt-12 space-x-8 flex justify-center items-center">
              <span className="absolute top-1/2 left-0 text-muted-foreground">Step 2 of 3</span>
              <Button variant="outline" className="mt-8" onClick={() => setCurrentStep(1)}>
                <ArrowLeftIcon className="mr-2 h-5 w-5 text-muted-foreground" />
              </Button>
              <Button className="mt-8" onClick={() => setCurrentStep(3)}>
                Next <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
              </Button>
            </div>
          </>
        )}
        {currentStep === 3 && (
          <>
            <Step3
              company={company}
              setCompany={setCompany}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              phone={phone}
              setPhone={setPhone}
              agreeTerms={agreeTerms}
              setAgreeTerms={setAgreeTerms}
              isStep3Valid={isStep3Valid}
            />
            <div className="mt-12 flex justify-between items-center">
              <span className="text-muted-foreground">Step 3 of 3</span>
              <div className='flex space-x-8 items-center'>
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  <ArrowLeftIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                </Button>
                <Button disabled={!isStep3Valid()}>
                  Request Proposal <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="w-1/4 p-8 bg-gray-50 overflow-visible mt-0 rounded-md">
        <Overview
          date={date}
          guests={guests}
          time={time}
          venue={venue}
          tableSetup={tableSetup}
        />
      </div>
    </div>
  );
}