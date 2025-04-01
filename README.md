# Wint Webflow Custom Scripts

A modern development environment for creating custom scripts and styles for Webflow projects. This project uses TypeScript for JavaScript and SCSS for CSS, with a component-based architecture following BEM naming conventions.

## Project Structure

```
├── src/
│   ├── scss/
│   │   ├── components/     # Component-specific SCSS files
│   │   ├── _variables.scss # Global SCSS variables
│   │   └── main.scss      # Main SCSS file that imports all components
│   └── ts/
│       ├── components/    # Component-specific TypeScript files
│       └── main.ts        # Main TypeScript file
├── dist/                  # Compiled output
│   ├── index.html        # Test page
│   ├── main.css          # Minified CSS
│   └── main.js           # Compiled JavaScript
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── .gitignore           # Git ignore rules
```

## Features

- TypeScript for type-safe JavaScript
- SCSS with BEM naming convention
- Component-based architecture
- CSS custom properties (variables) for theming
- Automatic compilation and bundling
- Watch mode for development
- Automatic deployment to GitHub Pages
- Local development server with hot reloading

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Development mode (watches for changes):

   ```bash
   npm run watch
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Available Scripts

- `npm run dev` - Starts the local development server (http://localhost:3000)
- `npm run build` - Builds both SCSS and TypeScript files
- `npm run build:scss` - Builds only SCSS files
- `npm run build:ts` - Builds only TypeScript files
- `npm run watch` - Watches for changes in both SCSS and TypeScript files
- `npm run watch:scss` - Watches for changes in SCSS files
- `npm run watch:ts` - Watches for changes in TypeScript files
- `npm run preview` - Preview the production build locally

## Local Development

To develop locally and test your changes:

1. Start the development server:

   ```bash
   npm run dev
   ```

2. The server will start at http://localhost:3000

3. To use these files in your Webflow project during development:

   ```html
   <link rel="stylesheet" href="http://localhost:3000/main.css" />
   <script src="http://localhost:3000/main.js"></script>
   ```

4. Any changes you make to your SCSS or TypeScript files will automatically trigger a rebuild and refresh the browser.

## Adding New Components

1. Create a new SCSS file in `src/scss/components/` following BEM naming convention
2. Create a new TypeScript file in `src/ts/components/` for the component's logic
3. Import the SCSS file in `src/scss/main.scss`
4. Import the TypeScript component in `src/ts/main.ts`

## BEM Naming Convention

This project follows the BEM (Block Element Modifier) naming convention for CSS classes:

- Block: Standalone component (e.g., `.button`)
- Element: Part of a block (e.g., `.button__icon`)
- Modifier: Different state or version of a block/element (e.g., `.button--primary`)

Example:

```scss
.button {
  &__icon {
    // Element styles
  }

  &--primary {
    // Modifier styles
  }
}
```

## Adding NPM Packages

To add new npm packages:

1. Install the package:

   ```bash
   npm install package-name
   ```

2. For TypeScript packages, you might need to install their type definitions:
   ```bash
   npm install --save-dev @types/package-name
   ```

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the main branch. The compiled files are available at:

```
https://simmalugnt-se.github.io/wint-webflow-custom-scripts/
```

To use these files in your Webflow project:

1. Add the CSS file to your Webflow project's custom code section:

   ```html
   <link
     rel="stylesheet"
     href="https://simmalugnt-se.github.io/wint-webflow-custom-scripts/main.css"
   />
   ```

2. Add the JavaScript file to your Webflow project's custom code section:
   ```html
   <script src="https://simmalugnt-se.github.io/wint-webflow-custom-scripts/main.js"></script>
   ```

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

ISC
