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
  const [date, setDate] = useState(new Date().setDate(new Date().getDate() + 1))
  const [endDate, setEndDate] = useState('');
  const [time, setTime] = useState('09:00');
  const [endTime, setEndTime] = useState('');
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
  // const [event_package_price, setEventPackagePrice] = useState(0);
  const [selectedEventPackages, setSelectedEventPackages] = useState([]);
  const [totalExclVat, setTotalExclVat] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  // const [multiDayPackages, setMultiDayPackages] = useState([{}]); // state for multiple days packages
   const [guestsError, setGuestsError] = useState(null);
   const [dateError, setDateError] = useState(null);
   const [timeError, setTimeError] = useState(null)
   const [endDateError, setEndDateError] = useState(null)
    const [companyError, setCompanyError] = useState(null);
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [agreeTermsError, setAgreeTermsError] = useState(null);
 
  useEffect(() => {
    // fetchVenues();
    // fetchEventPackages();
    setVenues(mockVenues);
    setEventPackages(mockEventPackages);
  }, []);

  useEffect(() => {

    let total = 0;    
    if (venue && selectedEventPackages.length > 0) {
      selectedEventPackages.forEach((packageId, index) => {
        const venuePackage = mockVenuePackages.find(vp => vp.venue_id === venue && vp.package_id === packageId);
        if (venuePackage && venuePackage.price) {
          total += venuePackage.price;
        }

        const selectedFacilities = facilitiesSelected.map(facilityId => facilities.find(facility => facility.id === facilityId));
        selectedFacilities.forEach(facility => {
          total += facility.price;
        });

        cateringSelected.forEach(cateringItem => {
          const c = catering.find(cater => cater.id === cateringItem.id);
          total += c.price * cateringItem.quantity;
        });

      });
    }
    
    setTotalExclVat(total.toFixed(2));

    
  }, [venue, isMultiDay, endDate, facilitiesSelected, cateringSelected]);

  useEffect(() => {
    scrollToTop();
  }, [currentStep]);

  // Mock Data
  const mockVenues = [
    {
      id: '1',
      name: 'Blossom Private Space',
      description: 'With a spacious garden can host teams up to...',
      images: ['/Blossom_hero_widget.jpg'],
      capacity: 22,
      area: 70
    },
    {
      id: '2',
      name: 'Aurora Private Space',
      description: 'With a spacious garden can host teams up to...',
      images: ['/Aurora_hero_widget.jpg'],
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
      image: '/tv_presentation_form_m.jpg' },
    { id: 2, title: 'Post-its & Markers', price: 20, 
      description: 'Various colours/sizes of markers and post-its.', 
      image: '/postits_form_m.jpg' },
    { id: 3, title: 'Conference System', price: 150, 
      description: 'Wide angle camera with external microphones.', 
      image: '/conference_form_m.jpg' },
    { id: 4, title: 'Flip Charts', price: 30, 
      description: 'Set of 2 flip-charts with paper.', 
      image: '/flipcharts_form_m.jpg' }
  ];
  
  const catering = [
    { id: 1, title: 'Beverages', price: 10, 
      description: 'Unlimited Coffee, tea and soft drinks.', 
      image: '/beverages_form_m.jpg' },
    { id: 2, title: 'Snacks', price: 15, 
      description: 'Prepared during your check-in.', 
      image: '/snacks_form_m.jpg' },
    { id: 3, title: 'Breakfast', price: 25, 
      description: 'Via catering partners. Time of delivery specified later.', 
      image: '/breakfast_form_m.jpg' },
    { id: 4, title: 'Lunch', price: 40, 
      description: 'Via catering partners. Time of delivery specified later.', 
      image: '/lunch_form_m.jpg' }
  ];

  // comidor post request data structure
  // data = {
  //   "u_contactFirstName": string,
  // "u_contactLastName": string,
  // "u_email": string,
  // "u_resStartDate": string (date format yyyymmdd),
  // "u_resEndDate": string (date format yyyymmdd),
  // "u_resStartTime":  string (time format hh:mm),
  // "u_resEndTime": string (time format hh:mm),
  // "u_duration": int (key value list: 1- Full day (8 hours), 2- Half day morning (8am to max 1pm), 3- Half day evening (after 1pm), 4- Multiple days, 5- Hourly rate (evening and weekends),
  // "u_teamSize": int,
  // "u_venueName": string (Blossom or Aurora),
  // "u_tableLayout": int (key-value list: 1- Meeting, 2- U-shape, 3- Classroom),
  // "u_hasHardware": int (checkbox values 0:unchecked, 1:checked),
  // "u_hasFlipcharts": int (checkbox values 0:unchecked, 1:checked),
  // "u_hasUnlimitedCoffee": int (checkbox values 0:unchecked, 1:checked),
  // "u_hasBreakfast": int (checkbox values 0:unchecked, 1:checked),
  // "u_hasLunch": int (checkbox values 0:unchecked, 1:checked),
  // "u_hasSnacks": int (checkbox values 0:unchecked, 1:checked),
  // "u_hasDinner": int (checkbox values 0:unchecked, 1:checked),
  //   client: "creativepointdev",
  //   unit: "APP_000134",
  //   dataAction: "u_createReservation",
  //   u_customQuote: 1,
  //   u_preventEmailCommunications: 1,
  //   responseFormat: "json",
  // };
  // const url = "https://betadev.comidor.com/Services";
  // const params = new URLSearchParams(data);

  // const full_url = url + "?" + params.toString();
  // console.log("full_url: ", full_url);
  // console.log("authToken: ", authToken);
  // // handle response
  // fetch(full_url, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${authToken}`,
  //     Accept: "application/json",
  //     "Content-Type": "application/xml",
  //   },
  // })

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
      && (selectedEventPackages.length > 0)
      && venue !== ''
      && (isMultiDay ? endDate !== '' : true)
    );
  };

  const checkStep1Errors = () => {

    if (!guests || guests <= 0) {
      setGuestsError("Please select the number of guests");
    }

    if (!date) {
      setDateError("Please select a date");
    }

    if (!time) {
      setTimeError("Please select a time");
    }

    if (endDate && endDate < date) {
      setEndDateError("End date must be after start date");
    }
    return true;

  }

  const isStep3Valid = () => {
    return company !== '' && firstName !== '' && lastName !== '' && email !== '' && phone !== '' && agreeTerms;
  };

  const checkStep3Errors = () => {

    if (!company) {
      setCompanyError("Please enter your company name");
    }

    if (!firstName) {
      setFirstNameError("Please enter your first name");
    }

    if (!lastName) {
      setLastNameError("Please enter your last name");
    }

    if (!email) {
      setEmailError("Please enter your email");
    }

    if (!phone) {
      setPhoneError("Please enter your phone number");
    }

    if (!agreeTerms) {
      setAgreeTermsError("Please agree to the terms and conditions");
    }
    return true;
  }

  const scrollToTop = () => {
    // scroll modal content to top
    document.getElementById('modal-content').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  }


  async function getComidorAuthToken() {
    const res = await fetch(
      "https://betadev.comidor.com/Services?unit=APIAccessTokens&s_tokenAppId=jIcwr4eot11VMSKdVCz3&s_tokenTenantId=creativepointdev&s_tokenSecret=OLUJdj7nJoho080JomNd&contextCode=Default&client=creativepointdev&dataAction=s_getAccessToken&responseFormat=json&responseCodes=true"
    );
    const tokenData = await res.text();
    const access_token = tokenData.substring(43, 244);
    return access_token;
  }

  const handleSubmit = async () => {
    if (checkStep1Errors() && checkStep3Errors() && isStep1Valid() && isStep3Valid()) {
      console.log('Submit data to Comidor');
      const url = "https://betadev.comidor.com/Services";
      
      const queryParams = new URLSearchParams(window.location.search)
      console.log("queryParams: ", queryParams);
      let event_end_date = new Date(date);
      if (isMultiDay) {
        event_end_date = new Date(endDate);
      }
      const selectedVenueName = venues.find(v => v.id === venue)?.name.split(' ')[0]
     
      // dates need to have yyyymmdd format
      const data = {
        u_contactFirstName: firstName,
        u_contactLastName: lastName,
        u_email: email,
        u_resStartDate: new Date(date).toISOString().slice(0, 10).replace(/-/g, ""),
        u_resEndDate: new Date(event_end_date).toISOString().slice(0, 10).replace(/-/g, ""),
        u_resStartTime: time,
        u_resEndTime: endTime,
        u_duration: selectedEventPackages.map(pkg => mockEventPackages.find(ep => ep.id === pkg).duration_hours),
        u_teamSize: guests,
        u_venueName: selectedVenueName,
        u_tableLayout: tableSetup,
        u_hasHardware: facilitiesSelected.includes(1) ? 1 : 0,
        u_hasFlipcharts: facilitiesSelected.includes(2) ? 1 : 0,
        u_hasUnlimitedCoffee: cateringSelected.includes(1) ? 1 : 0,
        u_hasBreakfast: cateringSelected.includes(3) ? 1 : 0,
        u_hasLunch: cateringSelected.includes(4) ? 1 : 0,
        u_hasSnacks: cateringSelected.includes(2) ? 1 : 0,
        u_hasDinner: cateringSelected.includes(5) ? 1 : 0,
        client: "creativepointdev",
        unit: "APP_000134",
        dataAction: "u_createReservation",
        u_customQuote: 1,
        u_preventEmailCommunications: 1,
        responseFormat: "json",
      };

      
      const authToken = await getComidorAuthToken();
      const params = new URLSearchParams(data);
      const full_url = url + "?" + params.toString();
      console.log("full_url: ", full_url);
      console.log("authToken: ", authToken);
      
      // handle response
      // fetch(full_url, {
      //   method: "POST",
      //   headers: {
      //     Authorization: `Bearer ${authToken}`,
      //     Accept: "application/json",
      //     "Content-Type": "application/xml",
      //   },
      // }).then(async (response) => {
      //   const data = await response.json();
      //   return data;
      // })
      // .then((data) => {
      //   console.log("Message: ", data.message, "Status: ", data.status);
      //   console.log(data);
      // }).catch((error) => console.error("Error:", error)); // Handle any errors

      // send data to google sheets
      // columns: First Name	Last Name	Company 	Team Size	Email	Phone	Quote Date	Event Start Date	Event End Date	Duration	Total Value	Venue	adsID
      // get adsID from query params
      const adsID = queryParams.get('adsID');
      const quoteDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const duration = selectedEventPackages.map(pkg => mockEventPackages.find(ep => ep.id === pkg).duration_hours).join(', ');
      const totalValue = totalExclVat;
      const venueName = selectedVenueName;
      const dataToGoogleSheets = {
        "First Name": firstName,
        "Last Name": lastName,
        "Company": company,
        "Team Size": guests,
        "Email": email,
        "Phone": phone,
        "Quote Date": quoteDate,
        "Event Start Date": new Date(date).toISOString().slice(0, 10),
        "Event End Date": new Date(event_end_date).toISOString().slice(0, 10),
        "Duration": duration,
        "Total Value": totalValue,
        "Venue": venueName,
        "adsID": adsID
      };
      await sendToGoogleSheets(dataToGoogleSheets);      

    }
  }

  const sendToGoogleSheets = async (dataToGoogleSheets) => {
    console.log(import.meta.env.VITE_GSAPI_WRAPPER_URL);
    const dataArray = [
      dataToGoogleSheets['First Name'],
      dataToGoogleSheets['Last Name'],
      dataToGoogleSheets['Company'],
      dataToGoogleSheets['Team Size'],
      dataToGoogleSheets['Email'],
      dataToGoogleSheets['Phone'],
      dataToGoogleSheets['Quote Date'],
      dataToGoogleSheets['Event Start Date'],
      dataToGoogleSheets['Event End Date'],
      dataToGoogleSheets['Duration'],
      dataToGoogleSheets['Total Value'],
      dataToGoogleSheets['Venue'],
      dataToGoogleSheets['adsID'],
    ];
    
    try {
      // const response = await fetch(`${import.meta.env.VITE_GSAPI_WRAPPER_URL}append-data`, {
        const response = await fetch(`http://localhost:5001/append-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: dataArray }), // Stringify the entire body
      });

      const result = await response.json();

      if (response.ok) {
        // setMessage(result.message);
        console.log('Data successfully submitted:', result)
      } else {
        // setMessage('Error appending data: ' + result.message);
        console.error('Error appending data:', result);
      }
    } catch (error) {
      // setMessage('Failed to submit data.');
      console.error('Failed to submit data:', error);
    }
  };

  return (
    <div className="grid grid-rows-[1fr_fit]  overflow-hidden lg:flex lg:flex-row justify-center lg:space-x-8 lg:overflow-visible">
      <div id="modal-content" className="min-w-[90vw] w-full lg:min-w-fit lg:w-3/4 p-2 md:p-8 mt-8 overflow-scroll">  
        {currentStep === 1 && (
          <>
            <h2 className="text-2xl font-bold text-center">Let's get you started</h2>
            <p className="text-center text-muted-foreground mt-6">When and with how many people will you meet?</p>
            <Step1
              guests={guests}
              setGuests={setGuests}
              guestsError={guestsError}
              setGuestsError={setGuestsError}
              date={date}
              setDate={setDate}
              dateError={dateError}
              endDate={endDate}
              setEndDate={setEndDate}
              endDateError={endDateError}
              time={time}
              setTime={setTime}
              timeError={timeError}
              endTime={endTime}
              setEndTime={setEndTime}
              isMultiDay={isMultiDay}
              setMultiDay={setMultiDay}
              tableSetup={tableSetup}
              setTableSetup={setTableSetup}
              venue={venue}
              setVenue={setVenue}
              eventPackages={eventPackages}
              selectedEventPackages={selectedEventPackages}
              setSelectedEventPackages={setSelectedEventPackages}
              venues={venues}
            />
            <div className="mt-12 space-y-8 flex flex-col items-center">
              <Button className="mt-8" onClick={() => checkStep1Errors() && isStep1Valid() && setCurrentStep(2)}>
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
            <div className="hidden md:flex relative mt-12 space-x-4 flex justify-end items-center">
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
              companyError={companyError}
              firstNameError={firstNameError}
              lastNameError={lastNameError}
              emailError={emailError}
              phoneError={phoneError}
              agreeTermsError={agreeTermsError}
              isStep3Valid={isStep3Valid}
            />
            <div className="hidden md:flex mt-12 flex justify-between items-center">
              <span className="text-muted-foreground">Step 3 of 3</span>
              <div className='flex space-x-4 items-center'>
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  <ArrowLeftIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                </Button>
                <Button onClick={() => isStep3Valid() && handleSubmit()}>
                  Request Proposal <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <Overview
        date={date}
        guests={guests}
        time={time}
        venue={venues.find(v => v.id === venue)?.name}
        tableSetup={tableSetup}
        isMultiDay={isMultiDay}
        endDate={endDate}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        isStep1Valid={isStep1Valid}
        checkStep1Errors={checkStep1Errors}
        isStep3Valid={isStep3Valid}
        checkStep3Errors={checkStep3Errors}
        selectedEventPackages={selectedEventPackages.map(item => ({ 
          ...item, 
          duration: eventPackages.find(pkg => pkg.id === item)?.duration_hours,
          price: mockVenuePackages.find(vp => vp.venue_id === venue && vp.package_id === item)?.price 
        }))}
        facilitiesSelected={facilities.filter(facility => facilitiesSelected.includes(facility.id))}
        cateringSelected={cateringSelected.map(item => ({ ...item, name: catering.find(cater => cater.id === item.id).title, price: catering.find(cater => cater.id === item.id).price}))}
        totalExclVat={totalExclVat}
      />
    </div>
  );
}