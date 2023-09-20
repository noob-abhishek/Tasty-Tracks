import Header from "./Components/Header";
import { Outlet } from "react-router-dom";


 

const App = ()=>{

  
//hussain naseed!!
  return (
    <>
    <div className="bg-sky-50">
  
  <Header  />
  <Outlet />
  </div>
  
  

  
    </>
  );

  }
export default App;



