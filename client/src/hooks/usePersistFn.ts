// Stable function wrapper that always calls the latest callback.
import { useRef } from "react";

// Generic function signature used by the hook.
type noop = (...args: any[]) => any;

/**
 * usePersistFn instead of useCallback to reduce cognitive load
 */
export function usePersistFn<T extends noop>(fn: T) {
  // Keep a ref to the latest function so callers always get fresh behavior.
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  // Persist a single stable function instance across renders.
  const persistFn = useRef<T>(null);
  if (!persistFn.current) {
    persistFn.current = function (this: unknown, ...args) {
      // Call the latest function with original this/args.
      return fnRef.current!.apply(this, args);
    } as T;
  }

  // Return the stable function instance.
  return persistFn.current!;
}
