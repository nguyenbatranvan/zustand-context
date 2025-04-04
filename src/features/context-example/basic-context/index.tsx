import { Label } from "@/components/ui/label";
import { InputEmailBasic } from "./input-email-basic";
import {InputNameBasic} from "@/features/context-example/basic-context/input-name-basic.tsx";
import {UserProviderBasic} from "@/features/context-example/basic-context/provider/user-basic-context.tsx";
import {ShowNameBasic} from "@/features/context-example/basic-context/show-name-basic.tsx";
import {ShowEmailBasic} from "@/features/context-example/basic-context/show-email-basic.tsx";
import { ActionChangeName } from "./action-change-name";
import {ResetContextBasic} from "@/features/context-example/basic-context/reset-context-basic.tsx";

export const BasicContext = () => {
    return <UserProviderBasic>

        <div className={"grid gap-4"}>
            <Label className={"text-xl"}>
                Context From React
            </Label>
            <InputEmailBasic/>
            <InputNameBasic/>
            <ShowNameBasic/>
            <ShowEmailBasic/>
            <ActionChangeName/>
            <ResetContextBasic/>

        </div>
    </UserProviderBasic>
}
