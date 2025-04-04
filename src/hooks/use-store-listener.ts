import {StoreApi} from "zustand/vanilla";
import {useEffect} from "react";

type TSelector<T, U> = ((state: T) => U) | null;

/**
 * useStoreListener Hook
 *
 * This hook allows you to subscribe to changes in a Zustand store and execute a callback function
 * whenever the store's state or a selected part of the state changes.
 *
 * @template T - The type of the Zustand store's state.
 * @template U - The type of the selected part of the state (if a selector is provided).
 *
 * @param {StoreApi<T>} store - The Zustand store instance.
 * @param {null} selector - If null, the callback will be executed whenever the entire store state changes.
 * @param {(state: T) => void} callback - The callback function to execute when the store state changes. It receives the entire store state as an argument.
 *
 * @example
 * // Subscribe to the entire store state changes
 * useStoreListener(myStore, null, (state) => {
 *   console.log("Store state changed:", state);
 * });
 */
export function useStoreListener<T>(
    store: StoreApi<T>,
    selector: null,
    callback: (state: T) => void
): void;

/**
 * useStoreListener Hook
 *
 * This hook allows you to subscribe to changes in a Zustand store and execute a callback function
 * whenever the store's state or a selected part of the state changes.
 *
 * @template T - The type of the Zustand store's state.
 * @template U - The type of the selected part of the state (if a selector is provided).
 *
 * @param {StoreApi<T>} store - The Zustand store instance.
 * @param {(state: T) => U} selector - A function that selects a specific part of the store's state.
 * @param {(selectedState: U) => void} callback - The callback function to execute when the selected state changes. It receives the selected state as an argument.
 *
 * @example
 * // Subscribe to changes in the 'name' property of the store
 * useStoreListener(myStore, (state) => state.name, (name) => {
 *   console.log("Name changed:", name);
 * });
 */
export function useStoreListener<T, U>(
    store: StoreApi<T>,
    selector: (state: T) => U,
    callback: (selectedState: U) => void
): void;

/**
 * useStoreListener Hook (Implementation)
 *
 * This hook allows you to subscribe to changes in a Zustand store and execute a callback function
 * whenever the store's state or a selected part of the state changes.
 *
 * @template T - The type of the Zustand store's state.
 * @template U - The type of the selected part of the state (if a selector is provided).
 *
 * @param {StoreApi<T>} store - The Zustand store instance.
 * @param {TSelector<T, U>} selector - A function that selects a specific part of the store's state, or null to subscribe to the entire state.
 * @param {(selectedState: T | U) => void} callback - The callback function to execute when the state changes.
 */
export function useStoreListener<T, U>(
    store: StoreApi<T>,
    selector: TSelector<T, U>,
    callback: (selectedState: T | U) => void
) {
    useEffect(() => {
        let unsubscribe: () => void;
        if (!selector) {
            unsubscribe = store.subscribe((state) => callback(state));
        } else {
            // @ts-ignore
            unsubscribe = store.subscribe(selector, (selected: U) => {
                callback(selected);
            });
        }
        return () => unsubscribe();
    }, [store, selector, callback]);
}
