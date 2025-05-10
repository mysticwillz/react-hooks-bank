# 🖖 react-hooks-bank

A collection of **powerful, reusable custom React hooks** for complex, non-trivial interactions that go beyond React’s native features.

Built with performance and developer ergonomics in mind, these hooks help you accelerate development and build more interactive experiences effortlessly.

---

## 🚀 Features

* 🌐 Fully typed with **TypeScript**
* 🧠 Designed for **advanced and non-standard use cases**
* 🧹 Pluggable and composable React hooks
* 🔧 Minimal dependencies, lightweight and tree-shakable
* 🔓 Open-source and community-driven

---

## 🖖 Installation

```bash
npm install react-hooks-bank
```

Or using `yarn`:

```bash
yarn add react-hooks-bank
```

---

## 🧹 Usage Example (General)

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

## 🔹 Available Hooks

Click a hook to jump to detailed usage instructions:

* [`useClickOutside`](#useclickoutside)
* [`useDebouncedValue`](#usedebouncedvalue)
* [`useFetch`](#usefetch)
* [`useGeolocation`](#usegeolocation)
* [`useHover`](#usehover)
* [`useInfiniteScroll`](#useinfinitescroll)
* [`useIntersectionObserver`](#useintersectionobserver)
* [`useLockBodyScroll`](#uselockbodyscroll)
* [`useNetworkStatus`](#usenetworkstatus)
* [`useThrottle`](#usethrottle)
* [`useDeviceInfo`](#usedeviceinfo)
* [`useOrientation`](#useorientation)
* [`useCopyToClipboard`](#usecopytoclipboard)

---

## 🧠 How to Use Each Hook

### `useClickOutside`

**Purpose**: Detect clicks outside a specific DOM element.

**How to use**:

```tsx
const ref = useRef(null);
useClickOutside(ref, () => console.log("Clicked outside!"));
```

**Returns**: `void`

**Parameters**:

* `ref: RefObject<HTMLElement>` - **Required**: Element to monitor
* `callback: () => void` - **Required**: Triggered when clicking outside

---

### `useDebouncedValue`

**Purpose**: Return a debounced version of a value.

**How to use**:

```tsx
const debouncedValue = useDebouncedValue(searchTerm, 500);
```

**Returns**: `any` – Debounced value

**Parameters**:

* `value: any` – **Required**: The value to debounce
* `delay: number` – **Required**: Delay in ms

---

### `useFetch`

**Purpose**: Fetch data with loading and error state.

**How to use**:

```tsx
const { data, loading, error } = useFetch('/api/data');
```

**Returns**: `{ data, loading, error }`

**Parameters**:

* `url: string` – **Required**: Endpoint URL
* `options?: RequestInit` – Optional fetch options

---

### `useGeolocation`

**Purpose**: Track user's geolocation.

**How to use**:

```tsx
const { coords, error } = useGeolocation();
```

**Returns**: `{ coords, error }`

**Parameters**:

* `options?: PositionOptions` – Optional navigator geolocation options

---

### `useHover`

**Purpose**: Detect hover state on an element.

**How to use**:

```tsx
const { ref, hovered } = useHover();
```

**Returns**: `{ ref, hovered }`

**Parameters**: None

---

### `useInfiniteScroll`

**Purpose**: Trigger callback when scrolled to bottom threshold.

**How to use**:

```tsx
const isLoading = useInfiniteScroll(() => loadMoreItems());
```

**Returns**: `boolean` – `true` if loading

**Parameters**:

* `callback: () => void` – **Required**
* `threshold?: number` – Distance in px to bottom (default: 100)

---

### `useIntersectionObserver`

**Purpose**: Observe if an element is visible in viewport.

**How to use**:

```tsx
const { ref, entry } = useIntersectionObserver();
```

**Returns**: `{ ref, entry }`

**Parameters**:

* `options?: IntersectionObserverInit`

---

### `useLockBodyScroll`

**Purpose**: Prevent body scroll when active.

**How to use**:

```tsx
useLockBodyScroll();
```

**Returns**: `void`

**Parameters**: None

---

### `useNetworkStatus`

**Purpose**: Detect online/offline network status.

**How to use**:

```tsx
const isOnline = useNetworkStatus();
```

**Returns**: `boolean`

**Parameters**: None

---

### `useThrottle`

**Purpose**: Throttle a value change over time.

**How to use**:

```tsx
const throttled = useThrottle(value, 300);
```

**Returns**: `any` – Throttled value

**Parameters**:

* `value: any` – **Required**
* `delay: number` – **Required**

---

### `useDeviceInfo`

**Purpose**: Retrieve device OS, browser, and screen info.

**How to use**:

```tsx
const { os, browser, screen } = useDeviceInfo();
```

**Returns**: `{ os, browser, screen }`

**Parameters**: None

---

### `useOrientation`

**Purpose**: Track screen orientation and angle.

**How to use**:

```tsx
const { angle, type } = useOrientation();
```

**Returns**: `{ angle: number, type: string }`

**Parameters**: None

---

### `useCopyToClipboard`

**Purpose**: Simplifies copying text to the user’s clipboard and reporting success/failure.

**How to use**:

```tsx
const [ copy, isCopied ] = useCopyToClipboard();
```

**Returns**: `[ copy: (text: string) => Promise<boolean>, isCopied: boolean ]`

**Parameters**: None

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

* Twitter: [@mysticwillz](https://twitter.com/mysticwillz)
* LinkedIn: [mysticwillz](https://linkedin.com/in/mysticwillz)

---

## ⭐ Support & Collaboration

If this project helps you or you’d like to collaborate, star the repo and share it with other developers!
