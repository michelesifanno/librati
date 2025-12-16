import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { router } from './routes/Routing';



function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}


export default App;
