import {UserState} from "@/features/context-example/context.types";
import {useEffect, useRef} from "react";
import {useUserContextBasic} from "@/features/context-example/basic-context/provider/user-basic-context.tsx";

export const useStateListener = <T>(
    selector: (state: UserState) => T,
    callback: (value: T, prevValue: T) => void
) => {
    const {state} = useUserContextBasic();
    const selectedValue = selector(state);
    const prevValueRef = useRef<T>(selectedValue);

    useEffect(() => {
        if (selectedValue !== prevValueRef.current) {
            callback(selectedValue, prevValueRef.current);
            prevValueRef.current = selectedValue;
        }
    }, [selectedValue, callback]);
};
