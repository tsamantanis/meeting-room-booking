import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BookingWidget } from './booking-widget';
import { expect, vi } from 'vitest';

beforeAll(() => {
  window.matchMedia = window.matchMedia || function (query) {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: function () {}, // Deprecated
      removeListener: function () {}, // Deprecated
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {},
    };
  };

  window.scrollTo = vi.fn();
  Element.prototype.scrollIntoView = vi.fn();
});

describe('BookingWidget Component', () => {
  const renderComponent = (props = {}) => {
    return render(<BookingWidget {...props} />);
  };

  test('renders BookingWidget component with initial step', () => {
    renderComponent();
    expect(screen.getByText(/Let's get you started/i)).toBeInTheDocument();
  });

  test('navigates to Step 2 when Step 1 is completed', () => {
    renderComponent();

    // Fill in Step 1 inputs
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '12' } });
    fireEvent.click(screen.getByLabelText(/8 Hours/i));
    fireEvent.click(screen.getByLabelText(/Blossom Private Space/i));
    fireEvent.click(screen.getByLabelText('Add Event Options'));

    // Validate transition to Step 2
    expect(screen.getByText(/Choose facilities & catering/i)).toBeInTheDocument();
  });

  test('navigates to Step 3 when Step 2 is completed', () => {
    renderComponent();

    // Complete Step 1
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '12' } });
    fireEvent.click(screen.getByLabelText(/8 Hours/i));
    fireEvent.click(screen.getByLabelText(/Blossom Private Space/i));
    fireEvent.click(screen.getByLabelText('Add Event Options'));

    // Complete Step 2
    fireEvent.click(screen.getByText(/Choose facilities & catering/i));
    fireEvent.click(screen.getByLabelText('Next'));

    // Validate transition to Step 3
    expect(screen.getByText(/Almost there!/i)).toBeInTheDocument();
  });

  test('calls handleSubmit on final step submission', async () => {
    let handleSubmit;
    renderComponent({ exposeHandleSubmit: (fn) => (handleSubmit = fn) });

    // Complete Step 1
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '12' } });
    fireEvent.click(screen.getByLabelText(/8 Hours/i));
    fireEvent.click(screen.getByLabelText(/Blossom Private Space/i));
    fireEvent.click(screen.getByLabelText('Add Event Options'));

    // Complete Step 2
    fireEvent.click(screen.getByText(/Choose facilities & catering/i));
    fireEvent.click(screen.getByLabelText('Next'));

    // Simulate final submission
    fireEvent.change(screen.getByPlaceholderText(/Company name/i), { target: { value: 'Test Company' } });
    fireEvent.change(screen.getByPlaceholderText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone/i), { target: { value: '+1234567890' }});
    const button = screen.getByLabelText('Request Proposal BW');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Thank You!/i)).toBeInTheDocument();
    }, { timeout: 8000 });
  });

  // test multi day event calculations and submission
  test('handles multi-day event flow correctly', async () => {
    render(<BookingWidget />);
  
    // Step 1: Fill out guest count
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '15' } });
  
    // Step 1: Select a duration
    fireEvent.click(screen.getByLabelText(/8 Hours/i));
  
    // Step 1: Select a venue
    fireEvent.click(screen.getByLabelText(/Blossom Private Space/i));
  
    // Step 1: Toggle the multi-day switch
    fireEvent.click(screen.getByLabelText(/Multi day event/i));
  
    // Step 1: Pick a start date
    fireEvent.click(screen.getByRole('button', { name: /Pick a date/i }));
    fireEvent.click(screen.getByText('15')); // Select the 15th as the start date
  
    // Step 1: Pick an end date
    fireEvent.click(screen.getByRole('button', { name: /Pick an end date/i }));
    fireEvent.click(screen.getByText('17')); // Select the 17th as the end date
  
    // Step 1: Proceed to the next step
    fireEvent.click(screen.getByLabelText('Add Event Options'));
  
    // Validate that Step 2 is loaded
    expect(screen.getByText(/Choose facilities & catering/i)).toBeInTheDocument();
  
    // Step 2: Select a facility
    fireEvent.click(screen.getByText(/Conference System/i));

    // Step 2: Select two catering items
    fireEvent.click(screen.getByText(/Lunch/i));
    fireEvent.click(screen.getByText(/Beverages/i));

    // Complete the rest of the booking process
    fireEvent.click(screen.getByLabelText('Next'));
  
    // Step 3: Fill out the contact form
    fireEvent.change(screen.getByPlaceholderText(/Company name/i), { target: { value: 'Test Company' } });
    fireEvent.change(screen.getByPlaceholderText(/First name/i), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText(/Last name/i), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByPlaceholderText(/Phone/i), { target: { value: '+1234567890' } });
  
    // Submit the form
    fireEvent.click(screen.getByLabelText('Request Proposal BW'));
  
    // Wait for final step to be reached
    await waitFor(() => {
      expect(screen.getByText(/Thank You!/i)).toBeInTheDocument();
    }, { timeout: 8000 });
  });


  test('displays error messages when required fields are missing in Step 1', () => {
    renderComponent();

    // Click next without filling any inputs
    fireEvent.click(screen.getByLabelText('Add Event Options'));

    // Validate error messages
    expect(screen.getByText(/Please select the number of guests/i)).toBeInTheDocument();
  });
});

// Test for total calculation validation
const validateTotalCalculation = async (guestCount, durationLabel, venueLabel, facilityLabels, cateringLabels, expectedTotal) => {
  render(<BookingWidget />);

  // Step 1: Fill out guest count
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: guestCount.toString() } });

  // Step 1: Select a duration
  fireEvent.click(screen.getByLabelText(new RegExp(`${durationLabel}`, 'i')));

  // Step 1: Select a venue
  fireEvent.click(screen.getByLabelText(new RegExp(`${venueLabel}`, 'i')));

  // Proceed to the next step
  fireEvent.click(screen.getByLabelText('Add Event Options'));

  // Validate that Step 2 is loaded
  expect(screen.getByText(/Choose facilities & catering/i)).toBeInTheDocument();

  // Step 2: Select facilities
  facilityLabels.forEach(facility => {
    fireEvent.click(screen.getByText(new RegExp(`${facility}`, 'i')));
  });

  // Step 2: Select catering items
  cateringLabels.forEach(catering => {
    fireEvent.click(screen.getByText(new RegExp(`${catering}`, 'i')));
  });

  // Validate that the Overview is displayed
  await waitFor(() => expect(screen.getByText(/Overview/i)).toBeInTheDocument());
// Open the Overview if it is hidden in a Drawer
  const overviewButton = screen.queryByText(/Overview/i);
  if (overviewButton) {
    fireEvent.click(overviewButton);
  }

  // Validate that the Overview section or Drawer content is visible
  await waitFor(() => {
    expect(screen.getByText(/Event Overview/i)).toBeInTheDocument();
  });
  // Check if the Total excl. VAT is visible in the Overview section
  const totalDisplay = screen.queryByLabelText('Total');
  expect(totalDisplay).toBeInTheDocument();
  expect(totalDisplay).toHaveTextContent(`${expectedTotal}€`);
};

// Different combinations for total calculation validation
test('calculates total correctly for combination 1', async () => {
  await validateTotalCalculation(10, '4 Hours', 'Aurora Private Space', ['Flip Charts'], ['Snacks'], '520.00');
});

test('calculates total correctly for combination 2', async () => {
  await validateTotalCalculation(20, '8 Hours', 'Blossom Private Space', ['Conference System'], ['Lunch', 'Beverages'], '1320.00');
});

test('calculates total correctly for combination 3', async () => {
  await validateTotalCalculation(15, '8 Hours', 'Aurora Private Space', ['Flip Charts', 'Conference System'], ['Breakfast', 'Snacks'], '1150.00');
});

test('calculates total correctly for combination 4', async () => {
  await validateTotalCalculation(8, '4 Hours', 'Blossom Private Space', [], ['Lunch'], '582.00');
});