import { FaUpload, FaWindowClose } from "react-icons/fa";

export const ShiureiToraCollection = () => {
  return (
    <div className="popup popup-open">
      <FaWindowClose className="popup-close" />
      <div className="popup-container">
        {/* <img src={require("./images/1.jpg")} alt=""></img> */}
        <form className="popup-form">
          <div className="popup-form-content">
            <label className="popup-form-label">שם השיעור:</label>
            <input
              className="popup-form-input"
              placeholder="שם השיעור"
              type="text"
            ></input>
          </div>

          <label htmlFor="inputFile" className="custom-file-upload">
            <FaUpload />
          </label>
          <input
            type="file"
            //   accept=".pdf, .doc, .docx"
            // onChange={handleChange}
            id="inputFile"
          />
        </form>
      </div>
    </div>
  );
};
