import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('renders the copyright text', () => {
    render(<Footer />);
    
    expect(screen.getByText(/© 2025 Forecast Labs. All Rights Reserved./i)).toBeInTheDocument();
  });

  it('has the correct styling classes', () => {
    render(<Footer />);
    
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toHaveClass('footer');
    expect(footerElement).toHaveClass('footer-center');
    expect(footerElement).toHaveClass('bg-base-300');
  });
});