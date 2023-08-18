import AddPizza from "./pages/AddPizza.jsx";
import Home from "./pages/Home.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PizzaPage from "./pages/PizzaPage.jsx";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/addpizza",
      element: <AddPizza />,
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
      element: <CategoryPage active="pates"/>,
    },
    {
      path: "/desserts",
      element: <CategoryPage active="desserts"/>,
    },
    {
      path: "/drinks",
      element: <CategoryPage active="drinks"/>,
    },
    {
      path: "/divers",
      element: <CategoryPage active="divers"/>,
    },
    {
      path: "/pizza/:id",
      element: <PizzaPage/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>


  );
}