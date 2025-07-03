# Forecast Labs Website

This repository contains the source code for the Forecast Labs website.

## Development

### Prerequisites

- Node.js (v20 or later)
- npm (v10 or later)

### Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Testing

The project uses Jest and React Testing Library for unit and integration tests. To run the tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:ci
```

### Pre-commit Hooks

This project uses Husky and lint-staged to run linting and tests before each commit. This ensures that only code that passes tests and linting rules is committed.

### Continuous Integration

GitHub Actions is used to run tests on pull requests and pushes to the main branch. The workflow is defined in `.github/workflows/test.yml`.
