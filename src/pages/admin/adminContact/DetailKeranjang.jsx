import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import product1 from "../../../assets/images/Product/p1.jpg";

const DetailKeranjang = () => {
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
            className="judul-detail"
            style={{
              width: "940px",
              height: "50px",
              border: "5px",
              background: "#BBCCE3",
              marginTop: "50px",
              marginLeft: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginLeft: "50px" }}>Keterangan Produk</span>
          </div>
          <div
            className="whitebox"
            style={{
              width: "940px",
              height: "250px",
              border: "5px",
              background: "white",
              marginTop: "0px",
              marginLeft: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input type="checkbox" style={{ marginLeft: "20px" }} />
            <img
              src={product1}
              alt="Fish alt"
              style={{
                width: "250px",
                height: "170px",
                marginLeft: "20px",
                boxShadow: "-5px 5px 3px rgba(0, 0, 0, 0.5)",
              }}
            ></img>

            <div className="deskripsi-product-cart">
              <h3
                style={{
                  fontWeight: "700",
                  marginLeft: "20px",
                }}
              >
                Oranda Sort Tail
              </h3>

              <div className="price d-flex">
                <h3
                  style={{
                    fontWeight: "400",
                    marginLeft: "20px",
                  }}
                >
                  Rp180.000
                </h3>

                <h3
                  style={{
                    fontWeight: "200",
                    textDecoration: "line-through",
                    color: "gray",
                    marginLeft: "10px",
                  }}
                >
                  Rp200.000
                </h3>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DetailKeranjang;
