/**
 * Email Service
 *
 * This service handles email creation and sending functionality.
 */

export interface EmailOptions {
  to: string;
  subject: string;
  body: string;
  from?: string;
  replyTo?: string;
  isHtml?: boolean;
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: Error;
}

/**
 * Creates an email with the provided options
 */
export function createEmail(options: EmailOptions): EmailOptions {
  // Validate required fields
  if (!options.to) throw new Error('Recipient email is required');
  if (!options.subject) throw new Error('Email subject is required');
  if (!options.body) throw new Error('Email body is required');

  // Set default values
  const email: EmailOptions = {
    ...options,
    from: options.from || process.env.DEFAULT_EMAIL_FROM || 'noreply@forecastlabs.org',
    isHtml: options.isHtml !== undefined ? options.isHtml : true,
  };

  return email;
}

/**
 * Sends an email using the configured email provider
 *
 * Note: This is a mock implementation. In a real application,
 * this would use an actual email service like Nodemailer, SendGrid, etc.
 */
export async function sendEmail(options: EmailOptions): Promise<EmailResult> {
  try {
    // Create the email
    const email = createEmail(options);

    // In a real implementation, this would send the email using a provider
    console.log('Sending email:', email);

    // Mock successful sending
    return {
      success: true,
      messageId: `mock-message-id-${Date.now()}`,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error instanceof Error ? error : new Error(String(error)),
    };
  }
}
