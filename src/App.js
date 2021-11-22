// import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { ToastContainer } from 'react-toastify'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AxiosSetup from './AxiosSetup';
import TopHeader from './components/header/TopHeader';
import TopSecondHeader from './components/header/TopSecondHeader';
import Sidebar from './components/header/Sidebar';


function App() {

  const routing = useRoutes(routes);
  return (
    <>
    <TopHeader />
    <TopSecondHeader />
    <Sidebar />
    <AxiosSetup />
        {routing}
        </>
  );
}

export default App;
