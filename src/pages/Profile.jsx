import React, { useState } from "react";
import "../App.css";
import Navigasi from "../components/Navigasi";

const Profile = () => {
  // State untuk menyimpan daftar alamat
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Rumah",
      phone: "0819-3429-8038",
      address:
        "Jln Kebangsaan, gang merak No.26, Kedaton, Kota BandarLampung, Lampung. (rumah warna merah, tingkat dua, ada gambar ultramennya)",
    },
  ]);

  // State untuk menangani alamat baru
  const [newAddress, setNewAddress] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Fungsi untuk menambah alamat
  const addAddress = () => {
    if (newCategory && newPhone && newAddress) {
      const newId = addresses.length + 1;
      const newAddr = {
        id: newId,
        name: newCategory,
        phone: newPhone,
        address: newAddress,
      };
      setAddresses([...addresses, newAddr]);
      setShowModal(false); // Menutup modal setelah menambah alamat
    }
  };

  // Fungsi untuk menghapus alamat
  const removeAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  return (
    <>
      <Navigasi />
      <div className="main-bg">
        <div className="profile-box">
          <div className="d-flex">
            <div
              className="profile-pic"
              style={{
                width: "80px",
                height: "80px",
                background: "white",
                borderRadius: "100px",
                marginLeft: "50px",
                marginTop: "20px",
              }}
            >
              <i
                className="bi bi-person-fill"
                style={{ fontSize: "50px", marginLeft: "14px" }}
              />
            </div>
            <span
              style={{
                marginTop: "48px",
                marginLeft: "10px",
                fontWeight: "700",
              }}
            >
              0819-3429-8038
            </span>
          </div>

          <div className="text" style={{ marginTop: "25px" }}>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "700",
                marginLeft: "50px",
              }}
            >
              Daftar Alamat
            </span>

            {/* Tombol untuk membuka modal */}
            <button
              onClick={() => setShowModal(true)}
              style={{
                fontSize: "20px",
                fontWeight: "100",
                marginLeft: "50px",
                border: "none",
              }}
            >
              Tambah Alamat
            </button>
          </div>

          {/* Menampilkan daftar alamat */}
          {addresses.map((address) => (
            <div
              key={address.id}
              className="address-box"
              style={{
                background: "rgba(171, 170, 233, 0.69)",
                borderRadius: "10px",
                width: "1100px",
                minHeight: "200px",
                marginLeft: "50px",
                marginTop: "20px",
              }}
            >
              <span style={{ fontWeight: "bold", marginLeft: "10px" }}>
                {address.name}
              </span>

              {/* Tombol untuk menghapus alamat */}
              <button
                onClick={() => removeAddress(address.id)}
                style={{
                  borderRadius: "0px",
                  background: "none",
                  marginTop: "10px",
                  marginLeft: "950px",
                }}
              >
                Hapus
              </button>

              <p style={{ fontWeight: "800", marginLeft: "10px" }}>
                {address.name}
              </p>
              <span style={{ fontWeight: "100", marginLeft: "10px" }}>
                {address.phone}
              </span>
              <p style={{ fontWeight: "100", marginLeft: "10px" }}>
                {address.address}
              </p>
            </div>
          ))}
        </div>

        {/* Modal untuk menambah alamat */}
        {showModal && (
          <div
            className="modal-overlay"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "10px",
                width: "400px",
              }}
            >
              <h3>Tambah Alamat Baru</h3>
              <div style={{ marginBottom: "10px" }}>
                <label>Kategori Alamat</label>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Masukkan kategori (Rumah, Kosan, dll.)"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Nomor Telepon</label>
                <input
                  type="text"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="Masukkan nomor telepon"
                  style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label>Alamat</label>
                <textarea
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="Masukkan detail alamat"
                  style={{
                    width: "100%",
                    padding: "8px",
                    marginTop: "5px",
                    height: "100px",
                  }}
                />
              </div>
              <button
                onClick={addAddress}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "10px",
                }}
              >
                Tambah
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: "#f44336",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "5px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                Batal
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
