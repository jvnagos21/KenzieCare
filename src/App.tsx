import React from "react";
import { ToastContainer } from "react-toastify";
import { RoutesComponent } from "./Routes/routes";

function App() {
  return (
    <div className="App">
      <RoutesComponent />
      <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
          /> 
    </div>
  );
}

export default App;
