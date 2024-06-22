import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from '@/components/ui/checkbox';

const Step3 = ({ company, setCompany, firstName, setFirstName, lastName, setLastName, email, setEmail, phone, setPhone, agreeTerms, setAgreeTerms, isStep3Valid }) => {
  return (
    <div className="flex flex-col space-y-8 mt-8 max-w-[480px] mx-auto">
      <h2 className="text-2xl font-bold text-center">Your contact details</h2>
      <p className="text-center text-muted-foreground">Your Free Quote is almost there. No strings attached ;)</p>

      <div className="grid grid-cols-2 gap-4">
        <Input placeholder="Event name (optional)" />
        <Input placeholder="Team name (optional)" />
      </div>

      <div className="mt-4">
        <h3 className="text-lg">Contact Details <span className="text-sm text-red-400">(required)</span></h3>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <Input placeholder="Company name" value={company} onChange={(e) => setCompany(e.target.value)} />
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <Input placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <Input placeholder="Email (company email preferred)" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>

      <div className="mt-4">
        <label className="inline-flex items-center">
          <Checkbox
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <span className="ml-2 text-muted-foreground text-sm">I agree to the terms & conditions and EU data processing</span>
        </label>
      </div>
      <p className='text-muted-foreground text-sm'>
        We will prepare a proposal for your event without any commitment. You will gain access to a personalised portal where you can manage your proposal online.
      </p>
      <div className="mt-4 text-center">
        <Button className="w-full" disabled={!isStep3Valid()}>Request Proposal</Button>
      </div>

    </div>
  );
};

export default Step3;
