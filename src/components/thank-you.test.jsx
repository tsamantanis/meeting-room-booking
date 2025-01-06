import React from 'react';
import { render } from '@testing-library/react';
import ThankYou from './thank-you';

describe('ThankYou', () => {
  it('renders correctly', () => {
    const { getByText, getByRole } = render(<ThankYou />);
    expect(getByText('Thank you!')).toBeInTheDocument();
    expect(getByText('We received your request. We commit to have a proposal in your inbox within 10 minutes.')).toBeInTheDocument();
    // expect(getByRole('img')).toBeInTheDocument();
  });
});
