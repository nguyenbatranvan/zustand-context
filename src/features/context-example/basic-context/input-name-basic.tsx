import {ChangeText} from "@/features/context-example/shared-context-ui/change-text.tsx";
import {TEventInput} from "@/features/context-example/context.types.ts";
import {useUserContextBasic} from "@/features/context-example/basic-context/provider/user-basic-context.tsx";

export const InputNameBasic = () => {
    const {dispatch} = useUserContextBasic();
    const handleChange = (event: TEventInput) => {
        dispatch({
            payload: event.target.value,
            type: "UPDATE_NAME"
        });
    }
    return <ChangeText label={"Change name: "} onChange={handleChange} placeholder={"typing name..."}/>
}
