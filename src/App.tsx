import { Navigate, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { ItemDetails } from "./pages/ItemDetails";
import { ItemDetailsLayout } from "./pages/ItemDetailsLayout";
import { MoviesLayout } from "./pages/MoviesLayout";
import { NowPlayingMovies } from "./pages/NowPlayingMovies";
import { OnTheAirSeries } from "./pages/OnTheAirSeries";
import { PopularMovies } from "./pages/PopularMovies";
import { PopularSeries } from "./pages/PopularSeries";
import { SeriesLayout } from "./pages/SeriesLayout";
import { TopRatedMovies } from "./pages/TopRatedMovies";
import { TopRatedSeries } from "./pages/TopRatedSeries";
import { UpcomingMovies } from "./pages/UpcomingMovies";
import { getDataById } from "./services/api/api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/movies/popular" replace />,
    index: true,
  },
  {
    path: "movies",
    element: <MoviesLayout />,
    children: [
      {
        path: ":id",
        element: <ItemDetails />,
      },
      {
        path: "popular",
        element: <PopularMovies />,
      },
      {
        path: "upcoming",
        element: <UpcomingMovies />,
      },
      {
        path: "top-rated",
        element: <TopRatedMovies />,
      },
      {
        path: "now-playing",
        element: <NowPlayingMovies />,
      },
    ],
  },
  {
    path: "series",
    element: <SeriesLayout />,
    children: [
      {
        path: "popular",
        element: <PopularSeries />,
      },
      {
        path: "top-rated",
        element: <TopRatedSeries />,
      },
      {
        path: "on-the-air",
        element: <OnTheAirSeries />,
      },
    ],
  },
  {
    path: "movie",
    element: <ItemDetailsLayout />,
    children: [
      {
        path: ":id",
        element: <ItemDetails />,
        loader: ({ params }) => {
          return getDataById(params.id, "movie");
        },
      },
    ],
  },
  {
    path: "serie",
    element: <ItemDetailsLayout />,
    children: [
      {
        path: ":id",
        element: <ItemDetails />,
        loader: ({ params }) => {
          return getDataById(params.id, "tv");
        },
      },
    ],
  },
]);

function App() {
  return (
    <div
      id="root"
      className="font-sans bg-gradient-to-b from-black to-sky-900"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="w-3/4 mx-auto rounded-lg" style={{ minHeight: "90vh" }}>
        <RouterProvider
          router={router}
          fallbackElement={
            <div className="text-white w-full text-center">Loading...</div>
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
