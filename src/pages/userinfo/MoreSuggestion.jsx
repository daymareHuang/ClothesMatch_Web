import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/Dressify.css'

// Modal component to display the zoomed image
const ImageModal = ({ imageSrc, onClose }) => (
  <div className="modal" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <span className="close" onClick={onClose}>&times;</span>
      <img src={imageSrc} alt="Zoomed" className="modal-img" />
    </div>
  </div>
);

function MoreSuggestion() {

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image click and show zoomed image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="d-flex flex-nowrap justify-content-around align-items-center">
      <div><img src="./src/assets/img/icon/example_1.jpg" alt="" width="100px" id="suggestion_1" className="rounded" onClick={() => handleImageClick("./src/assets/img/icon/example_1.jpg")} /></div>
      <div><img src="./src/assets/img/icon/example_1.jpg" alt="" width="100px" id="suggestion_2" className="rounded" onClick={() => handleImageClick("./src/assets/img/icon/example_1.jpg")} /></div>
      <div><img src="./src/assets/img/icon/example_1.jpg" alt="" width="100px" id="suggestion_3" className="rounded" onClick={() => handleImageClick("./src/assets/img/icon/example_1.jpg")} /></div>
      {/* <div><img src="./src/assets/img/icon/dot-pending.svg" alt="" width="30px" /></div> */}

      {/* Show the modal if an image is selected */}
      {selectedImage && <ImageModal imageSrc={selectedImage} onClose={handleCloseModal} />}
    </div>
  )
}

export default MoreSuggestion