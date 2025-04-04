import {ZustandContext} from "@/features/context-example/zustand-context";
import {BasicContext} from "@/features/context-example/basic-context";

export const ExampleContextPage=()=>{
    return <div className={"grid grid-cols-2 gap-4"}>
        <ZustandContext/>
        <BasicContext/>
    </div>
}
