import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import { Button, Container, Row, Col } from "react-bootstrap";

const ApikeyPage = () => {
  const apiData = [
    { namaAPI: "API_Pencarian", APIKey: "abc123", status: "aktif" },
    { namaAPI: "API_nama1", APIKey: "abc123", status: "aktif" },
    { namaAPI: "API_nama2", APIKey: "abc123", status: "aktif" },
    { namaAPI: "API_nama3", APIKey: "abc123", status: "aktif" },
  ];

  // Inline CSS Styles
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "center",
  };

  const headerStyle = {
    backgroundColor: "#d3d3d3",
    fontWeight: "bold",
  };

  const rowEvenStyle = {
    backgroundColor: "#f9f9f9",
  };

  const rowHoverStyle = {
    backgroundColor: "#f1f1f1",
    cursor: "pointer",
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
          <div>
            \
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={{ ...thTdStyle, ...headerStyle }}>nama API</th>
                  <th style={{ ...thTdStyle, ...headerStyle }}>API_Key</th>
                  <th style={{ ...thTdStyle, ...headerStyle }}>status</th>
                </tr>
              </thead>
              <tbody>
                {apiData.map((api, index) => (
                  <tr
                    key={index}
                    style={index % 2 === 0 ? rowEvenStyle : null}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        rowHoverStyle.backgroundColor)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        index % 2 === 0
                          ? rowEvenStyle.backgroundColor
                          : "transparent")
                    }
                  >
                    <td style={thTdStyle}>{api.namaAPI}</td>
                    <td style={thTdStyle}>{api.APIKey}</td>
                    <td style={thTdStyle}>{api.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      }
    />
  );
};

export default ApikeyPage;
