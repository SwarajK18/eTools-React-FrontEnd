import React from "react";
import { Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
// import ViewNoteType from "./views/Master/noteType/ViewNoteType";
// import AddEditNoteType from "./views/Master/noteType/AddEditNoteType";
// import AddEditService from "./views/Master/service/AddEditService";
// import ViewService from "./views/Master/service/ViewService";
// import ViewVaccineType from "./views/Master/VaccineType/ViewVaccineType";
import ViewInsuranceType from "./views/Master/InsuranceCover/ViewInsuranceType";
import TopSecondHeader from "./components/header/TopSecondHeader";
import TopHeader from "./components/header/TopHeader";
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "viewinsurancetype", element: <ViewInsuranceType /> },
      // { path: "notetype", element: <ViewNoteType /> },
      // { path: "addnotetype", element: <AddEditNoteType /> },
      // { path: "viewservice", element: <ViewService /> },
      // { path: "viewvaccinetype", element: <ViewVaccineType /> },
      // { path: "addservice", element: <AddEditService /> },
      // { path: "addservice/:id/:name", element: <AddEditService /> },
      // { path: "addnotetype/:id/:name", element: <AddEditNoteType /> },
      {path: "/topsecondheader", element: <TopSecondHeader />},
      { path: "/", element: <MainLayout /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      // { path: 'login', element: <LoginView /> },
      // { path: 'login/:isFromCheckIn', element: <LoginView /> },
      // { path: 'register', element: <RegisterView /> },
      // { path: '404', element: <NotFoundView /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
