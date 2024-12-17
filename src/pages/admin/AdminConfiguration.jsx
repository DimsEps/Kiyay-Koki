import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import { Button, Container, Row, Col, ListGroup, Image } from "react-bootstrap";

const AdminConfiguration = () => {
  const [admins, setAdmins] = useState([
    { id: 1, phone: "+621234567" },
    { id: 2, phone: "+621234567" },
    { id: 3, phone: "+621234567" },
    { id: 4, phone: "+621234567" },
  ]);

  // Fungsi untuk menghapus admin
  const handleDelete = (id) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  // Fungsi untuk menambah admin
  const handleAdd = () => {
    const newId = admins.length + 1;
    const newAdmin = { id: newId, phone: "+621234567" };
    setAdmins([...admins, newAdmin]);
  };

  return (
    <AdminLayout
      content={
        <Container
          style={{
            backgroundColor: "#f0f4f8",
            minHeight: "100vh",
            padding: "20px",
          }}
        >
          {/* Header */}
          <Row className="mb-4">
            <Col>
              <Link to={`/admin/AdminConfiguration`}>
                <h3 style={{ fontWeight: "bold" }}>Admin</h3>
              </Link>
            </Col>
            <Col className="text-center">
              <Link to={`/admin/AdminConfiguration/ApikeyPage`}>
                <h3 style={{ fontWeight: "bold" }}>API_Key</h3>
              </Link>
            </Col>
            <Col className="text-end">
              <Button
                variant="success"
                style={{ borderRadius: "20px", padding: "5px 15px" }}
              >
                Update WA
              </Button>
            </Col>
          </Row>

          {/* Tambah Admin */}
          <Row className="mb-3">
            <Col className="text-end">
              <Button
                onClick={handleAdd}
                variant="primary"
                style={{ borderRadius: "5px", padding: "5px 15px" }}
              >
                + Admin
              </Button>
            </Col>
          </Row>

          {/* List Admin */}
          <ListGroup>
            {admins.map((admin) => (
              <ListGroup.Item
                key={admin.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="https://via.placeholder.com/40"
                    roundedCircle
                    style={{ marginRight: "15px" }}
                  />
                  <span style={{ fontSize: "16px", fontWeight: "bold" }}>
                    {admin.phone}
                  </span>
                </div>
                <Button
                  onClick={() => handleDelete(admin.id)}
                  variant="info"
                  style={{
                    color: "white",
                    borderRadius: "5px",
                    padding: "3px 20px",
                  }}
                >
                  Hapus
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      }
    />
  );
};

export default AdminConfiguration;
