import React from "react";
import "../Content/content.css"
import AddIcon from '@mui/icons-material/Add';

export default function Content() {
  return (
    <div className="createcontent">
      <img
        className="image"
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).webp"
        alt=""
      />
      <form className="forms">
        <div className="form1">
          <label htmlFor="fileInput">
            <i className="icon"><AddIcon/></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="inputs"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="form1">
          <textarea
            className="content"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="submit" type="submit">
          Publish
        </button>
      </form>
    
    </div>
    
  );
}