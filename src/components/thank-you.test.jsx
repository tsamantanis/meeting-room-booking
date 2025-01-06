import React from 'react';
import { render } from '@testing-library/react';
import ThankYou from './thank-you';

describe('ThankYou', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(<ThankYou />);
    expect(getByText('Thank you!')).toBeInTheDocument();
    expect(getByText('Your request was sent successfully. Please check your inbox to review your proposal and access your personal portal.')).toBeInTheDocument();
    // expect(getByRole('img')).toBeInTheDocument();
  });
});
