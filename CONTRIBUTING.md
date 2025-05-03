# Contributing to react-hooks-bank

First off, thank you for taking the time to contribute! 🙌
We welcome all kinds of contributions—bug reports, new hooks, feature suggestions, documentation improvements, or refactoring help.

This document outlines how to contribute to the project in a structured, high-quality, and respectful way.

---

## 🧱 Ground Rules

Before you begin:

- Be respectful and open-minded.
- Follow the existing code style and project structure.
- Keep PRs focused and concise (one feature/bugfix per PR).
- Use **TypeScript** only. This project is strictly typed.
- Your contribution must **not introduce breaking changes** unless discussed and approved via an issue.
- Favor simplicity and performance. All hooks should solve non-trivial problems clearly and cleanly.
- Always update the README (where applicable).

---

## 🛠️ Setting Up the Project

1. **Fork** the repository.
2. **Clone** your fork:

   ```bash
   git clone https://github.com/mysticwillz/react-hooks-bank.git
   cd react-hooks-bank
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the dev build**:

   ```bash
   npm run dev
   ```

---

## ✨ Adding a New Hook

1. Create a file under `src/hooks/yourHookName.ts`.
2. Export the hook from `src/index.ts`.
3. Add an entry to the `README.md`:

   - Add it under “Available Hooks”.
   - Add a “How to Use” section explaining:

     - Purpose
     - Parameters
     - Return values
     - Code example

4. Ensure 100% type safety and clean TypeScript.
5. Document edge cases and intended use.

Example structure:

```ts
// src/hooks/useExample.ts
export function useExample(param: string): string {
  const [state, setState] = useState(param);
  return state;
}
```

---

## 📄 Updating Documentation

We love great docs!

Please make sure you update:

- The README `Available Hooks` section
- The `How to Use` section for your new hook

Clarity is key—write like you're teaching a junior dev how to use your hook.

---

## 🐛 Bug Reports

- File a new issue describing:

  - What you expected to happen
  - What actually happened
  - Steps to reproduce (if applicable)

If you're submitting a fix, please also include a description of the root cause.

---

## 🚀 Feature Requests

- Please open a new issue describing:

  - The problem you're solving
  - Why it should be included in the library
  - Any alternatives or similar APIs

Discussion helps avoid redundant or overly niche features.

---

## 📦 Submitting a Pull Request

1. Fork and clone the repo.
2. Create a new branch:

   ```bash
   git checkout -b feat/useNewAwesomeHook
   ```

3. Make your changes.
4. Update documentation.
5. Commit using [Conventional Commits](https://www.conventionalcommits.org/):

   ```
   feat: add useNewAwesomeHook
   ```

6. Push and open a PR:

   ```bash
   git push origin feat/useNewAwesomeHook
   ```

7. The PR will be reviewed for:

   - Code quality
   - Type safety
   - Documentation clarity
   - Performance

---

## 🙏 Code of Conduct

Please be kind, inclusive, and respectful in all communications and reviews.

We follow the [Contributor Covenant](https://www.contributor-covenant.org/), and any violations will be taken seriously.

---

## 💬 Questions?

Feel free to open a discussion or ping the maintainers via issues.

We’re excited to build a great open-source tool together!
