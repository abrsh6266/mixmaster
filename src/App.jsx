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
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsletterAction } from "./pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
        index: true,
        element: (
          <div>
            <Landing />
          </div>
        ),
      },
      {
        loader: singleCocktailLoader,
        path: "cocktail/:id",
        element: (
          <div>
            <Cocktail />
          </div>
        ),
      },
      {
        path: "newsletter",
        action: newsletterAction,
        element: <NewsLetter />,
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
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};
export default App;
