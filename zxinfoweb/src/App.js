import "./App.css";
import Home from "./Components/HomeComponent/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Components/Layout";
import AboutComponent from "./Components/AboutComponent/AboutComponent";
import ContactComponent from "./Components/ContactComponent/ContactComponent";
import PageComponent from "./Components/PageComponent/PageComponent";
import ServiceComponent from "./Components/ServiceComponent/ServiceComponent";
import InfoPageComponent from "./Components/AboutComponent/InfoPageComponent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<AboutComponent />} />
      <Route path="contact" element={<ContactComponent />} />
      <Route path="page" element={<PageComponent />}></Route>
      <Route path="services" element={<ServiceComponent />}>
        <Route path="infopage" element={<InfoPageComponent />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App ">
      {/* <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
