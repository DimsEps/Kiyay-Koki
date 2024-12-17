import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigasi from "./components/Navigasi";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import DetailProduct from "./pages/DetailProduct";
import Ulasan from "./pages/UlasanProduct";
import OtpPage from "./pages/OtpPage";
import SearchResult from "./pages/SearchResult";
import PrivateRoute from "./components/PrivateRoute";
import AdminPage from "./pages/admin/AdminPage";
import AddProduct from "./pages/admin/AddProduct";

function App() {
  return (
    <Router>
      <Navigasi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OtpPage" element={<OtpPage />} />
        <Route path="/SearchResult" element={<SearchResult />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/ulasan/:id" element={<Ulasan />} />

        {/* admin */}
        <Route
          path="/admin"
          element={<PrivateRoute element={<AdminPage />} />}
        />
        <Route 
          path="/admin/addProduct"
          element={<PrivateRoute element={<AddProduct />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
