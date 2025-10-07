import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "./components/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
   <ThemeProvider defaultTheme="dark">
     <Provider store={store}>
    <PersistGate persistor={persistor}>
        <RouterProvider router={router}></RouterProvider>
    </PersistGate>
    </Provider>
   </ThemeProvider>
  </StrictMode>
);
