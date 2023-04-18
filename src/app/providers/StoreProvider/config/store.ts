import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'app/entities/Counter';
import { userReducer } from 'app/entities/User';
import { loginReducer } from 'app/features/AuthByUsername';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
