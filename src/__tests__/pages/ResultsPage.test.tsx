import { render, screen, fireEvent } from '@testing-library/react';
import Results from '@/app/results/page';

// Mock the Header and Footer components
jest.mock('@/components/Header', () => {
  return function MockHeader() {
    return <div data-testid="mock-header">Header</div>;
  };
});

jest.mock('@/components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="mock-footer">Footer</div>;
  };
});

describe('Results Page', () => {
  it('renders the page title and description', () => {
    render(<Results />);
    
    // Check if the page title and description are rendered
    expect(screen.getByText('Transparency in Forecasting')).toBeInTheDocument();
    expect(screen.getByText(/A detailed breakdown of our experimental methodology/i)).toBeInTheDocument();
    
    // Check if the header and footer are rendered
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
  
  it('renders the methodology section', () => {
    render(<Results />);
    
    // Check if the methodology section is rendered
    expect(screen.getByText('Our Experimental Framework')).toBeInTheDocument();
    expect(screen.getByText('ForecastBench.org')).toBeInTheDocument();
    expect(screen.getByText('Data Leakage Prevention:')).toBeInTheDocument();
    expect(screen.getByText('Statistical Significance:')).toBeInTheDocument();
  });
  
  it('renders the results table with correct data', () => {
    render(<Results />);
    
    // Check if the results table is rendered
    expect(screen.getByText('Full Brier Score Comparison')).toBeInTheDocument();
    
    // Check if the table headers are rendered
    expect(screen.getByText('Source')).toBeInTheDocument();
    expect(screen.getByText('Winner')).toBeInTheDocument();
    expect(screen.getByText('Questions')).toBeInTheDocument();
    expect(screen.getByText('Human Mean')).toBeInTheDocument();
    expect(screen.getByText('DelPy Mean')).toBeInTheDocument();
    
    // Check if some of the data sources are rendered
    expect(screen.getByText('ACLED')).toBeInTheDocument();
    expect(screen.getByText('Manifold Markets')).toBeInTheDocument();
    expect(screen.getByText('Yahoo! Finance')).toBeInTheDocument();
  });
  
  it('renders the contact section', () => {
    render(<Results />);
    
    // Check if the contact section is rendered
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    expect(screen.getByText(/Interested in learning more about DelPy/i)).toBeInTheDocument();
    expect(screen.getByText('Contact DelPy Team')).toBeInTheDocument();
  });
  
  it('allows navigation between sections using the sidebar', () => {
    render(<Results />);
    
    // Get the navigation buttons
    const methodologyButton = screen.getAllByText('Methodology')[0];
    const resultsButton = screen.getAllByText('Full Results')[0];
    const contactButton = screen.getAllByText('Contact')[0];
    
    // Mock scrollIntoView
    const scrollIntoViewMock = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;
    
    // Click on the results button
    fireEvent.click(resultsButton);
    
    // Click on the contact button
    fireEvent.click(contactButton);
    
    // Click on the methodology button
    fireEvent.click(methodologyButton);
    
    // Verify scrollIntoView was called
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(3);
  });
});