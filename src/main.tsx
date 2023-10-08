import "../index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./modules/Root/Page.tsx";
import Credits from "./modules/Credits/Page.tsx"
import Game from "./modules/Game/Page.tsx";
import store from './store'
import { Provider } from 'react-redux'
import Tutorial from "./modules/Tutorial/Page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },
  {
    path: "/credits",
    element: <Credits/>
  },
  {
    path: "/game",
    element: <Game/>
  },
  {
    path: "/tutorial",
    element: <Tutorial/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
