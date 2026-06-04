import React from 'react';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@/components/icons';

/**
 * A small −/value/+ stepper. The catering card's stepper is hard-coded
 * disabled; this is the reusable, enabled version used for extra hours.
 */
const QuantityStepper = ({ value, onChange, min = 0, max = Infinity, label }) => {
  return (
    <div className="w-fit flex items-center justify-center rounded-full border-primary border-2 p-1 space-x-2">
      <Button
        type="button"
        variant="outline"
        aria-label={`Decrease ${label || 'quantity'}`}
        className="!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        <MinusIcon className="h-5 w-5 text-primary group-hover:text-white" />
      </Button>
      <p className="text-primary font-medium min-w-5 text-center" aria-label={label}>{value}</p>
      <Button
        type="button"
        variant="outline"
        aria-label={`Increase ${label || 'quantity'}`}
        className="!h-7 !w-7 p-1 group rounded-full flex items-center justify-center border-primary text-primary hover:bg-primary hover:text-white text-lg"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
      >
        <PlusIcon className="h-5 w-5 text-primary group-hover:text-white" />
      </Button>
    </div>
  );
};

export default QuantityStepper;
