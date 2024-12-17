import SideBar from "../../../components/admin/SideBar";

const AdminLayout = ({ content }) => {
  return (
    <div style={{
      height: "100vh",
      display: "flex"
    }}>
      <SideBar />
      <div style={{
        height: "100%",
        marginLeft: "240px"
      }}>
        {content}
      </div>
    </div>
  );
}

export default AdminLayout;