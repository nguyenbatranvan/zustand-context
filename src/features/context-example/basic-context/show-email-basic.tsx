import {ShowText} from "@/features/context-example/shared-context-ui/show-text.tsx";
import {useUserContextBasic} from "@/features/context-example/basic-context/provider/user-basic-context.tsx";

export const ShowEmailBasic = () => {
    const {state} = useUserContextBasic();
    return <ShowText label={"Component show email"} email={state.email}/>
}
