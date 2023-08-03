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
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>


  );
}