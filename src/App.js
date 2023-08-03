import AddPizza from "./pages/AddPizza.jsx";
import PizzaList from "./pages/PizzaList.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/addpizza",
      element: <AddPizza />,
    },
    {
      path: "/classiques",
      element: <PizzaList active="classiques"/>,
    },
    {
      path: "/incontournables",
      element: <PizzaList active="incontournables"/>,
    },
    {
      path: "/romaroma",
      element: <PizzaList active="romaroma"/>,
    },
    {
      path: "/pates",
      element: <PizzaList active="pates"/>,
    },
    {
      path: "/desserts",
      element: <PizzaList active="desserts"/>,
    },
    {
      path: "/drinks",
      element: <PizzaList active="drinks"/>,
    },
    {
      path: "/divers",
      element: <PizzaList active="divers"/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>


  );
}