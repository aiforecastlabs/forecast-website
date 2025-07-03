export default {
  // Lint & format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': filenames =>
    [
      `npx eslint --fix ${filenames.join(' ')}`,
      `npx prettier --write ${filenames.join(' ')}`,
      // Run tests for email service files
      filenames.some(file => file.includes('emailService'))
        ? 'npm test -- --testPathPatterns=emailService'
        : null,
    ].filter(Boolean),

  // Format other file types
  '**/*.(md|json)': filenames => `npx prettier --write ${filenames.join(' ')}`,
};
