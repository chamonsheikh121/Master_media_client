import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home/Home";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Gallery from "@/pages/Galaries/Galaries";
import ContactForm from "@/pages/ContactUs/ContactUs";
import OurPackagesPage from "@/pages/Packages/Packages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path:'/about-us',
        element: <AboutUs/>,
      },
      {
        path:'/packages',
        element: <OurPackagesPage/>,
      },
      {
        path:'/galleries',
        element: <Gallery/>,
      },
      {
        path:'/contact-us',
        element: <ContactForm/>,
      },
    ],
  },
]);

export default router;
