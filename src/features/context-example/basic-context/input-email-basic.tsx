import {ChangeText} from "@/features/context-example/shared-context-ui/change-text.tsx";
import {TEventInput} from "@/features/context-example/context.types.ts";
import {useUserContextBasic} from "@/features/context-example/basic-context/provider/user-basic-context.tsx";

export const InputEmailBasic = () => {
    const {dispatch} = useUserContextBasic();

    const handleChangeEmail = (e: TEventInput) => {
        dispatch({
            type: "UPDATE_EMAIL",
            payload: e.target.value
        });
    }
    return <ChangeText placeholder={"typing email"} label={"Change Email: "} onChange={handleChangeEmail}/>
}
