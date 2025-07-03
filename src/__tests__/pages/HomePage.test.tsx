import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

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

describe('Home Page', () => {
  it('renders the main heading and call-to-action buttons', () => {
    render(<Home />);
    
    // Check if the main heading is rendered
    expect(screen.getByText('There Is an Optimal Path. We Find It.')).toBeInTheDocument();
    
    // Check if the call-to-action buttons are rendered
    expect(screen.getByText('View Our Results')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    
    // Check if the header and footer are rendered
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });
  
  it('renders the key result showcase section', () => {
    render(<Home />);
    
    // Check if the key result section is rendered
    expect(screen.getByText('AI Forecasters Outperform on Prediction Markets')).toBeInTheDocument();
    expect(screen.getByText('Human Forecasters')).toBeInTheDocument();
    expect(screen.getByText('DelPy (Our AI)')).toBeInTheDocument();
    
    // Check if the Brier scores are rendered
    expect(screen.getByText('0.1343')).toBeInTheDocument();
    expect(screen.getByText('0.0823')).toBeInTheDocument();
  });
  
  it('renders the "How It Works" section', () => {
    render(<Home />);
    
    // Check if the "How It Works" section is rendered
    expect(screen.getByText('From Forecasting to Action')).toBeInTheDocument();
    expect(screen.getByAltText('Causal model explaining the veto of California Senate Bill 1047')).toBeInTheDocument();
  });
  
  it('renders the contact section', () => {
    render(<Home />);
    
    // Check if the contact section is rendered
    expect(screen.getByText('Ready to Explore AI Safety Forecasting?')).toBeInTheDocument();
    expect(screen.getByText('View Full Results')).toBeInTheDocument();
    expect(screen.getByText('Contact DelPy Team')).toBeInTheDocument();
  });
});