import {FC} from "react";
import {Label} from "@/components/ui/label.tsx";

interface IProps {
    email: string;
    label: string;
}

export const ShowText: FC<IProps> = ({email, label}) => {
    return <div className={"border-2 rounded-lg border-pink-300 border-dashed flex p-4 gap-4"}>
        <Label>
            {label}:
        </Label>
        <div className={"bg-pink-400 p-2 rounded-md text-xs text-white"}>
            {email}
        </div>
    </div>
}
