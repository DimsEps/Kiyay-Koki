import React, { useEffect } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { product } from "../data/data";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Ulasan = () => {
  const { id } = useParams();
  const selectedProduct = product.find((item) => item.id === parseInt(id));

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) =>
      i < count ? (
        <FaStar key={i} color="gold" />
      ) : (
        <FaRegStar key={i} color="gray" />
      )
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!selectedProduct) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="main-bg">
      <div
        className="linking d-flex"
        style={{
          marginLeft: "460px",
          marginTop: "5rem",
          marginBottom: "-5rem",
        }}
      >
        <Link
          to={`/product/${selectedProduct.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span style={{ fontWeight: "bold" }}>DETAIL</span>
        </Link>
        <Link
          to={`/ulasan/${selectedProduct.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <span style={{ fontWeight: "bold", marginLeft: "20px" }}>ULASAN</span>
        </Link>
      </div>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <div className="detailImage">
          <img
            src={selectedProduct.image}
            alt="product alt"
            style={{
              width: "400px",
              marginLeft: "40px",
              marginTop: "5rem",
              boxShadow: "-10px 10px 3px rgba(0, 0, 0, 0.5)",
            }}
          />
          <div
            className="star"
            style={{
              width: "",
              marginTop: "15px",
              marginLeft: "40px",
            }}
          >
            {renderStars(selectedProduct.star)}
            <span
              style={{
                color: "grey",
                marginLeft: "2px",
              }}
            >
              ({selectedProduct.jumlahUlasan})
            </span>
          </div>
        </div>

        {/* isi deksripsi box */}
        <div
          className="deskripsi-box"
          style={{
            width: "800px",
            minHeight: "600px",
            border: "5px",
            background: "rgba(255, 255, 255, 0.3)",
            marginTop: "5rem",
            marginLeft: "20px",
          }}
        >
          <h2>ULASAN</h2>
          <div className="rating-container">
            <div className="score">4.9</div>
            <div className="rating-star">⭐⭐⭐⭐⭐</div>
          </div>

          <div className="bar-container">
            <div>
              5 ⭐
              <div className="bar">
                <div className="bar-inner" style={{ width: "80%" }}></div>
              </div>
              80%
            </div>
            <div>
              4 ⭐
              <div className="bar">
                <div className="bar-inner" style={{ width: "12%" }}></div>
              </div>
              12%
            </div>
            <div>
              3 ⭐
              <div className="bar">
                <div className="bar-inner" style={{ width: "5%" }}></div>
              </div>
              5%
            </div>
            <div>
              2 ⭐
              <div className="bar">
                <div className="bar-inner" style={{ width: "3%" }}></div>
              </div>
              3%
            </div>
            <div>
              1 ⭐
              <div className="bar">
                <div className="bar-inner" style={{ width: "0%" }}></div>
              </div>
              0%
            </div>
          </div>

          <div className="reviews">
            <div className="review">
              <div className="review-content">
                <strong>0812345678</strong>
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>Proudknya bagus dan berkualitas</p>
              </div>
            </div>

            <div className="review">
              <div className="review-content">
                <strong>0823415678</strong>
                <div className="stars">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <p>Ikan yang sampai sangat bagus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ulasan;
