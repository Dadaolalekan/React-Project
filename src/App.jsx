import { StrictMode } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import UsersList from "./Components/UsersList";
import StateManagement from "./Components/stateManagement/stateManagement";
import Users from "./Components/Users";
import Hooks from "./Hooks"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from "./pages/landingPage";
import Dashboard from "./pages/dashboard";
import Productpage from "./pages/productpage";
import ProductDetails from "./pages/productdetails";
import NotFoundPage from "./pages/NotFoundPage";
// import PublicPagesLayout from "./Layouts/PublicPagesLayout";
import DashboardLayout from "./Layouts/DashboardLayout";
import PublicPagesLayout from "./Layouts/PublicPagesLayout";
import AppProvider from "../Context/AppProvider";



function App() {
  return (

    <div>
      <AppProvider>
    <BrowserRouter>
    <Routes>
      {/* <Route path="/*" element ={<PublicPagesLayout/>} /> */}

      <Route path="/dashboard/*" element ={<DashboardLayout/>} />
      <Route path="/*" element ={<PublicPagesLayout/>} />

    </Routes>
    </BrowserRouter>
      </AppProvider>



      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/productpage" element={<Productpage />} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter> */}

      {/* <h1>lg</h1>
        <Header/>
        <Footer/> */}
      {/* <Header/> */}
      {/* <UsersList/> */}
      {/* <StateManagement/> */}
      {/* <Users/> */}
      {/* <Hooks/> */}


    </div>

  );
}

export default App