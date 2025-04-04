import {ShowText} from "@/features/context-example/shared-context-ui/show-text.tsx";
import { useUserContextZustand } from "./provider/user-zustand-context";

export const ShowNameZustand = () => {
    const name = useUserContextZustand(state => state.name);
    return <ShowText email={name} label={"Component show name"}/>
}
