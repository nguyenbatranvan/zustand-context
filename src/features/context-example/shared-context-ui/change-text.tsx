import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label";
import {ComponentProps, FC, ReactNode} from "react";

type TChangeTextProps = ComponentProps<"input"> & {
    label: ReactNode;
};
export const ChangeText: FC<TChangeTextProps> = ({label, ...rest}) => {

    return <div className={"grid border-pink-300 border-2 border-dashed p-4 gap-2"}>
        <Label>
            {label}
        </Label>
        <Input {...rest}/>
    </div>
}
