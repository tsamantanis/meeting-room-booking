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
    }, { timeout: 5000 });
  });

  test('displays error messages when required fields are missing in Step 1', () => {
    renderComponent();

    // Click next without filling any inputs
    fireEvent.click(screen.getByLabelText('Add Event Options'));

    // Validate error messages
    expect(screen.getByText(/Please select the number of guests/i)).toBeInTheDocument();
  });
});
