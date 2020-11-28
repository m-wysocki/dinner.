import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { GrFormClose } from 'react-icons/gr';
import * as S from './ModalStyles';

const Modal = ({ children, isModalOpen, toggleModal }) => {
  const wrapperRef = useRef(null);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       toggleModal();
  //     }
  //   }
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [wrapperRef]);

  return isModalOpen
    ? ReactDOM.createPortal(
        <S.Wrapper ref={wrapperRef}>
          <S.CloseButton onClick={toggleModal}>
            <GrFormClose />
          </S.CloseButton>
          {children}
        </S.Wrapper>,
        document.body,
      )
    : null;
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
