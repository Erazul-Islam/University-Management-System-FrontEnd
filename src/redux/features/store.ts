import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authslice'
import storage from "redux-persist/lib/storage";
import { FLUSH, PAUSE, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

import { baseApi } from "../api/baseApi";

const persistConfig = {
    key: 'auth',
    storage
}

const persistAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducerPath,
        auth: persistAuthReducer
    },
    middleware: (getDefaultMiddlewares) => {
        getDefaultMiddlewares({
            serializableCheck:{
                ignoredActions:[FLUSH,REHYDRATE,PAUSE,REGISTER,PURGE]
            }
        }).concat(baseApi.middleware)
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)