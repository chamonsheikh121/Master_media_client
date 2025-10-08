
import { Outlet } from "react-router-dom";
import "./App.css";
import Main_Layout from './components/layout/Main_Layout'
import Footer from "./pages/Home/Footer";

function App() {
  return (
    <div>
      <Main_Layout></Main_Layout>
     <Outlet/>
    <Footer/>
    </div>
  );
}

export default App;
