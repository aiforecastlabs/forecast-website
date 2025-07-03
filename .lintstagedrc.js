export default {
  // Lint & format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `npx eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],
  
  // Format other file types
  '**/*.(md|json)': (filenames) => `npx prettier --write ${filenames.join(' ')}`,
};