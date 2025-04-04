import {Dispatch, useContext} from "react";
import {TParameterContext, UserAction, UserState} from "../../context.types";
import {createContext} from "react";
import {useReducer} from "react";
import {FC} from "react";

interface UserContextType {
    state: UserState;
    dispatch: Dispatch<UserAction>;
}

const initialState: UserState = {
    name: 'Alex',
    reset: () => {

    },
    updateEmail: () => {

    },
    updateName: () => {

    },
    email: 'test@gmail.com',
};
const userReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
        case 'UPDATE_NAME':
            return {...state, name: action.payload};
        case 'UPDATE_EMAIL':
            return {...state, email: action.payload};
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};
const UserBasicContext = createContext<UserContextType | undefined>(undefined);
export const UserProviderBasic: FC<TParameterContext> = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    return (
        <UserBasicContext.Provider value={{state, dispatch}}>
            {children}
        </UserBasicContext.Provider>
    );
};

export const useUserContextBasic = (): UserContextType => {
    const context = useContext(UserBasicContext);
    if (!context) {
        throw new Error('useUserContextBasic must be used within a UserBasicProvider');
    }
    return context;
};
