import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/create"
          element={<CreateBlog />}
        />

        <Route
          path="/edit/:id"
          element={<EditBlog />}
        />

      </Routes>

      <ToastContainer />

    </BrowserRouter>

  );
}

export default App;