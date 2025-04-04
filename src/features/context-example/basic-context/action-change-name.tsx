import {useState} from "react";
import { useStateListener } from "@/hooks/use-state-listener";

export const ActionChangeName = () => {
    const [count, setCount] = useState(0)
    useStateListener(
        state => state.name,
        (s) => {
            console.log('name basic change is: ', s)
            setCount(prevState => prevState + 1);
        }
    )
    return <div>
        Re-render when  name change :{count}
    </div>
}
