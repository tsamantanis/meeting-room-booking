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
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [endTime, setEndTime] = useState('');
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
  const [event_package_price, setEventPackagePrice] = useState(0);
  const [totalExclVat, setTotalExclVat] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // fetchVenues();
    // fetchEventPackages();
    setVenues(mockVenues);
    setEventPackages(mockEventPackages);
  }, []);

  useEffect(() => {

    // use venue, duration, isMultiDay, facilitiesSelected, cateringSelected to calculate totalExclVat
    let total = 0;
    if (venue && duration && (isMultiDay ? endDate : true)) {

      const selectedEventPackage = mockEventPackages.find(ep => ep.duration_hours === duration);
      console.log(selectedEventPackage);
      const venuePackage = mockVenuePackages.find(vp => vp.venue_id === venue && vp.package_id === selectedEventPackage.id);
      // const venuePackage = mockVenuePackages.find(vp => vp.venue_id === venue && vp.package_id === duration);
      total += parseInt(venuePackage.price);
      facilities.filter(facility => facilitiesSelected.includes(facility.id)).forEach(facility => total += facility.price);
      catering.filter(cater => cateringSelected.map(item => item.id).includes(cater.id)).forEach(cater => total += cater.price);
      console.log(venuePackage);
      setEventPackagePrice(venuePackage.price.toFixed(2))
    }
    setTotalExclVat(total.toFixed(2));

    
  }, [venue, duration, isMultiDay, endDate, facilitiesSelected, cateringSelected]);


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
      description: 'Includes Post-its, markers & Presentation screen.',
      is_multi_day: true,
      is_increment_rate: null
    },
    {
      id: '2',
      duration_hours: 4,
      duration_minutes: 0,
      description: 'Includes Post-its, markers & Presentation screen.',
      is_multi_day: true,
      is_increment_rate: null
    },
    {
      id: '3',
      duration_hours: 1,
      duration_minutes: 0,
      description: 'Includes Post-its, markers & Presentation screen.',
      is_multi_day: false,
      is_increment_rate: 1
    }
  ];

  const mockVenuePackages = [
    {
      id: '1',
      venue_id: '1',
      package_id: '1',
      price: 520
    },
    {
      id: '2',
      venue_id: '1',
      package_id: '2',
      price: 320
    },
    {
      id: '3',
      venue_id: '1',
      package_id: '3',
      price: 120
    },
    {
      id: '4',
      venue_id: '2',
      package_id: '1',
      price: 480
    },
    {
      id: '5',
      venue_id: '2',
      package_id: '2',
      price: 280
    },
    {
      id: '6',
      venue_id: '2',
      package_id: '3',
      price: 80
    }
  ]

  const facilities = [
    { id: 1, title: 'Presentation Screen', price: 100, 
      description: '60" portable screen with wireless and HDMI connection.', 
      image: '/placeholder.svg' },
    { id: 2, title: 'Post-its & Markers', price: 20, 
      description: 'Various colours/sizes of markers and post-its.', 
      image: '/placeholder.svg' },
    { id: 3, title: 'Conference System', price: 150, 
      description: 'Wide angle camera with external microphones.', 
      image: '/placeholder.svg' },
    { id: 4, title: 'Flip Charts', price: 30, 
      description: 'Set of 2 flip-charts with paper.', 
      image: '/placeholder.svg' }
  ];
  
  const catering = [
    { id: 1, title: 'Beverages', price: 10, 
      description: 'Unlimited Coffee, tea and soft drinks.', 
      image: '/placeholder.svg' },
    { id: 2, title: 'Snacks', price: 15, 
      description: 'Prepared during your check-in.', 
      image: '/placeholder.svg' },
    { id: 3, title: 'Breakfast', price: 25, 
      description: 'Via catering partners. Time of delivery specified later.', 
      image: '/placeholder.svg' },
    { id: 4, title: 'Lunch', price: 40, 
      description: 'Via catering partners. Time of delivery specified later.', 
      image: '/placeholder.svg' }
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
    return (
      guests > 0 
      && date !== '' 
      && time !== '' 
      && duration !== ''
      && venue !== ''
      && (isMultiDay ? endDate !== '' : true)
    );
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
              endDate={endDate}
              setEndDate={setEndDate}
              time={time}
              setTime={setTime}
              endTime={endTime}
              setEndTime={setEndTime}
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
              catering={catering} 
              facilities={facilities}
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
          venue={venues.find(v => v.id === venue)?.name}
          tableSetup={tableSetup}
          currentStep={currentStep}
          duration={duration}
          event_package_price={event_package_price}
          facilitiesSelected={facilities.filter(facility => facilitiesSelected.includes(facility.id))}
          cateringSelected={cateringSelected.map(item => ({ ...item, name: catering.find(cater => cater.id === item.id).title, price: catering.find(cater => cater.id === item.id).price}))}
          totalExclVat={totalExclVat}
        />
      </div>
    </div>
  );
}