import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CheckConnection from "./common/CheckConnection";
import Home from "./Components/Home";
import Products from "./Components/Products";
import AddProduct from "./Components/Products/AddProduct";
import ProductList from "./Components/Products/ProductList";
import Search from "./Components/Products/Search";
import Profile from "./Components/Profile";

function App() {
  return (
    <CheckConnection>
      <BrowserRouter>
        <div style={{ textAlign: "center" }}>
          <Link to="/" style={{ padding: "20px", textAlign: "center" }}>
            Home
          </Link>
          <Link to="/profile" style={{ padding: "20px", textAlign: "center" }}>
            profile
          </Link>
          <Link to="/product" style={{ padding: "20px", textAlign: "center" }}>
            Product
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<Products />}>
            <Route path="addProducts" element={<AddProduct />} />
            <Route path="search" element={<Search />} />
            <Route path="productList" element={<ProductList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CheckConnection>
  );
}

export default App;
