import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Error,
  About,
  Cocktail,
  Landing,
  NewsLetter,
  SinglePageError,
} from "./pages";
import { loader as landingLoader } from "./pages/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        loader: landingLoader,
        errorElement: <SinglePageError />,
        index: true,
        element: (
          <div>
            <Landing />
          </div>
        ),
      },
      {
        path: "cocktail",
        element: (
          <div>
            <Cocktail />
          </div>
        ),
      },
      {
        path: "newsletter",
        element: (
          <div>
            <NewsLetter />
          </div>
        ),
      },
      {
        path: "about",
        element: (
          <div>
            <About />
          </div>
        ),
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
