import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/Dressify.css'
import Dresswall from "./pages/dresswall/Dresswall.jsx"
import Selfpage from "./pages/dresswall/Selfpage.jsx"
import WallSearch from "./pages/dresswall/WallSearch.jsx"
import Wallsearchresult from "./pages/dresswall/WallSearchResult.jsx"
// 這裡以下的路徑請更改
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Modification from './pages/Modification';



const router = createBrowserRouter([
  {
    path: "/dresswall",
    element: <Dresswall />,
  }, 
  {
    path: "/dresswall/Yourself",
    element: <Selfpage />
  },
  {
    path: "/dresswall/Search",
    element: <WallSearch />
  },
  {
    path: "/dresswall/Result",
    element: <Wallsearchresult />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Register />
  },
  {
    path: "/Modification",
    element: <Modification />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)