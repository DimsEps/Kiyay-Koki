import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import { FaTrashAlt } from "react-icons/fa";
import "../../App.css";

const AdminPage = () => {
  const [data, setData] = useState([
    { id: 1, number: "+628123456", date: "02 Feb 2024" },
    { id: 2, number: "+628554433", date: "27 Nov 2024" },
    { id: 3, number: "+625544112", date: "05 Des 2024" },
    { id: 4, number: "+624534255", date: "15 Des 2024" },
    { id: 5, number: "+62666642", date: "20 Des 2024" },
  ]);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <AdminLayout
      content={
        <div className="main-bg" style={{ flex: 1, padding: "20px" }}>
          <input type="checkbox" style={{ width: "20px", marginTop: "50px" }} />
          <span style={{ fontSize: "15px", marginLeft: "5px" }}>
            Select All
          </span>

          <div
            className="detail-bar"
            style={{
              alignContent: "center",
              width: "1070px",
              height: "70px",
              borderRadius: "10px",
              background: "rgba(128, 128, 128, 0.5)",
            }}
          >
            {" "}
            <span
              style={{
                marginLeft: "100px",
                fontWeight: "500",
              }}
            >
              Nomor
            </span>
            <span
              style={{
                marginLeft: "25rem",
                fontWeight: "500",
              }}
            >
              Tanggal Pembelian
            </span>
            <span
              style={{
                marginLeft: "14rem",
                fontWeight: "500",
              }}
            >
              delete
            </span>
          </div>
          <div
            className="list-box"
            style={{
              width: "1070px",
              minHeight: "500px",
              borderRadius: "10px",
              background: "white",
            }}
          >
            <ul className="list-container">
              {data.map((item) => (
                <li
                  key={item.id}
                  onClick={() =>
                    navigate(`/admin/AdminContact/detail/${data.id}`)
                  }
                  className="list-item"
                >
                  <p className="number">{item.number}</p>
                  <p className="date">{item.date}</p>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrashAlt size={18} />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    />
  );
};

export default AdminPage;
