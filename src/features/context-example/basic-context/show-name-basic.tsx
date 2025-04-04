import {ShowText} from "@/features/context-example/shared-context-ui/show-text.tsx";
import {useUserContextBasic} from "@/features/context-example/basic-context/provider/user-basic-context.tsx";

export const ShowNameBasic = () => {
    const {state} = useUserContextBasic();
    return <ShowText email={state.name} label={"Component show name"}/>
}
