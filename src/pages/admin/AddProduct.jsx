import { useParams } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import { useRef, useState } from "react";
import { ReactComponent as Add } from "../../assets/images/icon/add.svg";
import { Button, Dropdown } from "react-bootstrap";

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
          border: "1px solid black",
          padding: "8px",
          minWidth: "250px",
          backgroundColor: "white"
        }}
        type={type}
      />
    </div>
  );
};

const LargeField = ({
  label,
  placeholder, 
  value, 
  setValue
}) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      minWidth: "40%",
      backgroundColor: "white",
      border: "1px solid black",
      padding: "8px",
      boxSizing: "border-box",
      height: "100%"
    }}>
      <div style={{ fontWeight: "bold", fontSize: "20px" }}>{label}</div>
      <textarea 
        value={value} 
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        style={{
          all: "unset",
          height: "100%",
          textAlign: "justify",
          wordWrap: "break-word"
        }}
      />
    </div>
  );
};

const ImageField = () => {
  const ref = useRef();
  const [image, setImage] = useState(null);

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please select a valid image file!");
    }
  };
  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        backgroundColor: "white",
        height: "150px",
        width: "150px",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
        cursor: "pointer"
      }}
      onClick={() => {
        !image ? ref.current.click() : setImage(null)
      }}
    >
      {
        !image ? <>
          <div>
            <input 
              type="file" 
              style={{ height: "0px", width: "0px" }}
              ref={ref}
              onChange={handleFileSelect} 
            />
            <Add style={{
              height: "24px",
              width: "24px"
            }} />
          </div>
          <div>Upload</div>
        </> : <img
          src={image} 
          style={{ height: "100%", width: "100%" }}
          onClick={() => { setImage(null) }} 
        />
      }
    </div>
  );
};

const AddProduct = () => {
  const [type, setType] = useState("Ikan");
  const [category, setCategory] = useState("Tidak Terdaftar");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [kind, setKind] = useState("");
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");
  const [description, setDescription] = useState("");
  return (
    <AdminLayout content={
      <div className="main-bg" style={{
         paddingTop: "8px",
         paddingRight: "64px",
         paddingLeft: "64px",
         boxSizing: "border-box"
      }}>
         <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px" 
         }}>
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
                  type === "Ikan" ? <>
                    <Field label={"Warna"} value={color} setValue={setColor} />
                    <Field label={"Ukuran"} value={size} setValue={setSize} />
                    <Field label={"Jenis"} value={kind} setValue={setKind} />
                  </> : <></>
                }

                {/* Pakan */}
                {
                  type === "Pakan" ? <Field label={"Berat"} value={weight} setValue={setWeight} />
                  : <></>
                }

                {/* Aquarium */}
                {
                  type === "Aquarium" ? <Field label={"Volume"} value={volume} setValue={setVolume} />
                  : <></>
                }
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              width: "40%"
            }}>
              <div style={{ height: "100%" }}>
                <LargeField 
                  label={"Deskripsi"}
                  placeholder={"Deskripsi produk"} 
                  value={description} 
                  setValue={setDescription} 
                />
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <Dropdown 
                  onSelect={e => { setType(e) }}
                  variant="secondary"
                >
                  <Dropdown.Toggle variant="secondary">{type}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey={"Ikan"}>Ikan</Dropdown.Item>
                    <Dropdown.Item eventKey={"Pakan"}>Pakan</Dropdown.Item>
                    <Dropdown.Item eventKey={"Aquarium"}>Aquarium</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown 
                  onSelect={e => { setCategory(e) }}
                  variant="secondary"
                >
                  <Dropdown.Toggle variant="secondary">{category}</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey={"Tidak Terdaftar"}>Tidak Terdaftar</Dropdown.Item>
                    <Dropdown.Item eventKey={"Terdaftar"}>Terdaftar</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px"
          }}>
            <ImageField />
            <ImageField />
            <ImageField />
            <ImageField />
          </div>
         </div>
         <div>

         </div>
      </div>
    } />
  );
}

export default AddProduct;