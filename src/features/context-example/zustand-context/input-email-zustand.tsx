import {ChangeText} from "@/features/context-example/shared-context-ui/change-text.tsx";
import {TEventInput} from "@/features/context-example/context.types.ts";
import { useUserContextZustand } from "./provider/user-zustand-context";

export const InputEmailZustand = () => {
    const updateEmail = useUserContextZustand(state => state.updateEmail)
    const handleChangeEmail = (e: TEventInput) => {
        updateEmail(e.target.value);
    }
    return <ChangeText placeholder={"typing email"} label={"Change Email: "} onChange={handleChangeEmail}/>
}
