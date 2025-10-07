import { Outlet } from "react-router-dom";
import "./App.css";
import Main_Layout from './components/layout/Main_Layout'
function App() {
  return (
    <>
      <Main_Layout></Main_Layout>
      <Outlet/>
    
    </>
  );
}

export default App;
