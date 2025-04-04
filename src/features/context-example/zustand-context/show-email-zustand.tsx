import {ShowText} from "@/features/context-example/shared-context-ui/show-text.tsx";
import { useUserContextZustand } from "./provider/user-zustand-context";

export const ShowEmailZustand = () => {
    const email = useUserContextZustand(state => state.email);
    return <ShowText label={"Component show email"} email={email}/>
}
