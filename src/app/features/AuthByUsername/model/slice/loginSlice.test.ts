import { DeepPartial } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'username',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('new username'))).toEqual({ username: 'new username' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('321'))).toEqual({ password: '321' });
    });
});
