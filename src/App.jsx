import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { router } from './routes/Routing';
import { GoogleAnalytics } from './config/GoogleAnalytics';


function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <GoogleAnalytics />
    </HelmetProvider>
  )
}


export default App;
