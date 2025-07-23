# Contributing to GrandBid

Thank you for your interest in contributing to GrandBid! This document provides guidelines and information for contributors.

## 🧙‍♂️ Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- Git
- A GitHub account

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/GrandBid.git
   cd GrandBid
   ```
3. **Add the original repository** as upstream:
   ```bash
   git remote add upstream https://github.com/DinanathDash/GrandBid.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   ```
5. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your Firebase configuration
   ```
6. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🎯 How to Contribute

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Screenshots** if applicable
- **Environment details** (browser, OS, etc.)

### Suggesting Features

Feature suggestions are welcome! Please:

- **Check existing feature requests** first
- **Provide clear use cases** for the feature
- **Explain how it fits** with the magical theme
- **Consider implementation complexity**

### Pull Requests

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes** thoroughly:
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes** with clear messages:
   ```bash
   git commit -m "feat: add magical feature for wizard management"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## 📝 Coding Standards

### Code Style
- Use **ES6+ features** and modern React patterns
- Follow **Prettier** formatting (configured in the project)
- Use **meaningful variable and function names**
- Add **JSDoc comments** for complex functions

### React Guidelines
- Use **functional components** with hooks
- Implement **proper error boundaries**
- Use **React.memo** for performance optimization when needed
- Keep components **small and focused**

### CSS/Styling
- Use **Tailwind CSS** for styling
- Follow the **magical design system**
- Maintain **responsive design** principles
- Use **CSS custom properties** for theme consistency

### File Organization
- Keep **related files together**
- Use **index.js** files for clean imports
- Follow the **established folder structure**
- Name files using **kebab-case** or **PascalCase** appropriately

## 🎨 Design Guidelines

### Magical Theme Consistency
- Use **Harry Potter inspired** design elements
- Maintain **house color schemes**:
  - Gryffindor: Red (#DC2626)
  - Slytherin: Green (#059669)
  - Ravenclaw: Blue (#2563EB)
  - Hufflepuff: Yellow (#CA8A04)
- Include **magical particles and animations**
- Use **appropriate fonts** (Cinzel, Garamond)

### UI/UX Principles
- **Mobile-first** responsive design
- **Accessibility** compliance (WCAG 2.1)
- **Intuitive navigation** and user flows
- **Consistent component behavior**

## 🧪 Testing

### Manual Testing
- Test on **multiple browsers** (Chrome, Firefox, Safari, Edge)
- Verify **responsive behavior** on different screen sizes
- Check **accessibility** with screen readers
- Test **authentication flows** thoroughly

### Future Testing Strategy
- Unit tests with **Jest and React Testing Library**
- Integration tests for **Firebase integration**
- E2E tests with **Cypress or Playwright**

## 🔧 Development Workflow

### Branch Naming
- `feature/feature-name` - New features
- `bugfix/issue-description` - Bug fixes
- `hotfix/critical-fix` - Critical fixes
- `docs/update-description` - Documentation updates

### Commit Messages
Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or modifying tests
- `chore:` - Maintenance tasks

### Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure CI passes** (linting, building)
4. **Request review** from maintainers
5. **Address feedback** promptly
6. **Rebase if needed** to maintain clean history

## 🎪 Project Areas

### High Priority Areas
- **Authentication system** improvements
- **Real-time bidding** functionality
- **Performance optimizations**
- **Accessibility** enhancements

### Medium Priority Areas
- **Additional wizard statistics**
- **House management** features
- **Mobile app** development
- **Internationalization**

### Creative Areas
- **Magical animations** and effects
- **Sound effects** and audio
- **New UI components**
- **Theme variations**

## 📚 Resources

### Learning Materials
- [React Documentation](https://reactjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

### Design Resources
- [Magical Color Palettes](https://coolors.co)
- [Harry Potter Style Guide](https://harrypotter.fandom.com)
- [Animation Inspiration](https://codepen.io)

## 💬 Communication

### Getting Help
- **GitHub Discussions** for general questions
- **GitHub Issues** for bug reports and feature requests
- **Code reviews** for technical discussions

### Stay Updated
- **Watch the repository** for notifications
- **Follow project updates** in discussions
- **Join community events** if available

## 🎁 Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **Release notes** for significant contributions
- **Project documentation**

Thank you for helping make GrandBid more magical! 🪄✨

---

*Remember: Every contribution, no matter how small, makes a difference in the magical world of GrandBid!*
