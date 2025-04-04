import {ChangeEvent, ReactNode} from "react";

export interface UserState {
    name: string;
    email: string;
    updateName: (name: string) => void;
    reset: () => void;
    updateEmail: (email: string) => void;
}

export type TParameterContext = {
    children: ReactNode;
}

export type TEventInput = ChangeEvent<HTMLInputElement>;
export type UserAction =
    | { type: 'UPDATE_NAME'; payload: string }
    | { type: 'UPDATE_EMAIL'; payload: string }
    | { type: 'RESET' };
