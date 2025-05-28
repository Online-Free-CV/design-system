# @onlinefreecv/design-system

A modular, type-safe, and themeable UI component library built with React, Formik, and Vanilla Extract. Designed to accelerate development and ensure consistency across the OnlineFreeCV platform.

![NPM Version](https://img.shields.io/npm/v/@onlinefreecv/design-system?color=blue)
![License](https://img.shields.io/npm/l/@onlinefreecv/design-system)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)

---

## 📦 Installation

```bash
npm install @onlinefreecv/design-system
# or
yarn add @onlinefreecv/design-system
```

---

## 🚀 Features

- **Composable UI Components**: Reusable components like `Section`, `Experience`, `Education`, `Projects`, and `Socials`.
- **Formik Integration**: Seamless form state management with validation support.
- **TypeScript Support**: Fully typed components for enhanced developer experience.
- **Vanilla Extract Styling**: Scoped, themeable, and zero-runtime CSS-in-TypeScript.
- **Storybook Documentation**: Interactive component explorer and documentation.

---

## 📚 Documentation & Live Preview

Explore the full component library and documentation:

👉 [Storybook – OnlineFreeCV Design System](http://storybook.onlinefreecv.com/)

---

## 🧱 Components Overview

- **Section**: A generic container for grouping related content.
- **ExperienceSection**: Manage and display professional experiences.
- **EducationSection**: Showcase educational background.
- **ProjectsSection**: Highlight personal or professional projects.
- **Socials**: Add and manage social media links with tag-style inputs.

Each component is designed with accessibility and customization in mind, ensuring adaptability to various use cases.

---

## 🛠️ Usage Example

Here's a basic example of how to use the `Section` component:

```tsx
import { Section } from '@onlinefreecv/design-system';

function App() {
  return (
    <Section title="My Section">
      <p>This is a customizable section.</p>
    </Section>
  );
}
```

For more detailed examples and component variations, refer to the [Storybook documentation](http://storybook.onlinefreecv.com/).

---

## 🧪 Development & Testing

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

To build the project:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

To run storybook:

```bash
npm run storybook
# or
yarn storybook
# or
pnpm storybook
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

- **Liaqat Saeed**
  - [Linkedin](https://pk.linkedin.com/in/liaqat-saeed)
  - [GitHub](https://github.com/liaqatsaeed)

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.
