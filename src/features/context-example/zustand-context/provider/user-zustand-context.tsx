import {createStore, StoreApi} from "zustand/vanilla";
import {TParameterContext, UserState} from "@/features/context-example/context.types.ts";
import {subscribeWithSelector} from "zustand/middleware";
import {createContext, FC, useContext, useMemo} from "react";
import {useStore} from "zustand/react";
// https://zustand.docs.pmnd.rs/migrations/migrating-to-v4#createcontext
// https://zustand.docs.pmnd.rs/previous-versions/zustand-v3-create-context#createcontext-from-zustand/context
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
    const store = useContext(UserContextZustand);
    if (!store) throw new Error('UserContextZustand must be used within a UserProviderZustand');
    return useStore(store, selector);
};

export const useUserStoreZustand = () => {
    const store = useContext(UserContextZustand);
    if (!store) throw new Error('UserContextZustand must be used within a UserProviderZustand');
    return store;
};
