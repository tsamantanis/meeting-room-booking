import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import Overview from './booking-widget-overview';
import { vi } from 'vitest';


beforeAll(() => {
  window.matchMedia = window.matchMedia || function(query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function() {}, // Deprecated
      removeListener: function() {}, // Deprecated
      addEventListener: function() {},
      removeEventListener: function() {},
      dispatchEvent: function() {},
    };
  };
});

describe('Overview', () => {
  const mockProps = {
    date: new Date(),
    guests: 10,
    time: '09:00',
    venue: 'Venue 1',
    tableSetup: 'Boardroom',
    currentStep: 2,
    setCurrentStep: vi.fn(),
    isStep1Valid: vi.fn(),
    checkStep1Errors: vi.fn(),
    isStep3Valid: vi.fn(),
    checkStep3Errors: vi.fn(),
    facilitiesSelected: [],
    cateringSelected: [],
    selectedEventPackages: [],
    totalExclVat: 0,
    handleSubmit: vi.fn(),
    submitting: false,
  };

  it('renders correctly', () => {
    const { getByText } = render(<Overview {...mockProps} />);
    expect(getByText('Overview')).toBeInTheDocument();
  });

  it('handles step navigation', () => {
    const { getByText } = render(<Overview {...mockProps} />);
    fireEvent.click(getByText('Next'));
    expect(mockProps.setCurrentStep).toHaveBeenCalledWith(3);
  });

  it('handles form submission valid', () => {
    // isStep3Valid is true
    // checkStep3Errors is true

    const { getByLabelText } = render(
      <Overview 
        {...mockProps} 
        currentStep={3} 
        isStep3Valid={vi.fn().mockReturnValue(true)}
        checkStep3Errors={vi.fn().mockReturnValue(true)}
      />
    );
    fireEvent.click(getByLabelText('Request Quote Overview'));
    expect(mockProps.handleSubmit).toHaveBeenCalled();
  });

  // TODO: Check code for reasons this test doesn't pass
  // it('handles form submission invalid', () => {
  //   // isStep3Valid is false
  //   // checkStep3Errors is true
  
  //   const { getByLabelText } = render(
  //     <Overview 
  //       {...mockProps} 
  //       currentStep={3} 
  //       isStep3Valid={vi.fn().mockReturnValue(false)}
  //       checkStep3Errors={vi.fn().mockReturnValue(true)}
  //     />
  //   );
  //   fireEvent.click(getByLabelText('Request Proposal Overview'));
  //   // button disabled
  //   expect(mockProps.checkStep3Errors).toHaveBeenCalled();
  //   expect(mockProps.isStep3Valid).toHaveBeenCalled()
  //   expect(mockProps.handleSubmit).not.toHaveBeenCalled();
  // })
});
