import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AdminPage from "./pages/admin/adminProduct/AdminPage";
import AddProduct from "./pages/admin/adminProduct/AddProducts";
import EditProduct from "./pages/admin/adminProduct/EditProducts";
import AdminContact from "./pages/admin/adminContact/AdminContact";
import AdminConfiguration from "./pages/admin/AdminConfiguration";
import ApikeyPage from "./pages/admin/ApikeyPage";
import DetailContact from "./pages/admin/adminContact/DetailContacts";
import DetailKeranjang from "./pages/admin/adminContact/DetailKeranjang";
import DetailUlasan from "./pages/admin/adminContact/DetailUlasan";
import DetailAlamat from "./pages/admin/adminContact/DetailAlamat";

function App() {
  return (
    <Router>
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
          path="/editProduct/:id"
          element={<PrivateRoute element={<EditProduct />} />}
        />
        <Route
          path="/admin/addProduct"
          element={<PrivateRoute element={<AddProduct />} />}
        />
        <Route
          path="/admin/AdminContact"
          element={<PrivateRoute element={<AdminContact />} />}
        />
        <Route
          path="/admin/AdminContact/detail/:id"
          element={<PrivateRoute element={<DetailContact />} />}
        />
        <Route
          path="/admin/AdminContact/detail/:id/keranjang"
          element={<PrivateRoute element={<DetailKeranjang />} />}
        />
        <Route
          path="/admin/AdminContact/detail/:id/ulasan"
          element={<PrivateRoute element={<DetailUlasan />} />}
        />
        <Route
          path="/admin/AdminContact/detail/:id/alamat"
          element={<PrivateRoute element={<DetailAlamat />} />}
        />
        <Route
          path="/admin/AdminConfiguration"
          element={<PrivateRoute element={<AdminConfiguration />} />}
        />
        <Route
          path="/admin/AdminConfiguration/ApikeyPage"
          element={<PrivateRoute element={<ApikeyPage />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
