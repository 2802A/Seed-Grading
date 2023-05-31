import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Dropzone from "./Dropzone";
import { useState } from "react";

function Home() {
  const [showDropzone, setShowDropzone] = useState(false);

  const handleClick = () => {
    setShowDropzone(true);
  };

  return (
    <>
      <div className="home">
        <div className="header">
          <h1>Seed Mitra</h1>
          <h3>"Good seeds make good farmers."</h3>
          <h4>George Washington</h4>
        </div>
        {showDropzone && <Dropzone />}
        <div className="upload-buttons">
          <button onClick={handleClick}>
            <CloudUploadIcon />
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
