import {Button} from "@/components/ui/button.tsx";
import {useUserContextBasic} from "@/features/context-example/basic-context/provider/user-basic-context.tsx";

export const ResetContextBasic = () => {
    const {dispatch} = useUserContextBasic();
    return <Button onClick={() => dispatch({
        type: "RESET"
    })}>
        Reset
    </Button>
}
