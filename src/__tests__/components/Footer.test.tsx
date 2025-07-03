import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('renders the copyright text', () => {
    render(<Footer />);
    
    // Check if the copyright text is rendered
    expect(screen.getByText(/© 2025 Forecast Labs. All Rights Reserved./i)).toBeInTheDocument();
  });
});