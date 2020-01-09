import React, { useState } from "react";
import PictureModal from "./PictureModal";

export const ForSaleItem = ({ product, image, price, desc }) => {

  const [stateImage, setImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => {
    setImage(image);
    setModalOpen(true);
  }

  const handleCloseModal = () => {
    setImage(null);
    setModalOpen(false);
  }

  return (
    <div className="list-item">
      <PictureModal isOpen={modalOpen} image={stateImage} closeModal={handleCloseModal} />
      <h3 className="list-item__title">{product}</h3>
      <img onClick={handleOpenModal} className="list-item__image" src={image} />
      <span className="list-item__sub-title">Price: {price}</span>
      <span className="list-item__sub-title">{desc}</span>
    </div>
  )
}