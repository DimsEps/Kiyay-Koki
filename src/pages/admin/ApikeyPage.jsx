import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import { Button, Container, Row, Col, ListGroup, Image } from "react-bootstrap";

const ApikeyPage = () => {
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
                variant="primary"
                style={{ borderRadius: "5px", padding: "5px 15px" }}
              >
                + API key
              </Button>
            </Col>
          </Row>

          {/* List Admin */}
        </Container>
      }
    />
  );
};

export default ApikeyPage;
