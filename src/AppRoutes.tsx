import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Produtos from "./pages/Produtos.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      {
        path: "produtos",
        element: <Produtos />,
      },
     
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
