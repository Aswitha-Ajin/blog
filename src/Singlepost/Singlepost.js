import React from 'react'
import "../Singlepost/singlepost.css"
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

function Singlepost() {
  return (
    
       <div className="singlepost">
      <div className="singlepost1">
        <img
          className="singlepostimg"
          src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).webp"
          alt=""
        />
        <h1 className="title">
          Geology
          <div className="editing">
            <i className="icon "><ModeEditIcon/></i>
            <i className="icon "><DeleteIcon/></i>
          </div>
        </h1>
        <div className="postdetail">
          <span>
            Author:Anderson
            <b className="author">
            
            </b>
          </span>
          <span>1 hr ago</span>
        </div>
        <p className="contents">
        Geology is the science and study of the solid and liquid matter that constitutes the Earth. The field of geology encompasses the study of the composition, structure, physical properties, dynamics, and history of Earth materials, and the processes by which they are formed, moved, and changed. The field is a major academic discipline, and is also important for mineral and hydrocarbon extraction, knowledge about and mitigation of natural hazards, some Geotechnical engineering fields, and understanding past climates and environments.
          <br />
          
        </p>
      </div>
    </div>
    
  )
}

export default Singlepost
