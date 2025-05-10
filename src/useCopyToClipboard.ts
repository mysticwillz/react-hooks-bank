import { useState, useCallback } from "react";

/**
 * useCopyToClipboard
 *
 * A custom hook to copy text to the clipboard and track copy status.
 *
 * @returns {[copy: (text: string) => Promise<boolean>, isCopied: boolean]}
 *   - copy: Function to invoke with the text to copy.
 *   - isCopied: Boolean flag that resets automatically after a short delay.
 */
export function useCopyToClipboard(): [
  (text: string) => Promise<boolean>,
  boolean
] {
  const [isCopied, setIsCopied] = useState(false);

  /**
   * copy
   * Attempts to write the provided text to the clipboard.
   * Sets `isCopied` to true on success, then resets after 2 seconds.
   *
   * @param text - The text to copy to clipboard.
   * @returns Promise<boolean> indicating success or failure.
   */
  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard API not supported");
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      // Reset the copied state after a delay
      setTimeout(() => setIsCopied(false), 2000);
      return true;
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setIsCopied(false);
      return false;
    }
  }, []);

  return [copy, isCopied];
}
