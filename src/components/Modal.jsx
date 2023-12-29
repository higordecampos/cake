import React from "react";

export default function Modal({ isOpen, toggleModal, title, description }) {
  return (
    <div
      className={`modal fade ${isOpen ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog " role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={toggleModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{description}</div>
          <div className="modal-footer">
            <button
              type="button"
              onClick={toggleModal}
              className="btn btn-primary pl-5 pr-5"
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
