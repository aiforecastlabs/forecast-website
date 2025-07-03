import { createEmail, sendEmail, EmailOptions } from '@/services/emailService';

describe('Email Service', () => {
  // Store the original console.log and console.error
  const originalConsoleLog = console.log;
  const originalConsoleError = console.error;

  // Mock console.log and console.error before each test
  beforeEach(() => {
    console.log = jest.fn();
    console.error = jest.fn();
  });

  // Restore console.log and console.error after each test
  afterEach(() => {
    console.log = originalConsoleLog;
    console.error = originalConsoleError;
  });

  describe('createEmail', () => {
    it('should create an email with required fields', () => {
      const options: EmailOptions = {
        to: 'test@example.com',
        subject: 'Test Subject',
        body: 'Test Body',
      };

      const email = createEmail(options);

      expect(email).toEqual({
        to: 'test@example.com',
        subject: 'Test Subject',
        body: 'Test Body',
        from: 'noreply@forecastlabs.org',
        isHtml: true,
      });
    });

    it('should use provided from and isHtml values', () => {
      const options: EmailOptions = {
        to: 'test@example.com',
        subject: 'Test Subject',
        body: 'Test Body',
        from: 'custom@example.com',
        isHtml: false,
      };

      const email = createEmail(options);

      expect(email).toEqual({
        to: 'test@example.com',
        subject: 'Test Subject',
        body: 'Test Body',
        from: 'custom@example.com',
        isHtml: false,
      });
    });

    it('should throw an error if to is missing', () => {
      const options: EmailOptions = {
        to: '',
        subject: 'Test Subject',
        body: 'Test Body',
      };

      expect(() => createEmail(options)).toThrow('Recipient email is required');
    });

    it('should throw an error if subject is missing', () => {
      const options: EmailOptions = {
        to: 'test@example.com',
        subject: '',
        body: 'Test Body',
      };

      expect(() => createEmail(options)).toThrow('Email subject is required');
    });

    it('should throw an error if body is missing', () => {
      const options: EmailOptions = {
        to: 'test@example.com',
        subject: 'Test Subject',
        body: '',
      };

      expect(() => createEmail(options)).toThrow('Email body is required');
    });
  });

  describe('sendEmail', () => {
    it('should successfully send an email', async () => {
      const options: EmailOptions = {
        to: 'test@example.com',
        subject: 'Test Subject',
        body: 'Test Body',
      };

      const result = await sendEmail(options);

      expect(result.success).toBe(true);
      expect(result.messageId).toBeDefined();
      expect(console.log).toHaveBeenCalled();
    });

    it('should handle errors when sending an email', async () => {
      // Create a scenario that will throw an error
      const options: EmailOptions = {
        to: '', // This will cause createEmail to throw
        subject: 'Test Subject',
        body: 'Test Body',
      };

      const result = await sendEmail(options);

      expect(result.success).toBe(false);
      expect(result.error).toBeDefined();
      expect(console.error).toHaveBeenCalled();
    });
  });
});
