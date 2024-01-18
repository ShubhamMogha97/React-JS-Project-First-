import React, { lazy, Suspense, useEffect, useState } from "react"; // This refers react inside Node module
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header"; // Named export
// import Body from "./components/Body"; // Export default
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "../utils/userContext";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Shubham Mogha",
    };
    setUserName(data.name);
  },[]);
  // change the value of default UserContext

  return (
    <UserContext.Provider value={{ loggedUser: userName }}> {/*  */}
    <div className="app">
      <UserContext.Provider value={{ loggedUser: "userName" }}>
        <Header /> {/*Header wull fix here */}
      </UserContext.Provider>
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};
// chunking
// Lazy Loading - It comes when it loads only
// Dynamic bundling
// code splitting
// dynamic Import
const Grocery = lazy(() => import("./components/Grocery"));
const Body = lazy(() => import("./components/Body"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h3>Body page is laoding</h3>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Page is loading........, Please wait</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
