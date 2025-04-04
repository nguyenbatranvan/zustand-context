import {Button} from "@/components/ui/button.tsx";
import { useUserContextZustand } from "./provider/user-zustand-context";

export const ResetContextZustand = () => {
    const reset = useUserContextZustand(state => state.reset)
    return <Button onClick={reset}>
        Reset
    </Button>
}
