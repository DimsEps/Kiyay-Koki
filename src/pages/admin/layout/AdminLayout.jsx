import SideBar from "../../../components/admin/SideBar";

const AdminLayout = ({ content }) => {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      width: "100vw"
    }}>
      <SideBar />
      <div style={{
        height: "100%",
        width: "100%",
        overflowX: "hidden",
        paddingTop: "70px",
        boxSizing: "border-box"
      }}>
        {content}
      </div>
    </div>
  );
}

export default AdminLayout;