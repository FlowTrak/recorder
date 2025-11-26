# Contributing to FlowTrack Recorder

Thank you for your interest in contributing to FlowTrack Recorder! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow

## Getting Started

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone git@github.com:YOUR_USERNAME/recorder.git
   cd recorder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```

### Development Workflow

1. Make your changes
2. Write or update tests as needed
3. Run tests: `npm test`
4. Lint and format: `npm run lint:fix && npm run format`
5. Commit your changes (see commit guidelines below)
6. Push to your fork
7. Create a Pull Request

## Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/) for clear and structured commit history.

### Format

```
<type>: <description>

[optional body]

[optional footer]
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting, semicolons, etc.)
- `refactor` - Code refactoring without changing functionality
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `build` - Build system or dependency changes
- `ci` - CI/CD configuration changes
- `chore` - Other changes (maintenance, tooling, etc.)
- `revert` - Revert a previous commit

### Examples

```bash
feat: add screenshot capture functionality
fix: resolve popup rendering issue on Firefox
docs: update installation instructions
test: add unit tests for content script
```

## Code Style

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### Vue Components

- Use Composition API with `<script setup>`
- Use UnoCSS utility classes for styling
- Keep components focused and reusable
- Add proper TypeScript types for props and emits

### Testing

- Write tests for new features
- Maintain or improve code coverage
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

## Git Hooks

Pre-commit hooks will automatically:

- Format code with Prettier
- Fix ESLint issues
- Run TypeScript type checking
- Validate commit message format

If hooks fail, fix the issues before committing.

## Pull Request Process

1. **Update Documentation**: Update README.md if needed
2. **Add Tests**: Ensure your changes are tested
3. **Pass CI Checks**: All GitHub Actions must pass
4. **Describe Changes**: Provide clear PR description
5. **Link Issues**: Reference related issues

### PR Title Format

Use the same format as commit messages:

```
feat: add new feature
fix: resolve bug
```

### PR Description Template

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing

How was this tested?

## Checklist

- [ ] Tests pass locally
- [ ] Code follows style guidelines
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

## Reporting Bugs

### Before Submitting

- Check existing issues
- Verify it's reproducible
- Collect relevant information

### Bug Report Template

```markdown
**Describe the bug**
Clear description of the bug

**To Reproduce**
Steps to reproduce:

1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable

**Environment**

- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 120]
- Extension version: [e.g., 1.0.0]
```

## Feature Requests

We welcome feature suggestions! Please:

- Check if it's already requested
- Explain the use case
- Describe the proposed solution
- Consider alternatives

## Questions?

- Open a GitHub Discussion
- Check existing documentation
- Review closed issues

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
