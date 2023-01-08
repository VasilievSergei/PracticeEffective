import React from 'react';

import { createBrowserRouter, Navigate } from 'react-router-dom';
import PageContainer from 'components/PageContainer';

import { characters } from './Characters';
import { comics } from './Comics';
import { series } from './Series';

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="characters" />
  },
  {
    path: '/characters',
    element: <PageContainer />,
    loader: () => {
      return characters;
    }
  },
  {
    path: '/comics',
    element: <PageContainer />,
    loader: () => {
      return comics;
    }
  },
  {
    path: '/series',
    element: <PageContainer />,
    loader: () => {
      return series;
    }
  }
]);

export default router;
