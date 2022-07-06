import React from "react";
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "60px" }}>
      <Link to="/product/search" style={{ padding: "20px" }}>
        search
      </Link>
      <Link to="/product/addProducts" style={{ padding: "20px" }}>
        AddProduct
      </Link>
      <Link to="/product/productList" style={{ padding: "20px" }}>
        List
      </Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;
