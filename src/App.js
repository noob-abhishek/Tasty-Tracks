import { Provider } from "react-redux";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import store from "./utils/store";
import Footer from "./Components/Footer";


 

const App = ()=>{

  
//hussain naseed!!
  return (
    
    <Provider store={store}>
    <div >
  
  <Header  />
  <Outlet />
 
  </div>
  
  

  </Provider>
    
  );

  }
export default App;



