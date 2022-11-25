import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKeys } from "app/providers/StoreProvider/config/StateSchema";
import { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducerList = Partial<{
    [name in StateSchemaKeys]: Reducer;
}>;

type ReducersListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducerList;

    removeAfterUnmout?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
    children,
    removeAfterUnmout,
    reducers,
}) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]: ReducersListEntry) => {
                store.reducerManager.add(name, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        );

        return () => {
            if (removeAfterUnmout) {
                Object.entries(reducers).forEach(
                    ([name]: ReducersListEntry) => {
                        store.reducerManager.remove(name);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    }
                );
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{children}</>;
};
