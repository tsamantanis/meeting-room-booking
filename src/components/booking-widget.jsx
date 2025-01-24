import React, { useState, useEffect, useRef } from 'react';
// import { createClient } from '@supabase/supabase-js';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ArrowLeftIcon } from "@/components/icons";
import Overview from '@/components/booking-widget-overview';
import Step1 from '@/components/booking-widget-step-1';
import Step2 from '@/components/booking-widget-step-2';
import Step3 from '@/components/booking-widget-step-3';
import ThankYou from '@/components/thank-you';
import { mockVenues, mockEventPackages, mockVenuePackages, facilities, catering } from '@/data';

// Initialize Supabase client
// const supabaseUrl = 'https://your-supabase-url.supabase.co';
// const supabaseKey = 'your-supabase-anon-key';
// const supabase = createClient(supabaseUrl, supabaseKey);


export function BookingWidget(props) {
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
  const [agreeTerms, setAgreeTerms] = useState(true);
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
  const [endDateError, setEndDateError] = useState(null);
  const [eventPackagesError, setEventPackagesError] = useState(null);
  const [venueError, setVenueError] = useState(null);
  const [companyError, setCompanyError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [agreeTermsError, setAgreeTermsError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [language, setLanguage] = useState('en');

  const widgetRef = useRef(null)

  useEffect(() => {
    setVenues(mockVenues);
    setEventPackages(mockEventPackages);

    // check if url contains /nl/ to set the language
    if (window.location.pathname.includes('/nl/')) {
      setLanguage('nl');
    }

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
  // const mockVenues = [
  //   {
  //     id: '1',
  //     name: 'Blossom Private Space',
  //     description: 'With a spacious garden can host teams up to...',
  //     images: ['./Blossom_hero_widget.jpg'],
  //     capacity: 20,
  //     area: 70
  //   },
  //   {
  //     id: '2',
  //     name: 'Aurora Private Space',
  //     description: 'With a spacious garden can host teams up to...',
  //     images: ['./Aurora_hero_widget.jpg'],
  //     capacity: 20,
  //     area: 70
  //   }
  // ];

  // const mockEventPackages = [
  //   {
  //     id: '1',
  //     zoho_id: '294101000000450227', // Full day event (8 hours)
  //     duration_hours: 8,
  //     duration_minutes: 0,
  //     short_description: 'Full Day',
  //     description: 'Includes Post-its, markers & Presentation screen.',
  //     is_multi_day: true,
  //     is_increment_rate: null,
  //     rate: 590.0
  //   },
  //   {
  //     id: '2',
  //     zoho_id: '294101000000450240', // Half day event (4 hours)
  //     duration_hours: 4,
  //     duration_minutes: 0,
  //     short_description: 'Half Day',
  //     description: 'Includes Post-its, markers & Presentation screen.',
  //     is_multi_day: true,
  //     is_increment_rate: null,
  //     rate: 390.0
  //   },
  //   {
  //     id: '3',
  //     zoho_id: '294101000000450262', // Hourly rate
  //     duration_hours: 1,
  //     duration_minutes: 0,
  //     short_description: 'Hourly Rate',
  //     description: 'Includes Post-its, markers & Presentation screen.',
  //     is_multi_day: false,
  //     is_increment_rate: 1,
  //     rate: 120.0
  //   }
  // ];
  

  // const mockVenuePackages = [
  //   {
  //     id: '1',
  //     venue_id: '1',
  //     package_id: '1',
  //     price: 650
  //   },
  //   {
  //     id: '2',
  //     venue_id: '1',
  //     package_id: '2',
  //     price: 390
  //   },
  //   {
  //     id: '3',
  //     venue_id: '1',
  //     package_id: '3',
  //     price: 120
  //   },
  //   {
  //     id: '4',
  //     venue_id: '2',
  //     package_id: '1',
  //     price: 650
  //   },
  //   {
  //     id: '5',
  //     venue_id: '2',
  //     package_id: '2',
  //     price: 390
  //   },
  //   {
  //     id: '6',
  //     venue_id: '2',
  //     package_id: '3',
  //     price: 120
  //   }
  // ]

  // const facilities = [
  //   {
  //     id: 3,
  //     zoho_id: '294101000000057154', // Conference system
  //     title: 'Conference System',
  //     price: 50,
  //     description: 'Wide angle camera with external microphones.',
  //     image: './conference_form_m.jpg'
  //   },
  //   {
  //     id: 4,
  //     zoho_id: '294101000000302075', // 2 x flip charts
  //     title: 'Flip Charts',
  //     price: 30,
  //     description: 'Set of 2 flip-charts with paper.',
  //     image: './flipcharts_form_m.jpg'
  //   }
  // ];
  
  
  // const catering = [
  //   {
  //     id: 4,
  //     zoho_id: '294101000000057128', // Lunch pack
  //     title: 'Lunch',
  //     price: 24,
  //     description: 'Via catering partners. Time of delivery specified later.',
  //     image: './lunch_form_m.webp'
  //   },
  //   {
  //     id: 1,
  //     zoho_id: '294101000000134831', // Beverages
  //     title: 'Beverages',
  //     price: 7,
  //     description: 'Unlimited Coffee, tea and soft drinks.',
  //     image: './beverages_form_m.jpg'
  //   },
  //   {
  //     id: 2,
  //     zoho_id: '294101000000124242', // Snacks pack
  //     title: 'Fruits & Snacks',
  //     price: 10,
  //     description: 'Fresh fruit, cake, energy bars, chocolate bites.',
  //     image: './snacks_form_m.jpg'
  //   },
  //   {
  //     id: 3,
  //     zoho_id: '294101000000057137', // Breakfast pack
  //     title: 'Breakfast',
  //     price: 18,
  //     description: 'Via catering partners. Time of delivery specified later.',
  //     image: './breakfast_form_m.webp'
  //   },
  // ];
  

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
      && guests <= mockVenues.find(v => v.id === venue)?.capacity
    );
  };

  const checkStep1Errors = () => {

    if (!guests || guests <= 0) {
      scrollToTop();
      setGuestsError("Please select the number of guests");
    }

    if (!date) {
      scrollToTop();
      setDateError("Please select a date");
    }

    if (!time) {
      scrollToTop();
      setTimeError("Please select a time");
    }

    if (endDate && endDate < date) {
      scrollToTop();
      setEndDateError("End date must be after start date");
    }

    if (selectedEventPackages.length === 0) {
      scrollToTop();
      setEventPackagesError("Please select at least one duration");
    }

    if (!venue) {
      setVenueError("Please select a venue");
    }

    if (guests > mockVenues.find(v => v.id === venue)?.capacity) {
      setGuestsError("Number of guests exceeds venue capacity of " + mockVenues.find(v => v.id === venue)?.capacity);
    }

    return true;

  }

  // Company Name Validation
  const validateCompany = (company) => {
    const companyRegex = /^[A-Za-z0-9&.\-' ]{2,100}$/;
    return company.trim().length >= 2 && company.trim().length <= 100 && companyRegex.test(company.trim());
  };

  // First and Last Name Validation
  const validateName = (name) => {
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,50}$/; // Supports accented characters
    return name.trim().length >= 2 && name.trim().length <= 50 && nameRegex.test(name.trim());
  };

  // Email Validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  // Phone Number Validation
  const validatePhone = (phone) => {
    const phoneRegex = /^\+?\d{7,15}$/; // Allows optional '+' and 7-15 digits
    return phoneRegex.test(phone.trim());
  };
    
  const isStep3Valid = () => {
    return (
      validateCompany(company) &&
      validateName(firstName) &&
      validateName(lastName) &&
      validateEmail(email) &&
      validatePhone(phone) &&
      agreeTerms
    );
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
    
    if (widgetRef && widgetRef.current) {
      // scroll within widgetRef without scrolling the window
      widgetRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest", offsetTop: 60})
    }
  }


  async function getComidorAuthToken() {
    const res = await fetch(
      "https://betadev.comidor.com/Services?unit=APIAccessTokens&s_tokenAppId=jIcwr4eot11VMSKdVCz3&s_tokenTenantId=creativepointdev&s_tokenSecret=OLUJdj7nJoho080JomNd&contextCode=Default&client=creativepointdev&dataAction=s_getAccessToken&responseFormat=json&responseCodes=true"
    );
    const tokenData = await res.json();
    const access_token = tokenData.access_token;
    return access_token;
  }

  const handleSubmit = async () => {
    if (checkStep1Errors() && checkStep3Errors() && isStep1Valid() && isStep3Valid()) {
      setSubmitting(true);
      const queryParams = new URLSearchParams(window.location.search)
      // console.log("queryParams: ", queryParams);
      let event_end_date = new Date(date);
      if (isMultiDay) {
        event_end_date = new Date(endDate);
      }
      const selectedVenueName = venues.find(v => v.id === venue)?.name[language].split(' ')[0]

      const adsID = queryParams.get('adsID');
      const quoteDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const duration = selectedEventPackages.map(pkg => mockEventPackages.find(ep => ep.id === pkg).duration_hours).join(', ');
      const totalValue = totalExclVat;
      const venueName = selectedVenueName;
      const dataToGoogleSheets = {
        "First Name": firstName.trim(),
        "Last Name": lastName.trim(),
        "Company": company.trim(),
        "Team Size": guests,
        "Email": email,
        "Phone": phone,
        "Quote Date": quoteDate,
        "Event Start Date": new Date(date).toISOString().slice(0, 10),
        "Event End Date": new Date(event_end_date).toISOString().slice(0, 10),
        "Duration": duration,
        "Total Value": totalValue,
        "Venue": venueName,
        "Items": facilitiesSelected.map(facilityId => facilities.find(facility => facility.id === facilityId).title[language]).join(', ') + ', ' + cateringSelected.map(cateringItem => catering.find(cater => cater.id === cateringItem.id).title[language]).join(', '),
        "Comments": comments,
        "adsID": adsID
      };
      // console.log('Data to Google Sheets:', dataToGoogleSheets);
      const googleSheetsSuccess = await sendToGoogleSheets(dataToGoogleSheets); 
      // console.log('Google Sheets success:', googleSheetsSuccess);
      // console.log('Comidor success:', comidorSuccess);
      const zohoEstimate = await createZohoEstimate();
      // console.log('Zoho success:', zohoEstimate);
      if (!zohoEstimate) {
        console.log('zoho estimate was not created')
      }
      if (googleSheetsSuccess) {
        // console.log('Success!');

        // redirect to thank you page
        // https://www.creativepoint.nl/thank-you/
        if (typeof window !== 'undefined') {
          window.top.location.href = 'https://www.creativepoint.nl/thank-you/';
        }

        setCurrentStep(4);
      }
      setSubmitting(false);

    }
  }

  // Expose handleSubmit for testing
  if (props.exposeHandleSubmit) {
    props.exposeHandleSubmit(handleSubmit);
  }

  const sendToComidor = async ({ dataToComidor }) => {
    // console.log('Submit data to Comidor');
    const url = "https://betadev.comidor.com/Services";
    let authToken;
    let full_url;
  
    try {
      authToken = await getComidorAuthToken();
      const params = new URLSearchParams(dataToComidor);
      full_url = url + "?" + params.toString();
      // console.log("full_url: ", full_url);
      // console.log("authToken: ", authToken);
    } catch (error) {
      // console.error('Error getting auth token:', error);
      return false;
    }
  
    if (!authToken || !full_url) {
      // console.error('Something went wrong with the auth token');
      return false;
    }

    try {
      const response = await fetch(full_url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
          "Content-Type": "application/xml",
        },
      });
  
      // console.log("Message: ", response.message, "Status: ", response.status);
  
      if (response.ok) {
        // console.log('Request completed successfully');
        return true;
      } else {
        // console.error('Request failed with status:', response.status);
        return false;
      }
    } catch (error) {
      // console.error("Error during fetch:", error);
      return false;
    }
  }

  const sendToGoogleSheets = async (dataToGoogleSheets) => {
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
      dataToGoogleSheets['Items'],
      dataToGoogleSheets['Comments'],
      dataToGoogleSheets['adsID'],
    ];

    try {
      const response = await fetch(`${import.meta.env.VITE_GSAPI_WRAPPER_URL}append-data`, {
        // const response = await fetch(`http://localhost:5001/append-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: dataArray }), // Stringify the entire body
      });

      const result = await response.json();

      if (response.ok) {
        // setMessage(result.message);
        // console.log('Data successfully submitted:', result)
        return true;
      } else {
        // setMessage('Error appending data: ' + result.message);
        console.error('Error appending data:', result);
        return false;
      }
    } catch (error) {
      // setMessage('Failed to submit data.');
      console.error('Failed to submit data:', error);
      return false;
    }
  };

  const createCustomer = async (customerData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_ZOHO_WRAPPER_URL}create-customer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error creating customer:', errorData.error);
        alert('Error creating customer: ' + errorData.error);
        return null;
      }
  
      const data = await response.json();
      console.log(data)
      return data.contact_id;
    } catch (error) {
      console.error('Internal Server Error:', error);
      alert('An error occurred while creating the customer. Please try again later.');
      return null;
    }
  };
  
  const createZohoEstimate = async () => {
    if (checkStep1Errors() && checkStep3Errors() && isStep1Valid() && isStep3Valid()) {
      setSubmitting(true);
      const customerData = {
        contact_name: `${firstName.trim()} ${lastName.trim()}`,  
        first_name: firstName.trim(),
        last_name: lastName.trim(),
        company_name: company.trim(),
        email: email,
        phone: phone,
      };
      
      // Step 1: Create Customer if Necessary
      let customer_id = await createCustomer(customerData);
      if (!customer_id) {
        setSubmitting(false);
        return false; // Exit if customer creation failed
      }
  
      // Step 2: Create `line_items` data for the estimate using `zoho_id`
      // input is selectedEventPackages i.e [1, 2, 2]
      // output should be {1: 1, 2: 2}
      const packageQuantities = selectedEventPackages.reduce((acc, pkg) => {
        if (acc[pkg]) {
          acc[pkg] += 1;
        } else {
          acc[pkg] = 1;
        }
        return acc;
      }, {});

      const line_items = Object.entries(packageQuantities).map(([pkg, quantity]) => {
        const foundPackage = mockEventPackages.find((eventPkg) => eventPkg.id === pkg);
        return {
          item_id: foundPackage?.zoho_id, // Use `zoho_id` from mockEventPackages
          // Default quantity is 1 for each event package
          quantity: packageQuantities[pkg],
        };
      });

      // line_items expected output
      // [
      //   { item_id: '294101000000450227', quantity: 1 },
      //   { item_id: '294101000000450240', quantity: 2 }
      // ]
      
      facilitiesSelected.forEach((facilityId) => {
        const facility = facilities.find((f) => f.id === facilityId);
        if (facility) {
          line_items.push({
            item_id: facility.zoho_id,
            // Default quantity is 1 for each facility
            // if Multi-day, then calculate the number of days
            quantity: isMultiDay ? Math.ceil((new Date(endDate) - new Date(date)) / (1000 * 60 * 60 * 24)) : 1,
          });
        }
      });
  
      cateringSelected.forEach((cateringItem) => {
        const cateringDetail = catering.find((cat) => cat.id === cateringItem.id);
        if (cateringDetail) {
          line_items.push({
            item_id: cateringDetail.zoho_id,
            // Quantity is the quantity selected by the user
            // if Multi-day, then calculate the number of days
            quantity: isMultiDay ? Math.ceil((new Date(endDate) - new Date(date)) / (1000 * 60 * 60 * 24)) * cateringItem.quantity : cateringItem.quantity,
          });
        }
      });
  
      // Step 3: Construct and send the estimate data
      const estimateData = {
        customer_id: customer_id,
        line_items: line_items,
        date: new Date().toISOString().split('T')[0],
        notes: comments,
        // custom subject i.e: Half Day for 17/01/2025 at Blossom
        custom_subject: `${selectedEventPackages.map(pkg => mockEventPackages.find(ep => ep.id === pkg).short_description[language]).join(', ')} for ${new Date(date).toLocaleDateString('en-CA')} at ${venues.find(v => v.id === venue)?.name[language]}`,
      };
  
      try {
        const response = await fetch(`${import.meta.env.VITE_ZOHO_WRAPPER_URL}create-estimate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(estimateData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error creating estimate:', errorData.error);
          return false
        } else {
          const data = await response.json();
          // console.log('Estimate created successfully:', data);
          return true
        }
      } catch (error) {
        console.error('Internal Server Error:', error);
        return false
      } finally {
        setSubmitting(false);
      }
    } else {
      return false
    }
  };
  
  
  useEffect(() => {
    setEventPackagesError(null)
  }, [selectedEventPackages]);

  useEffect(() => {
    setVenueError(null)
  }, [venue]);

  return currentStep === 4 ? (
      <ThankYou />
    )
  : (
    <div className="grid grid-rows-[1fr_fit]  overflow-hidden lg:flex lg:flex-row justify-center lg:space-x-8 lg:overflow-visible" ref={widgetRef}>
      <div id="booking-widget" className="w-full p-4 mt-8 overflow-scroll" ref={widgetRef}>  
        {currentStep === 1 && (
          <>
            <h2 className="text-2xl font-bold text-center">Let's get you started</h2>
            <p className="text-center text-muted-foreground mt-6">{`Grab your free quote. It only takes a minute!`}</p>
            <Step1
              language={language}
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
              venueError={venueError}
              eventPackages={eventPackages}
              eventPackagesError={eventPackagesError}
              selectedEventPackages={selectedEventPackages}
              setSelectedEventPackages={setSelectedEventPackages}
              venues={venues}
            />
            <div className="mt-12 space-y-8 flex flex-col items-center">
              <Button aria-label="Add Event Options" className="mt-8" onClick={() => checkStep1Errors() && isStep1Valid() && setCurrentStep(2)}>
                Add Event Options <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
              </Button>
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <Step2
              language={language}
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
              <Button aria-label="Next" className="mt-8" onClick={() => setCurrentStep(3)}>
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
              checkStep3Errors={checkStep3Errors}
              handleSubmit={handleSubmit}
              submitting={submitting}
            />
            <div className="hidden md:flex mt-12 flex justify-between items-center">
              <span className="text-muted-foreground">Step 3 of 3</span>
              <div className='flex space-x-4 items-center'>
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  <ArrowLeftIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                </Button>
                <Button 
                  aria-label="Request Proposal BW"
                  disabled={!isStep3Valid()}
                  onClick={() => {
                    if (checkStep3Errors() && isStep3Valid()) {
                      handleSubmit()
                    }
                  }}>
                  {submitting ? 
                    (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )
                  : (
                    <span className="flex space-x-2">Request Proposal <ArrowRightIcon className="ml-2 h-5 w-5 text-white" />
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <Overview
        language={language}
        date={date}
        guests={guests}
        time={time}
        venue={venues.find(v => v.id === venue)?.name[language]}
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
        cateringSelected={cateringSelected.map(item => ({ ...item, name: catering.find(cater => cater.id === item.id).title[language], price: catering.find(cater => cater.id === item.id).price}))}
        totalExclVat={totalExclVat}
        handleSubmit={handleSubmit}
        submitting={submitting}
      />
    </div>
  )
}