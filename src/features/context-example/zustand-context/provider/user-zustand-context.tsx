import {createStore, StoreApi} from "zustand/vanilla";
import {TParameterContext, UserState} from "@/features/context-example/context.types.ts";
import {subscribeWithSelector} from "zustand/middleware";
import {FC, useMemo} from "react";
import {createContext, useContextSelector} from "use-context-selector";
import {useStore} from "zustand/react";

const UserContextZustand = createContext<StoreApi<UserState> | null>(null);
const createUserStore = () =>
    createStore<UserState>()(subscribeWithSelector((set) => ({
        name: 'Alex',
        updateName: (name) => set({name}),
        reset: () => set({name: 'Alex',email:"test@gmail.com"}),
        email: "test@gmail.com",
        updateEmail: (email) => set({email}),
    })));

export const UserProviderZustand: FC<TParameterContext> = ({children}) => {
    const store = useMemo(() => createUserStore(), []);
    return <UserContextZustand.Provider value={store}>
        {children}
    </UserContextZustand.Provider>
};

export const useUserContextZustand = <TSelected = any>(selector: (data: UserState) => TSelected) => {
    const store = useContextSelector(UserContextZustand, (context) => context);
    if (!store) throw new Error('UserContextZustand must be used within a UserProviderZustand');
    return useStore(store, selector);
};

export const useUserStoreZustand = () => {
    const store = useContextSelector(UserContextZustand, (context) => context);
    if (!store) throw new Error('UserContextZustand must be used within a UserProviderZustand');
    return store;
};
