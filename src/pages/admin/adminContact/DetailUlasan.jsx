import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const DetailUlasan = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <AdminLayout
      content={
        <div className="main-bg">
          <div
            className="text-title"
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontWeight: "bold",
            }}
          >
            <span
              onClick={() => navigate(`/admin/adminContact/detail/${id}`)}
              style={{ cursor: "pointer" }}
            >
              Wishlist
            </span>
            <span
              onClick={() =>
                navigate(`/admin/AdminContact/detail/${id}/keranjang`)
              }
              style={{ cursor: "pointer" }}
            >
              Keranjang
            </span>
            <span
              onClick={() =>
                navigate(`/admin/AdminContact/detail/${id}/ulasan`)
              }
            >
              Ulasan
            </span>
            <span
              onClick={() =>
                navigate(`/admin/AdminContact/detail/${id}/alamat`)
              }
            >
              Daftar Alamat
            </span>
          </div>

          <div
            className="whitebox"
            style={{
              width: "940px",
              minHeight: "300px",
              border: "5px",
              background: "rgba(255, 255, 255, 0.3)",
              marginTop: "50px",
              marginLeft: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div>
              <p>Ulasan 1</p>
              <p>Ulasan 2</p>
              <p>Ulasan 3</p>
              <p>Ulasan 3</p>
              <p>Ulasan 3</p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DetailUlasan;
