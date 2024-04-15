import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Preloader from "./assets/preloader.gif";
const App = lazy(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="flex gap-6 text-white fixed top-0 left-0  justify-center items-center w-full h-screen bg-black">
          <div className="h-[17rem] w-[17rem] md:w-[18rem] ">
            <img
              className="object-center w-full h-full object-cover"
              src={Preloader}
              alt=""
            />
          </div>
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>
);
