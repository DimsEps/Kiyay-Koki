import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";

const DetailAlamat = () => {
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
            style={{
              background: "rgba(171, 170, 233, 0.69)",
              borderRadius: "10px",
              width: "900px",
              minHeight: "200px",
              marginLeft: "110px",
              marginTop: "70px",
            }}
          >
            ALAMAT 1
          </div>
          <div
            style={{
              background: "rgba(171, 170, 233, 0.69)",
              borderRadius: "10px",
              width: "900px",
              minHeight: "200px",
              marginLeft: "110px",
              marginTop: "20px",
            }}
          >
            ALAMAT 2
          </div>
        </div>
      }
    />
  );
};

export default DetailAlamat;
