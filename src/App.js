import AddPizza from "./pages/AddPizza.jsx";
import Home from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OrderNow from "./pages/OrderNow.jsx";
import PastaPage from "./pages/PastaPage.jsx";
import DessertsPage from "./pages/DessertsPage.jsx";
import BoissonsPage from "./pages/BoissonsPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { RequireAuth } from "react-auth-kit";
import EditPizza from "./pages/EditPizza.jsx";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/addpizza",
      element: <RequireAuth loginPath="/login"><AddPizza /></RequireAuth>,
    },
    {
      path: "/editpizza",
      element: <RequireAuth loginPath="/login"><EditPizza /></RequireAuth>,
    },
    {
      path: "/order",
      element: <OrderNow />,
    },
    {
      path: "/",
      element: <Home active="home"/>,
    },
    {
      path: "/classiques",
      element: <CategoryPage active="classiques"/>,
    },
    {
      path: "/incontournables",
      element: <CategoryPage active="incontournables"/>,
    },
    {
      path: "/romaroma",
      element: <CategoryPage active="romaroma"/>,
    },
    {
      path: "/pates",
      element: <PastaPage active="pates"/>,
    },
    {
      path: "/desserts",
      element: <DessertsPage active="desserts"/>,
    },
    {
      path: "/drinks",
      element: <BoissonsPage active="drinks"/>,
    },
    {
      path: "/admin",
      element: <RequireAuth loginPath="/login"><AdminPage /></RequireAuth>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    /*{
      path: "/pizza/:id",
      element: <PizzaPage/>,
    },*/
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>


  );
}