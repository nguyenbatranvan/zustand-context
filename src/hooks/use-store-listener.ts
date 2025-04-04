import {StoreApi} from "zustand/vanilla";
import {useEffect} from "react";

type TSelector<T, U> = ((state: T) => U) | null;

export function useStoreListener<T>(
    store: StoreApi<T>,
    selector: null,
    callback: (state: T) => void
): void;

export function useStoreListener<T, U>(
    store: StoreApi<T>,
    selector: TSelector<T, U>,
    callback: (selectedState: U) => void
): void;

export function useStoreListener<T, U>(
    store: StoreApi<T>,
    selector: TSelector<T, U>,
    callback: (selectedState: T) => void
) {
    useEffect(() => {
        if (!selector) {
            const unsubscribe = store.subscribe((state) => callback(state));
            return () => unsubscribe();
        }
        // @ts-ignore
        const unsubscribe = store.subscribe(selector, (selected: U) => callback(selected));
        return () => unsubscribe();
    }, [store, selector, callback]);
}
