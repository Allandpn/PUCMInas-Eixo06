import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Agendamentos from "./pages/agendamentos/Agendamentos.jsx";
import AgendamentoDetails from "./pages/agendamentos/AgendamentoDetails.jsx";
import Pacientes from "./pages/pacientes/Pacientes.jsx";
import PacienteDetails from "./pages/pacientes/PacienteDetails.jsx";
import ErrorPage from "./pages/errors/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/agendamentos",
        element: <Agendamentos />,
      },
      {
        path: "/agendamento/:id",
        element: <AgendamentoDetails />,
      },
      {
        path: "/pacientes",
        element: <Pacientes />,
      },
      {
        path: "/paciente/:id",
        element: <PacienteDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
