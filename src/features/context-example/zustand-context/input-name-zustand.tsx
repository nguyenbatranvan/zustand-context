import {ChangeText} from "@/features/context-example/shared-context-ui/change-text.tsx";
import {TEventInput} from "@/features/context-example/context.types.ts";
import { useUserContextZustand } from "./provider/user-zustand-context";

export const InputNameZustand = () => {
    const updateName = useUserContextZustand(state => state.updateName);
    const handleChange = (event: TEventInput) => {
        updateName(event.target.value);
    }
    return <ChangeText label={"Change name: "} onChange={handleChange} placeholder={"typing name..."}/>
}
