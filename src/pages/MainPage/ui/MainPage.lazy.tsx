import { lazy } from 'react';

export const MainPageLazy = lazy(
    () => new Promise((resolve) => {
        // @ts-ignore
        setTimeout(() => resolve(import('../ui/MainPage')), 1500);
    }),
);
