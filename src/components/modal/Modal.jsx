import React from 'react';
import './Modal.css';

const Modal = ( {closeModal, modalInfo} ) => {


  return (
    <div className="modal__background">
        <div className="container modal__container">
          <div className="titleCloseBtn">
            <button onClick={() => {closeModal(false)}}>&times;</button>
          </div>
          
          {/* <div className="title">
            <h2>{modalInfo.title}</h2>
          </div> */}

          <div className="body">
            <div className="modalImage">
              <img src={modalInfo.image} alt="image" />
            </div>

            <div className="description">
              <div className="summary">
                <h2>Description</h2>
                <p>{modalInfo.description}</p>
              </div>
              <div className="tech">
                <h2>Technologies Used</h2>
                <ul>
                  {modalInfo.tech.map(name => {
                    return(<li>{name}</li>)
                  })}
                </ul>
            </div>
            </div>

            
          </div>
        </div>
    </div>
  )
};

export default Modal