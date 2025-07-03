# Forecast Website Repository

## Development Guidelines

### Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`

### Testing

The project uses Jest and React Testing Library for unit tests:

- Run tests with `npm test`
- Run tests in watch mode with `npm run test:watch`
- Run tests with coverage with `npm run test:ci`

### Linting and Formatting

The project uses ESLint and Prettier for code quality:

- Run linting with `npm run lint`
- Linting and formatting are automatically run on pre-commit using Husky and lint-staged

### CI/CD Pipeline

The project has a GitHub Actions workflow that runs on push to main and on pull requests:

1. Installs dependencies
2. Runs linting
3. Runs tests
4. Builds the application

### Pre-commit Checks

Before committing code, the following checks are automatically run:

1. ESLint to check for code quality issues
2. Prettier to ensure consistent formatting
3. Jest tests to ensure functionality works

### Pull Request Guidelines

When creating a pull request:

1. Ensure all tests pass
2. Make sure there are no linting errors
3. Write tests for new functionality
4. Ensure the build succeeds

All these checks will be automatically run by the GitHub Actions workflow when you create a PR.