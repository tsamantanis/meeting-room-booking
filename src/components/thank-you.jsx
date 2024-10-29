// Thank you step with animated checkmark

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";

export default function ThankYou () {
  return (
    <div className="flex flex-col space-y-8 mt-8">
      {/* animated checkmark */}
      <div className="flex items-center justify-center">
        <svg className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-center">Thank you!</h2>
      <p className="text-center text-muted-foreground">We have received your proposal. We will get back to you as soon as possible, usually within 24 hours.</p>
    </div>
  );
};