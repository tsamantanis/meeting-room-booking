import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from '@/components/ui/checkbox';

const Step3 = ({ 
  company, 
  setCompany, 
  firstName, 
  setFirstName, 
  lastName, 
  setLastName, 
  email, 
  setEmail, 
  phone, 
  setPhone, 
  agreeTerms, 
  setAgreeTerms, 
  companyError,
  firstNameError,
  lastNameError,
  emailError: propEmailError,
  phoneError: propPhoneError,
  agreeTermsError,
  isStep3Valid,
  checkStep3Errors,
  handleSubmit,
  submitting
}) => {
  // Local error states for email and phone validation
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\+?\d{7,15}$/; // Allows optional '+' and 7-15 digits
    return phoneRegex.test(phone);
  };

  // Validation check function
  const checkStep3Validation = () => {
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePhone(phone)) {
      setPhoneError('Invalid phone number');
      isValid = false;
    } else {
      setPhoneError('');
    }

    return isValid;
  };

  return (
    <div className="flex flex-col space-y-4 md:space-y-6 mt-0 md:mt-8 max-w-[480px] mx-auto">
      <h2 className="text-xl font-bold text-center">Tell us who you are</h2>
      <p className="text-center text-muted-foreground">A couple extra details and your proposal is on it's way.</p>

      <div className="mt-4">
        <h3 className="text-lg">Contact Details <span className="text-sm text-red-400">(required)</span></h3>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <Input 
            placeholder="Company name" 
            minLength={2}
            maxLength={100}
            className={companyError ? 'border-red-500' : ''}
            value={company} 
            onChange={(e) => setCompany(e.target.value)} 
          />
          {companyError && <p className="text-red-500 text-sm mt-1">{companyError}</p>}
          
          <div className="grid grid-cols-2 gap-4">
            <Input 
              placeholder="First name" 
              minLength={2}
              maxLength={50}
              className={firstNameError ? 'border-red-500' : ''} 
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)} 
            />
            <Input 
              placeholder="Last name" 
              minLength={2}
              maxLength={50}
              className={lastNameError ? 'border-red-500' : ''} 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
            />
          </div>

          <Input 
            placeholder="Email (company email preferred)" 
            className={emailError ? 'border-red-500' : ''}
            value={email} 
            onChange={(e) => {
              const value = e.target.value;
              setEmail(value);
              if (!validateEmail(value)) {
                setEmailError('Invalid email address');
              } else {
                setEmailError('');
              }
            }} 
          />
          {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}

          <Input 
            placeholder="Phone" 
            maxLength={16}
            className={phoneError ? 'border-red-500' : ''}
            value={phone} 
            onChange={(e) => {
              const value = e.target.value;
              // Allow only digits and optional leading '+'
              if (/^\+?\d*$/.test(value)) {
                setPhone(value);
                if (!validatePhone(value)) {
                  setPhoneError('Invalid phone number');
                } else {
                  setPhoneError('');
                }
              }
            }} 
          />
          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
        </div>
      </div>

      <p className='text-muted-foreground text-sm'>
        This is a non-binding request. Your data is not used for marketing or promotional reasons.
      </p>
      <div className="mt-4 text-center">
        <Button 
          className="w-full" 
          disabled={!isStep3Valid()} 
          onClick={(e) => {
            e.preventDefault();
            checkStep3Errors?.();
            if (checkStep3Validation() && isStep3Valid()) {
              handleSubmit();
            }
          }}
          aria-label="Request Quote" // Added aria-label
        >
          {submitting ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              role="status"
              aria-label="Loading spinner"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )
          : (
            <span>Request Quote</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Step3;
