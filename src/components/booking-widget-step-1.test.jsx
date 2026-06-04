import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Step1 from './booking-widget-step-1';

describe('Step1', () => {
  const mockProps = {
    language: 'en',
    guests: '',
    setGuests: vi.fn(),
    guestsError: '',
    setGuestsError: vi.fn(),
    date: new Date(),
    setDate: vi.fn(),
    dateError: '',
    endDate: '',
    setEndDate: vi.fn(),
    endDateError: '',
    time: '',
    setTime: vi.fn(),
    timeError: '',
    endTime: '',
    setEndTime: vi.fn(),
    isMultiDay: false,
    setMultiDay: vi.fn(),
    tableSetup: 'Boardroom',
    setTableSetup: vi.fn(),
    venue: '',
    setVenue: vi.fn(),
    venueError: '',
    eventPackages: [
      { id: 1, duration_hours: 8, description: 'Full Day' },
      { id: 2, duration_hours: 4, description: 'Half Day' },
    ],
    eventPackagesError: '',
    selectedEventPackages: [],
    setSelectedEventPackages: vi.fn(),
    venues: [
      { id: 1, name: { en: 'Venue 1'}, description: 'Description 1', images: ['image1.jpg'], capacity: 20, area: 70 },
      { id: 2, name: { en: 'Venue 2'}, description: 'Description 2', images: ['image2.jpg'], capacity: 20, area: 70 },
    ],
  };

  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(<Step1 {...mockProps} />);
    expect(getByPlaceholderText('12')).toBeInTheDocument();
  });

  it('handles input changes', () => {
    const { getByPlaceholderText } = render(<Step1 {...mockProps} />);
    fireEvent.change(getByPlaceholderText('12'), { target: { value: '10' } });
    expect(mockProps.setGuests).toHaveBeenCalledWith('10');
  });

  it('handles date selection', () => {
    const { getByText, getByRole } = render(<Step1 {...mockProps} />);
    fireEvent.click(getByRole('button', { name: /Pick a date/i }));
    fireEvent.click(getByText('15'));
    expect(mockProps.setDate).toHaveBeenCalled();
  });

  it('handles layout selection', () => {
    const { getByText } = render(<Step1 {...mockProps} />);
    fireEvent.click(getByText('Classroom'));
    expect(mockProps.setTableSetup).toHaveBeenCalledWith('Classroom');
  });
});
