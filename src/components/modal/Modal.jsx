import React from 'react';
import './Modal.css';

const Modal = ( {closeModal, modalInfo} ) => {


  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
        <button onClick={() => {closeModal(false)}}>&times;</button>
        </div>
        
        <div className="title">
          <h2>{modalInfo.title}</h2>
        </div>

        <div className="body">
          <div className="modalImage">
            <img src={modalInfo.image} alt="image" />
          </div>

          <div className="description">
            <p>{modalInfo.description}</p>
          
          <h3>Technologies Used</h3>
          <ul>
            {modalInfo.tech.map(name => {
              return(<li>{name}</li>)
            })}
          </ul>
            
          </div>
          
        </div>
      </div>
    </div>
  )
};

export default Modal