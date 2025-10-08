import { Outlet } from "react-router-dom";
import "./App.css";
import Main_Layout from './components/layout/Main_Layout'
import Footer from "./pages/Home/Footer";

function App() {
  return (
    <>
      <Main_Layout></Main_Layout>
      <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
