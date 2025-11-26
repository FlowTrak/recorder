# FlowTrack Recorder

A Chrome extension for recording user interactions on web pages and converting them into structured test scenarios.

[![CI](https://github.com/FlowTrak/recorder/actions/workflows/ci.yml/badge.svg)](https://github.com/FlowTrak/recorder/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎬 **Record User Interactions** - Capture clicks, inputs, navigations, and more
- 📝 **Structured Scenarios** - Convert recordings into organized test steps
- 🎨 **Modern UI** - Built with Vue.js and UnoCSS
- 🧪 **Fully Tested** - Comprehensive test coverage with Vitest
- 🔧 **Developer Friendly** - TypeScript, ESLint, Prettier, and git hooks

## Installation

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:FlowTrak/recorder.git
   cd recorder
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the extension:

   ```bash
   npm run build
   ```

4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `dist` folder from the project

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the extension for production
- `npm run build:check` - Type check without emitting files
- `npm run test` - Run tests in watch mode
- `npm run lint` - Lint code with ESLint
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Prettier

### Project Structure

```
recorder/
├── src/
│   ├── browser-extension/
│   │   ├── background.ts      # Background service worker
│   │   └── content.ts         # Content script
│   └── ui/
│       ├── Popup.vue          # Extension popup component
│       └── main.ts            # Vue app entry point
├── public/
│   ├── icons/                 # Extension icons
│   └── manifest.json          # Chrome extension manifest
├── tests/                     # Test files
├── .github/workflows/         # GitHub Actions CI/CD
└── .husky/                    # Git hooks
```

### Development Workflow

1. Make your changes
2. Run tests: `npm test`
3. Lint and format: `npm run lint:fix && npm run format`
4. Commit with conventional commit message (e.g., `feat: add new feature`)
5. Push and create a PR

Git hooks will automatically:

- Format and lint staged files on commit
- Validate commit message format
- Run TypeScript type checking

## Testing

Run the test suite:

```bash
npm test
```

Run tests once (CI mode):

```bash
npm test -- --run
```

## Releases

This project uses [release-please](https://github.com/googleapis/release-please) for automated releases and changelog generation.

### How It Works

1. Commit changes using [Conventional Commits](https://www.conventionalcommits.org/)
2. Push to `main` branch
3. Release-please bot creates a release PR with:
   - Updated `CHANGELOG.md`
   - Bumped version in `package.json`
   - Release notes
4. Merge the release PR to create a GitHub release

### Version Bumping

- `feat:` commits → minor version bump (1.0.0 → 1.1.0)
- `fix:` commits → patch version bump (1.0.0 → 1.0.1)
- `feat!:` or `BREAKING CHANGE:` → major version bump (1.0.0 → 2.0.0)

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Disclaimer**: The authors and contributors of this project are not responsible for any use or misuse of this software. Use at your own risk.

## Acknowledgments

- Built with [Vue.js](https://vuejs.org/), [Vite](https://vitejs.dev/), and [UnoCSS](https://unocss.dev/)
