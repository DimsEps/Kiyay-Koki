import { useParams } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import { useState } from "react";

const Field = ({ 
  label, 
  value, 
  setValue,
  type = "text"
 }) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{ fontWeight: "bold" }}>{label}</div>
      <input 
        value={value} 
        onChange={e => setValue(e.target.value)}
        style={{
          all: "unset",
          border: "2px solid black",
          padding: "8px",
          minWidth: "250px"
        }}
        type={type}
      />
    </div>
  );
}

const AddProduct = () => {
  const [category, setCategory] = useState("ikan")
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [discount, setDiscount] = useState("")
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [kind, setKind] = useState("")
  return (
    <AdminLayout content={
      <div className="main-bg" style={{ paddingTop: "8px" }}>
         <div style={{
          display: "flex",
          justifyContent: "space-between"
         }}>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
              <Field label={"Nama Produk"} value={productName} setValue={setProductName} />
              <Field label={"Harga"} value={price} setValue={setPrice} type="number" />
              <Field label={"Stok"} value={stock} setValue={setStock} type="number" />
              <Field label={"Diskon"} value={discount} setValue={setDiscount} />

              {/* Ikan */}
              {
                category === "ikan" ? <>
                  <Field label={"Warna"} value={color} setValue={setColor} />
                  <Field label={"Ukuran"} value={size} setValue={setSize} />
                  <Field label={"Jenis"} value={kind} setValue={setKind} />
                </> : <></>
              }

          </div>
         </div>
      </div>
    } />
  );
}

export default AddProduct;