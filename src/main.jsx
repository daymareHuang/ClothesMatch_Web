import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/dresswall.css'
import Dresswall from "./pages/Dresswall.jsx"
import Selfpage from "./pages/Selfpage.jsx"
import WallSearch from "./pages/WallSearch.jsx"
import Wallsearchresult from "./pages/WallSearchResult.jsx"

const router = createBrowserRouter([
  {
    path: "/dresswall",
    element: <Dresswall />,
  }, 
  {
    path: "/dresswall/yourself",
    element: <Selfpage />
  },
  {
    path: "/dresswall/search",
    element: <WallSearch />
  },
  {
    path: "/dresswall/result",
    element: <Wallsearchresult />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)