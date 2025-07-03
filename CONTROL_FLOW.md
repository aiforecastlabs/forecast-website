# Testing Control Flow

This document outlines the testing control flow implemented in the Forecast Labs website.

## Testing Architecture

```
                                 ┌─────────────────┐
                                 │                 │
                                 │  GitHub Actions │
                                 │                 │
                                 └────────┬────────┘
                                          │
                                          │ Runs on PR/Push
                                          ▼
┌─────────────────┐              ┌─────────────────┐
│                 │              │                 │
│    Developer    │─────────────▶│    Jest Tests   │
│                 │ Pre-commit   │                 │
└─────────────────┘              └────────┬────────┘
                                          │
                                          │ Tests
                                          ▼
                                 ┌─────────────────┐
                                 │                 │
                                 │   Components    │
                                 │                 │
                                 └────────┬────────┘
                                          │
                                          │ Renders
                                          ▼
                                 ┌─────────────────┐
                                 │                 │
                                 │      Pages      │
                                 │                 │
                                 └─────────────────┘
```

## Testing Flow

1. **Pre-commit Hook**: When a developer attempts to commit changes, Husky triggers the pre-commit hook.
   - The pre-commit hook runs lint-staged, which:
     - Runs ESLint on staged files
     - Runs Jest tests related to the changed files

2. **Continuous Integration**: When a pull request is created or updated, GitHub Actions runs:
   - Linting on all files
   - All tests with coverage reporting

3. **Test Structure**:
   - **Unit Tests**: Test individual components in isolation
     - Header component
     - Footer component
   - **Integration Tests**: Test pages with multiple components
     - Home page
     - Results page

## Test Types

### Unit Tests

Unit tests verify that individual components render correctly and contain the expected elements:

```typescript
// Example: Header.test.tsx
it('renders the logo and navigation links', () => {
  render(<Header />);
  
  // Check if the logo and brand name are rendered
  expect(screen.getByText('Forecast Labs')).toBeInTheDocument();
  
  // Check if navigation links are rendered
  expect(screen.getByText('Home')).toBeInTheDocument();
});
```

### Integration Tests

Integration tests verify that pages render correctly with all their components and that user interactions work as expected:

```typescript
// Example: ResultsPage.test.tsx
it('allows navigation between sections using the sidebar', () => {
  render(<Results />);
  
  // Get the navigation buttons
  const methodologyButton = screen.getAllByText('Methodology')[0];
  
  // Mock scrollIntoView
  const scrollIntoViewMock = jest.fn();
  Element.prototype.scrollIntoView = scrollIntoViewMock;
  
  // Click on the methodology button
  fireEvent.click(methodologyButton);
  
  // Verify scrollIntoView was called
  expect(scrollIntoViewMock).toHaveBeenCalled();
});
```

## Test Coverage

The test suite aims to cover:

1. **Component Rendering**: Ensure all components render without errors
2. **Content Verification**: Verify that expected content is displayed
3. **User Interactions**: Test that user interactions (clicks, navigation) work correctly
4. **State Changes**: Verify that component state changes as expected

## Continuous Improvement

The testing strategy will evolve as the application grows:

1. **Expanded Coverage**: Add tests for new components and pages
2. **E2E Testing**: Consider adding end-to-end tests with Cypress or Playwright
3. **Visual Regression Testing**: Consider adding visual regression tests
4. **Performance Testing**: Add tests to ensure the application meets performance standards