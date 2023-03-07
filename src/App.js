import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import GameDetail from './pages/GameDetail';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/games/:gameId', element: <GameDetail /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
