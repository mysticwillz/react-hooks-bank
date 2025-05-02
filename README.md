# 📆 react-hooks-bank

A collection of **powerful, reusable custom React hooks** for complex, non-trivial interactions that go beyond React’s native features.

Built with performance and developer ergonomics in mind, these hooks help you accelerate development and build more interactive experiences effortlessly.

---

## 🚀 Features

- 🌐 Fully typed with **TypeScript**
- 🧠 Designed for **advanced and non-standard use cases**
- 🧹 Pluggable and composable React hooks
- 🔧 Minimal dependencies, lightweight and tree-shakable
- 🔓 Open-source and community-driven

---

## 📆 Installation

```bash
npm install react-hooks-bank
```

Or using `yarn`:

```bash
yarn add react-hooks-bank
```

---

## 🧚 Usage Example (General)

Import the hooks you need and use them in your components:

```tsx
import { useInfiniteScroll } from "react-hooks-bank";

const MyComponent = () => {
  const isLoading = useInfiniteScroll(() => {
    // Callback when scroll reaches threshold
    fetchMoreItems();
  });

  return (
    <div>
      {/* Your list rendering */}
      {isLoading && <p>Loading more...</p>}
    </div>
  );
};
```

---

## 🧰 Available Hooks

> Full documentation for each hook is coming soon. Below is a quick look at some included hooks:

- `useInfiniteScroll`
- `useClickOutside`
- `useUndoRedo`
- `useDebouncedValue`
- `usePrevious`
- `useEventListener`
- `useIdle`
- `useNetworkStatus`
- `useMutationObserver`
- `useGeolocation`

---

## 📉 Hooks Reference Table

A detailed overview of each hook in the library:

| Hook Name             | Purpose/Function                                        | Returns                 | Parameters                                                                                                                                                          |
| --------------------- | ------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `useInfiniteScroll`   | Trigger callback on scroll near bottom                  | `boolean` (isLoading)   | `callback: () => void` (Required) - Function to call <br> `threshold?: number` - Distance in px from bottom (default: 100)                                          |
| `useClickOutside`     | Detect clicks outside a specified element               | `void`                  | `ref: RefObject` (Required) - DOM ref to monitor <br> `callback: () => void` (Required) - Function to call when clicked outside                                     |
| `useUndoRedo`         | Manage undo/redo state for any value                    | `{ state, undo, redo }` | `initialState: any` (Required) - The initial value to track                                                                                                         |
| `useDebouncedValue`   | Debounce a value and return updated version             | `value`                 | `value: any` (Required) - Input value to debounce <br> `delay: number` (Required) - Debounce delay in ms                                                            |
| `usePrevious`         | Track and return previous value                         | `previousValue`         | `value: any` (Required) - Value to track                                                                                                                            |
| `useEventListener`    | Add event listener to target and clean up automatically | `void`                  | `event: string` (Required) - Event name <br> `handler: fn` (Required) - Function handler <br> `element?: HTMLElement` (Optional) - Target element (default: window) |
| `useIdle`             | Detect if user is idle after a timeout                  | `boolean` (isIdle)      | `timeout: number` (Required) - Idle timeout in ms                                                                                                                   |
| `useNetworkStatus`    | Monitor online/offline status                           | `boolean` (isOnline)    | None                                                                                                                                                                |
| `useMutationObserver` | Observe DOM mutations                                   | `void`                  | `ref: RefObject` (Required) - Target element <br> `callback: MutationCallback` (Required) - Called on mutation <br> `options?: MutationObserverInit` (Optional)     |
| `useGeolocation`      | Track user geolocation                                  | `{ coords, error }`     | `options?: PositionOptions` (Optional) - Navigator API options                                                                                                      |

---

## 🧠 Hook Spotlight: `useInfiniteScroll`

Trigger a callback when the user scrolls near the bottom of the page — useful for infinite loading experiences.

### 🔧 Signature

```ts
useInfiniteScroll(callback: () => void, threshold?: number): boolean
```

### 🗓️ Parameters

| Name        | Type         | Required | Default | Description                                                  |
| ----------- | ------------ | -------- | ------- | ------------------------------------------------------------ |
| `callback`  | `() => void` | ✅       | —       | Function to call when scroll reaches the threshold           |
| `threshold` | `number`     | ❌       | `100`   | Distance (in pixels) from the bottom to trigger the callback |

### 📄 Returns

- `isLoading` (`boolean`) — `true` while the callback is being triggered (with a small debounce delay).

### 📆 Example

```tsx
import { useInfiniteScroll } from "react-hooks-bank";

const InfiniteList = () => {
  const [items, setItems] = useState([...initialItems]);

  const isLoading = useInfiniteScroll(() => {
    fetch("/api/more-items")
      .then((res) => res.json())
      .then((newItems) => {
        setItems((prev) => [...prev, ...newItems]);
      });
  });

  return (
    <div>
      {items.map((item, idx) => (
        <p key={idx}>{item.name}</p>
      ))}
      {isLoading && <p>Loading more...</p>}
    </div>
  );
};
```

---

## 🛠 Local Development

To run the project locally:

```bash
git clone https://github.com/mysticwillz/react-hooks-bank.git
cd react-hooks-bank
npm install
npm run build
```

---

## 🤝 Contributing

Contributions are very welcome!

If you'd like to add a new hook, improve documentation, or fix a bug:

1. Fork the repo
2. Create a new branch
3. Submit a PR

Please follow the guidelines in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

## 📃 License

This project is licensed under the MIT License

---

## 👤 Author

Built with ❤️ by [Eze Williams Ezebuilo](https://github.com/mysticwillz)

- Twitter: [@mysticwillz](https://twitter.com/mysticwillz)
- LinkedIn: [mysticwillz](https://linkedin.com/in/mysticwillz)

---

## ⭐ Support & Collaboration

If this project helps you or you’d like to collaborate, star the repo and share it with other developers!
