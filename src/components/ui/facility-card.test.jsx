import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import FacilityCard from './facility-card';

describe('FacilityCard', () => {
  const mockProps = {
    title: 'Conference System',
    description: 'Wide angle camera with external microphones.',
    image_url: './conference_form_m.jpg',
    isSelected: false,
    onClick: vi.fn(),
  };

  it('renders correctly', () => {
    const { getByText, getByAltText } = render(<FacilityCard {...mockProps} />);
    expect(getByText(mockProps.title)).toBeInTheDocument();
    expect(getByText(mockProps.description)).toBeInTheDocument();
    expect(getByAltText(mockProps.title)).toBeInTheDocument();
  });

  it('handles click event', () => {
    const { getByRole } = render(<FacilityCard {...mockProps} />);
    fireEvent.click(getByRole('button'));
    expect(mockProps.onClick).toHaveBeenCalled();
  });

  it('displays "Choose" button when not selected', () => {
    const { getByText } = render(<FacilityCard {...mockProps} />);
    expect(getByText('Choose')).toBeInTheDocument();
  });

  it('displays check icon when selected', () => {
    const { getByRole } = render(<FacilityCard {...mockProps} isSelected={true} />);
    expect(getByRole('img', { hidden: true })).toBeInTheDocument();
  });
});
