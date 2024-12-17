import React from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../../assets/images/icon/mainLogo1.png";
import { product } from "../../data/data";
import ProductManagement from "../../components/admin/ProductManagement";
import AdminLayout from "./layout/AdminLayout";
import SideBar from "../../components/admin/SideBar";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <AdminLayout content={
      <div className="main-bg" style={{ flex: 1, padding: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="secondary"
            style={{
              border: "none",
              borderRadius: "0px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            + Tambah Produk
          </Button>
          <div className="d-flex">
            <Dropdown style={{ marginRight: "10px" }}>
              <Dropdown.Toggle variant="secondary">Semua v</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Terdaftar</Dropdown.Item>
                <Dropdown.Item>Tidak Terdaftar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle variant="secondary">Semua v</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Ikan</Dropdown.Item>
                <Dropdown.Item>Pakan</Dropdown.Item>
                <Dropdown.Item>Aquarium</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>

        <h5 style={{ fontWeight: "bold", marginBottom: "20px", color: "#333" }}>
          Produk
        </h5>
        <ProductManagement product={product} />
      </div>
    } />
  );
};

export default AdminPage;
