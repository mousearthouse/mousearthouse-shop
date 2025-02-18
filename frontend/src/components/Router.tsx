import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import {
    MainPage,
    ItemPage
} from '@/components/imports';

import { Layout } from '@/components/Layout/Layout';

import { ROUTES } from '@/utils/routes';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path={ROUTES.MAINPAGE} element = {<MainPage/>} />
            <Route path={ROUTES.ITEMPAGE} element = {<ItemPage/>} />
        </Route>,
    )
)

export const Router = () => <RouterProvider router={router} />;