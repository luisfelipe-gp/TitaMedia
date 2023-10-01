import './App.css';
import React from 'react';
import { useRoutes, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';


function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      }
    ]);
    return routes;
  };


  return (
    <div className="App">
      <BrowserRouter>
        <div style={{height: "100vh"}}>
            <AppRoutes />
        </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
