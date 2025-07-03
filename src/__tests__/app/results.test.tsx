import { render, screen, fireEvent } from '@testing-library/react';
import Results from '@/app/results/page';

// Mock the components used in the Results page
jest.mock('@/components/Header', () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header Component</div>;
  };
});

jest.mock('@/components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Footer Component</div>;
  };
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

describe('Results Page', () => {
  it('renders the header and footer components', () => {
    render(<Results />);
    
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

  it('renders the page title', () => {
    render(<Results />);
    
    expect(screen.getByText('Transparency in Forecasting')).toBeInTheDocument();
  });

  it('renders the methodology section', () => {
    render(<Results />);
    
    expect(screen.getByText('Our Experimental Framework')).toBeInTheDocument();
    expect(screen.getByText(/ForecastBench.org/)).toBeInTheDocument();
  });

  it('renders the results table with correct data', () => {
    render(<Results />);
    
    expect(screen.getByText('Full Brier Score Comparison')).toBeInTheDocument();
    
    // Check for table headers
    expect(screen.getByText('Source')).toBeInTheDocument();
    expect(screen.getByText('Winner')).toBeInTheDocument();
    expect(screen.getByText('Questions')).toBeInTheDocument();
    expect(screen.getByText('Human Mean')).toBeInTheDocument();
    expect(screen.getByText('DelPy Mean')).toBeInTheDocument();
    
    // Check for some specific data points
    expect(screen.getByText('Manifold Markets')).toBeInTheDocument();
    expect(screen.getByText('Yahoo! Finance')).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    render(<Results />);
    
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact delpy team/i })).toBeInTheDocument();
  });

  it('changes active section when navigation buttons are clicked', () => {
    render(<Results />);
    
    // Initially methodology should be active
    const methodologyButton = screen.getAllByText('Methodology')[0];
    const resultsButton = screen.getAllByText('Full Results')[0];
    const contactButton = screen.getAllByText('Contact')[0];
    
    // Click on Results button
    fireEvent.click(resultsButton);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    
    // Click on Contact button
    fireEvent.click(contactButton);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
    
    // Click back on Methodology button
    fireEvent.click(methodologyButton);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
  });
});