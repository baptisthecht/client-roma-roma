import AddPizza from "./pages/AddPizza.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/addpizza",
      element: <AddPizza />,
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
      path: "/pizzadumoment",
      element: <CategoryPage active="pizzadumoment"/>,
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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>


  );
}