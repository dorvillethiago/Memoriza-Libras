import "../index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./modules/Root/Page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
