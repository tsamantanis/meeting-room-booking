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
  emailError,
  phoneError,
  agreeTermsError,
  isStep3Valid,
  checkStep3Errors,
  handleSubmit,
  submitting
}) => {
  return (
    <div className="flex flex-col space-y-8 mt-8 max-w-[480px] mx-auto">
      <h2 className="text-2xl font-bold text-center">Almost there!</h2>
      <p className="text-center text-muted-foreground">Your Free proposal is almost there. No strings attached ;)</p>

      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="Event name (optional)" />
        <Input placeholder="Team name (optional)" />
      </div>

      <div className="mt-4">
        <h3 className="text-lg">Contact Details <span className="text-sm text-red-400">(required)</span></h3>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <Input 
            placeholder="Company name" 
            className={companyError ? 'border-red-500' : ''}
            value={company} 
            onChange={(e) => setCompany(e.target.value)} 
            />
            {companyError && <p className="text-red-500 text-sm mt-1">{companyError}</p>}
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="First name" className={firstNameError ? 'border-red-500' : ''} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <Input placeholder="Last name" className={lastNameError ? 'border-red-500' : ''} value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <Input placeholder="Email (company email preferred)" className={emailError ? 'border-red-500' : ''} value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Phone" className={phoneError ? 'border-red-500' : ''} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>

      <div className="mt-4">
        <label className="inline-flex items-center" htmlFor="agree-terms">
          <Checkbox
            id="agree-terms"
            className={agreeTermsError ? 'border-red-500' : ''}
            checked={agreeTerms}
            onCheckedChange={() => setAgreeTerms(!agreeTerms)}
          />
          <span className="ml-2 text-muted-foreground text-sm">I agree to the terms & conditions and EU data processing</span>
        </label>
        {agreeTermsError && <p className="text-red-500 text-sm mt-1">{agreeTermsError}</p>}
      </div>
      <p className='text-muted-foreground text-sm'>
        We will prepare a proposal for your event without any commitment. You will gain access to a personalised portal where you can manage your proposal online.
      </p>
      <div className="mt-4 text-center">
        <Button 
          className="w-full" 
          disabled={!isStep3Valid()} onClick={() => {
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
              <span>Request Proposal
              </span>
            )}
          </Button>
      </div>

    </div>
  );
};

export default Step3;
