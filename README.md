# AI Forecasting Platform

This repository contains the code for the AI Forecasting Platform website.

## Email Service

The platform includes an email service for sending notifications, newsletters, and other communications. The email service is implemented in `src/services/emailService.ts`.

### Features

- Create emails with customizable options
- Send emails with error handling
- Support for HTML and plain text emails

### Testing

The email service is thoroughly tested to ensure reliability. Tests are located in `src/__tests__/services/emailService.test.ts`.

#### Running Email Tests

```bash
npm test -- --testPathPatterns=emailService
```

### Pre-commit Hooks

The repository is configured with pre-commit hooks that run the email service tests before each commit to ensure that email creation and sending functionality works correctly.
