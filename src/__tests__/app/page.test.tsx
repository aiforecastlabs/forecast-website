import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock the components used in the Home page
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

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; width: number; height: number; className?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe('Home Page', () => {
  it('renders the header and footer components', () => {
    render(<Home />);
    
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<Home />);
    
    expect(screen.getByText('There Is an Optimal Path. We Find It.')).toBeInTheDocument();
  });

  it('renders the call-to-action buttons', () => {
    render(<Home />);
    
    expect(screen.getByRole('link', { name: /view our results/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument();
  });

  it('displays the AI forecaster comparison section', () => {
    render(<Home />);
    
    expect(screen.getByText('AI Forecasters Outperform on Prediction Markets')).toBeInTheDocument();
    expect(screen.getByText('Human Forecasters')).toBeInTheDocument();
    expect(screen.getByText('DelPy (Our AI)')).toBeInTheDocument();
    expect(screen.getByText('0.1343')).toBeInTheDocument();
    expect(screen.getByText('0.0823')).toBeInTheDocument();
  });

  it('renders the "How It Works" section', () => {
    render(<Home />);
    
    expect(screen.getByText('From Forecasting to Action')).toBeInTheDocument();
    expect(screen.getByAltText('Causal model explaining the veto of California Senate Bill 1047')).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    render(<Home />);
    
    expect(screen.getByText('Ready to Explore AI Safety Forecasting?')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view full results/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact delpy team/i })).toBeInTheDocument();
  });
});