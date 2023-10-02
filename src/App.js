import { Provider } from "react-redux";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import store from "./utils/store";


 

const App = ()=>{

  
//hussain naseed!!
  return (
    
    <Provider store={store}>
    <div className="bg-sky-50">
  
  <Header  />
  <Outlet />
  </div>
  
  

  </Provider>
    
  );

  }
export default App;



