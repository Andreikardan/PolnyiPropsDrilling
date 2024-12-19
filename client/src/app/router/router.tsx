import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { ROUTES } from '@/shared/enums/routes';
import { AuthPage } from '@/pages';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout/>,
    children: [
      {
        path: ROUTES.AUTH,
        element: <AuthPage />,
        
      }
     
    ]}

]) 
export default router;