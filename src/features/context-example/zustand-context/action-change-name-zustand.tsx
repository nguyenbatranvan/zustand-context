import {useStoreListener} from "@/hooks/use-store-listener.ts";
import {useState} from "react";
import {useUserStoreZustand} from "./provider/user-zustand-context";

export const ActionChangeNameZustand = () => {
    const [count, setCount] = useState(0)
    const store = useUserStoreZustand();
    useStoreListener(
        store,
        state => state.name,
        (s) => {
            console.log('name is: ', s)
            setCount(prevState => prevState + 1);
        }
    )
    return <div>
        Re-render when name change :{count}
    </div>
}
