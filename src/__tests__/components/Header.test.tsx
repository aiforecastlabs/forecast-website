import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: { src: string; alt: string; width: number; height: number; className?: string }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

describe('Header Component', () => {
  it('renders the logo and site name', () => {
    render(<Header />);
    
    expect(screen.getByText('Forecast Labs')).toBeInTheDocument();
    expect(screen.getByAltText('Forecast Labs Logo')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /results & methodology/i })).toBeInTheDocument();
  });

  it('has correct link destinations', () => {
    render(<Header />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const resultsLink = screen.getByRole('link', { name: /results & methodology/i });
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(resultsLink).toHaveAttribute('href', '/results');
  });
});