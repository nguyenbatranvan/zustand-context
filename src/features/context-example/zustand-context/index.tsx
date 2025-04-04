import {InputNameZustand} from "@/features/context-example/zustand-context/input-name-zustand.tsx";
import {ShowNameZustand} from "@/features/context-example/zustand-context/show-name-zustand.tsx";
import {ShowEmailZustand} from "@/features/context-example/zustand-context/show-email-zustand.tsx";
import {ActionChangeNameZustand} from "@/features/context-example/zustand-context/action-change-name-zustand.tsx";
import { Label } from "@/components/ui/label";
import {InputEmailZustand} from "@/features/context-example/zustand-context/input-email-zustand.tsx";
import {ResetContextZustand} from "@/features/context-example/zustand-context/reset-context-zustand.tsx";
import { UserProviderZustand } from "./provider/user-zustand-context";

export const ZustandContext = () => {
    return <UserProviderZustand>

        <div className={"grid gap-4"}>
            <Label className={"text-xl"}>
                Context Zustand + use-context-selector
            </Label>
            <InputEmailZustand/>
            <InputNameZustand/>
            <ShowNameZustand/>
            <ShowEmailZustand/>
            <ActionChangeNameZustand/>
            <ResetContextZustand/>

        </div>
    </UserProviderZustand>
}
