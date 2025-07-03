# Forecast Labs Website Repository

## Repository Structure

This repository contains the source code for the Forecast Labs website, a Next.js React application.

## Testing Architecture

The repository uses Jest and React Testing Library for testing. Tests are organized as follows:

- `src/__tests__/components/`: Unit tests for individual components
- `src/__tests__/pages/`: Integration tests for pages
- `src/__tests__/utils/`: Test utilities

## Testing Control Flow

1. **Pre-commit Hook**: Tests are run automatically before each commit using Husky and lint-staged
2. **Continuous Integration**: Tests are run on GitHub Actions for each pull request and push to main
3. **Test Coverage**: Coverage reports are generated to ensure adequate test coverage

For more details, see [CONTROL_FLOW.md](../../CONTROL_FLOW.md).

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:ci
```

## Development Workflow

1. Create a new branch for your feature or bug fix
2. Make your changes
3. Write tests for your changes
4. Run tests to ensure they pass
5. Commit your changes (tests will run automatically)
6. Push your branch and create a pull request
7. GitHub Actions will run tests on your pull request
8. Once tests pass, your pull request can be reviewed and merged