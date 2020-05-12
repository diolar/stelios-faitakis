import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './style.scss';

ReactModal.setAppElement('#___gatsby');

const EyeIcon = () => (
  <div className="icon icon--narrow">
    <svg className="eye" viewBox="0 0 151 88" xmlns="http://www.w3.org/2000/svg">
      <path d="M75.554 1c31.821 0 59.6 17.243 74.553 42.882-14.953 25.639-42.732 42.882-74.553 42.882-14.033 0-27.28-3.353-38.988-9.301A86.71 86.71 0 011 43.882C15.954 18.243 43.732 1 75.554 1zm.001 2C44.587 3 17.553 19.438 3 43.88c8.135 13.663 20.17 24.825 34.613 32.013 11.393 5.67 24.285 8.867 37.942 8.867 30.968 0 58.003-16.438 72.555-40.88C133.558 19.438 106.523 3 75.555 3zm.687 14c15.046 0 27.243 12.197 27.243 27.243S91.288 71.486 76.242 71.486C61.197 71.486 49 59.289 49 44.243S61.197 17 76.242 17zm-.002 2C62.3 19 51 30.302 51 44.245 51 58.188 62.3 69.49 76.24 69.49c13.94 0 25.24-11.302 25.24-25.245C101.48 30.302 90.18 19 76.24 19z" />
      <path d="M75.982 70C59.303 70.667 50.309 61.667 49 43h53c-.667 17.333-9.34 26.333-26.018 27z"/>
    </svg>
  </div>
);

const Modal = ({ children, trigger }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="button-reset modal__open">
        {trigger}
      </button>
      <ReactModal
        isOpen={open}
        closeTimeoutMS={200}
        onRequestClose={() => setOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
        bodyOpenClassName="body--modal-open"
      >
        <div className="modal__content">
          {children}
        </div>

        <div className="modal__close">
          <button onClick={() => setOpen(false)} className="icon-button button-reset">
            <EyeIcon />
          </button>
        </div>

      </ReactModal>
    </>
  )
};

export default Modal;
