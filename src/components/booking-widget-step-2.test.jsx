import { render, screen, fireEvent } from '@testing-library/react';
import Step2 from './booking-widget-step-2';
import { vi } from 'vitest';

describe('Step2 Component', () => {
  let mockSetFacilitiesSelected, mockSetCateringSelected, mockSetComments;

  beforeEach(() => {
    mockSetFacilitiesSelected = vi.fn();
    mockSetCateringSelected = vi.fn();
    mockSetComments = vi.fn();
  });

  const facilitiesMock = [
    { id: 1, title: { en: 'Facility 1'}, description: {en: 'Description 1'}, image: '/image1.png' },
    { id: 2, title: { en: 'Facility 2'}, description: {en: 'Description 2'}, image: '/image2.png' },
  ];

  const cateringMock = [
    { id: 1, title: { en: 'Catering 1'}, description: {en: 'Description 1'}, image: '/cater1.png' },
    { id: 2, title: { en: 'Catering 2'}, description: {en: 'Description 2'}, image: '/cater2.png' },
  ];

  const renderComponent = (props = {}) => {
    return render(
      <Step2
        language={'en'}
        facilities={facilitiesMock}
        catering={cateringMock}
        guests={10}
        facilitiesSelected={[]}
        setFacilitiesSelected={mockSetFacilitiesSelected}
        cateringSelected={[]}
        setCateringSelected={mockSetCateringSelected}
        comments=""
        setComments={mockSetComments}
        {...props}
      />
    );
  };

  test('renders Step2 component with facilities and catering sections', () => {
    renderComponent();
    expect(screen.getByText(/Choose facilities & catering/i)).toBeInTheDocument();
    const facilityHeaders = screen.getAllByText(/Facilities/i);
    expect(facilityHeaders).toHaveLength(2);
    expect(screen.getByText(/Catering arrangements/i)).toBeInTheDocument();
  });

  test('calls setFacilitiesSelected on facility card click', () => {
    renderComponent();
    const facilityCard = screen.getByText(/Facility 1/i);
    fireEvent.click(facilityCard);
    expect(mockSetFacilitiesSelected).toHaveBeenCalledWith([1]);
  });

  test('deselects a facility if clicked again', () => {
    renderComponent({ facilitiesSelected: [1] });
    const facilityCard = screen.getByText(/Facility 1/i);
    fireEvent.click(facilityCard);
    expect(mockSetFacilitiesSelected).toHaveBeenCalledWith([]);
  });

  test('calls setCateringSelected on catering card click', () => {
    renderComponent();
    const cateringCard = screen.getByText(/Catering 1/i);
    fireEvent.click(cateringCard);
    expect(mockSetCateringSelected).toHaveBeenCalledWith([{ id: 1, quantity: 10 }]);
  });

  test('removes catering item if clicked again', () => {
    renderComponent({ cateringSelected: [{ id: 1, quantity: 10 }] });
    const cateringCard = screen.getByText(/Catering 1/i);
    fireEvent.click(cateringCard);
    expect(mockSetCateringSelected).toHaveBeenCalledWith([]);
  });

  // test('updates catering quantity on quantity change', () => {
  //   renderComponent({ cateringSelected: [{ id: 1, quantity: 10 }] });
  //   const plusButton = screen.getByRole('button', { name: /plus/i });
  //   fireEvent.click(plusButton);
  //   expect(mockSetCateringSelected).toHaveBeenCalledWith([{ id: 1, quantity: 11 }]);
  // });

  // test('removes catering item if quantity is set to 0', () => {
  //   renderComponent({ cateringSelected: [{ id: 1, quantity: 10 }] });
  //   const minusButton = screen.getByRole('button', { name: /minus/i });
  //   for (let i = 0; i < 10; i++) {
  //     fireEvent.click(minusButton);
  //   }
  //   expect(mockSetCateringSelected).toHaveBeenCalledWith([]);
  // });

  test('calls setComments on textarea change', () => {
    renderComponent();
    const textarea = screen.getByPlaceholderText(/Let us know how we can help with your event./i);
    fireEvent.change(textarea, { target: { value: 'New comment' } });
    expect(mockSetComments).toHaveBeenCalledWith('New comment');
  });

  test('shows selected facilities and catering items correctly', () => {
    renderComponent({ facilitiesSelected: [1], cateringSelected: [{ id: 2, quantity: 5 }] });
    expect(screen.getByText(/Facility 1/i).closest('.facility-card')).toHaveClass('selected');
    expect(screen.getByText(/Catering 2/i).closest('.catering-card')).toHaveClass('selected');
  });

  test('does not display any quantity input if catering item is not selected', () => {
    renderComponent();
    expect(screen.queryByDisplayValue('0')).not.toBeInTheDocument();
  });
});