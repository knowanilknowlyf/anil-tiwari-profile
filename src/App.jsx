import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {
  Admin,
  ContactMe,
  DashBoard,
  EducationalDetails,
  Error,
  Landing,
  Login,
  ProjectDetails,
  TechStack,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      { index: true, element: <Landing /> },
      { path: "contact-me", element: <ContactMe /> },
      { path: "admin", element: <Admin /> },
      { path: "educational-details", element: <EducationalDetails /> },
      { path: "tech-stack", element: <TechStack /> },
      { path: "login", element: <Login /> },
      { path: "project-details", element: <ProjectDetails /> },
      
    ],
    errorElement: <Error />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
