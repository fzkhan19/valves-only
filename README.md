# Next.js Boilerplate
## BiomeJS + Million lint + TailwindCSS + Shadcn components + Husky + lint-staged + Bun.

This is a Next.js boilerplate project setup with TailwindCSS, shadcn components, Husky, lint-staged, Biome linter and formatter, and Million lint for performance testing. This setup aims to provide a robust starting point for developing high-performance web applications with a focus on best practices and development efficiency.

## Features

- **Next.js**: The React framework for production.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **shadcn Components**: A component library designed to integrate seamlessly with TailwindCSS.
- **Husky**: Git hooks to automate tasks.
- **lint-staged**: Run linters on git staged files.
- **Biome**: Linter and formatter for JavaScript, TypeScript, JSON, HTML, and CSS.
- **Million lint**: Performance linting to ensure high-performance React components.
- **Bun**: The all-in-one JavaScript runtime and package manager.

## Getting Started

### Prerequisites

Make sure you have Bun installed on your local development machine:

- [Bun](https://bun.sh/) (>=1.0.0)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/fzkhan19/nextjs-tailwind-shadcn-Boilerplate.git
cd nextjs-boilerplate
```

2. Install the dependencies:

```sh
bun install
```

### Development

To start the development server, run:

```sh
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build, run:

```sh
bun build
```

Then, start the production server:

```sh
bun start
```

### Linting and Formatting

This project uses Biome for linting and formatting JavaScript, TypeScript, JSON, HTML, and CSS files. To run Biome, use:

```sh
bun lint
```

To automatically fix linting and formatting issues, use:

```sh
bun format
```

### Git Hooks

Husky and lint-staged are configured to run pre-commit hooks. This ensures that all staged files are linted and formatted before each commit. No additional setup is required; this runs automatically when you commit changes.

### Performance Testing

Million lint is configured to ensure high-performance React components. To run the performance linting, use:

```sh
bun dlx million@latest
```

## Folder Structure

```plaintext
.
├── public          # Public assets
├── src
│   ├── components  # React components
│   ├── pages       # Next.js pages
│   ├── styles      # Global styles
│   ├── utils       # Utility functions
│   └── ...
├── .husky          # Husky configuration
├── biome.json        # Biome configuration
├── components.json   # Components configuration
├── package.json    # Project dependencies and scripts
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License.
