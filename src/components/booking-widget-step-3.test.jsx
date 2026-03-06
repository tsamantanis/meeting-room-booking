import { render, screen, fireEvent } from '@testing-library/react';
import Step3 from './booking-widget-step-3';
import { vi } from 'vitest';

describe('Step3 Component', () => {
  let mockSetCompany, mockSetFirstName, mockSetLastName, mockSetEmail, mockSetPhone, mockSetAgreeTerms, mockHandleSubmit;

  beforeEach(() => {
    mockSetCompany = vi.fn();
    mockSetFirstName = vi.fn();
    mockSetLastName = vi.fn();
    mockSetEmail = vi.fn();
    mockSetPhone = vi.fn();
    mockSetAgreeTerms = vi.fn();
    mockHandleSubmit = vi.fn();
  });

  const renderComponent = (props = {}) => {
    return render(
      <Step3
        company="Test Company"
        setCompany={mockSetCompany}
        firstName="John"
        setFirstName={mockSetFirstName}
        lastName="Doe"
        setLastName={mockSetLastName}
        email="test@example.com"
        setEmail={mockSetEmail}
        phone="+1234567890"
        setPhone={mockSetPhone}
        agreeTerms={true}
        setAgreeTerms={mockSetAgreeTerms}
        companyError=""
        firstNameError=""
        lastNameError=""
        emailError=""
        phoneError=""
        agreeTermsError=""
        isStep3Valid={() => true}
        handleSubmit={mockHandleSubmit}
        submitting={false}
        {...props}
      />
    );
  };

  test('renders the Step3 component with default props', () => {
    renderComponent();
    expect(screen.getByText(/Almost there!/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Company name/i)).toBeInTheDocument();
  });

  test('calls setCompany on company input change', () => {
    renderComponent();
    const companyInput = screen.getByPlaceholderText(/Company name/i);
    fireEvent.change(companyInput, { target: { value: 'New Company' } });
    expect(mockSetCompany).toHaveBeenCalledWith('New Company');
  });

  test('calls setFirstName on first name input change', () => {
    renderComponent();
    const firstNameInput = screen.getByPlaceholderText(/First name/i);
    fireEvent.change(firstNameInput, { target: { value: 'Jane' } });
    expect(mockSetFirstName).toHaveBeenCalledWith('Jane');
  });

  test('calls setLastName on last name input change', () => {
    renderComponent();
    const lastNameInput = screen.getByPlaceholderText(/Last name/i);
    fireEvent.change(lastNameInput, { target: { value: 'Smith' } });
    expect(mockSetLastName).toHaveBeenCalledWith('Smith');
  });

  test('validates and sets email error message for invalid email input', () => {
    renderComponent();
    const emailInput = screen.getByPlaceholderText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
  });

  test('validates and sets phone error message for invalid phone input', () => {
    renderComponent();
    const phoneInput = screen.getByPlaceholderText(/Phone/i);
    fireEvent.change(phoneInput, { target: { value: '123' } });
    expect(screen.getByText(/Invalid phone number/i)).toBeInTheDocument();
  });

  test('calls handleSubmit when the button is clicked and validations pass', () => {
    renderComponent();
    const button = screen.getByRole('button', { name: /Request Proposal/i });
    fireEvent.click(button);
    expect(mockHandleSubmit).toHaveBeenCalled();
  });

  test('disables the button when isStep3Valid returns false', () => {
    renderComponent({ isStep3Valid: () => false });
    const button = screen.getByRole('button', { name: /Request Proposal/i });
    expect(button).toBeDisabled();
  });

  test('shows loading spinner when submitting is true', () => {
    renderComponent({ submitting: true });
    expect(screen.getByRole('status', { name: /loading spinner/i })).toBeInTheDocument();
  });
  

  test('hides loading spinner when submitting is false', () => {
    renderComponent({ submitting: false });
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  test('displays company error message when companyError prop is set', () => {
    renderComponent({ companyError: 'Company name contains invalid characters' });
    expect(screen.getByText('Company name contains invalid characters')).toBeInTheDocument();
  });
});
