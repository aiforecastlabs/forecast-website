import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header Component', () => {
  it('renders the logo and navigation links', () => {
    render(<Header />);
    
    // Check if the logo and brand name are rendered
    expect(screen.getByText('Forecast Labs')).toBeInTheDocument();
    expect(screen.getByAltText('Forecast Labs Logo')).toBeInTheDocument();
    
    // Check if navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Results & Methodology')).toBeInTheDocument();
    
    // Check if links have correct hrefs
    const homeLink = screen.getByText('Home').closest('a');
    const resultsLink = screen.getByText('Results & Methodology').closest('a');
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(resultsLink).toHaveAttribute('href', '/results');
  });
});