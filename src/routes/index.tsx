import { Navigate, Outlet } from 'react-router';

import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import NotFound from '@/features/misc/routes/NotFound';
import { RecipesRoutes } from '@/features/recipes';

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <Button className="mt-4" onClick={() => window.location.reload()}>
        Refresh
      </Button>
    </div>
  );
};

export const AppRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'recipes/*', element: <RecipesRoutes />, errorElement: <ErrorFallback /> },
      { path: '/404', element: <NotFound />, errorElement: <ErrorFallback /> },
      { path: '*', element: <Navigate to="." />, errorElement: <ErrorFallback /> },
    ],
    errorElement: <ErrorFallback />,
  },
];
