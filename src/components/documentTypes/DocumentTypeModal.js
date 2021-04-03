import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import '../modal.css';
import { closeModal } from '../../actions/uiActions';
import { modalTypes } from '../../types/modalTypes';
import {
  documentTypeStartAddNew,
  documentTypeStartModify,
} from '../../actions/documentTypeActions';

const customStyles = {
  content: {
    maxHeight: '360px',
    maxWidth: '500px',
  },
};

Modal.setAppElement('#root');

const initForm = {
  name: '',
  shortName: '',
};

export const DocumentTypeModal = () => {
  const { openModal, modalType, active } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const modifyItem =
    modalType === modalTypes.new || modalType === modalTypes.modify;
  const [nameValid, setNameValid] = useState(true);
  const [shortNameValid, setShortNameValid] = useState(true);

  const [formValues, setFormValues] = useState(initForm);
  const { name, shortName } = formValues;

  useEffect(() => {
    setFormValues(active ? active : initForm);
    setNameValid(true);
    setShortNameValid(true);
  }, [active]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    setFormValues(initForm);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!modifyItem) {
      handleCloseModal();
    }

    let error = false;
    if (name.trim().length < 2) {
      setNameValid(false);
      error = true;
    }
    if (shortName.trim().length < 2) {
      setShortNameValid(false);
      error = true;
    }
    if (error) {
      return;
    }
    setNameValid(true);
    setShortNameValid(true);

    if (modalType === modalTypes.new) {
      dispatch(documentTypeStartAddNew(formValues));
    } else if (modalType === modalTypes.modify) {
      dispatch(documentTypeStartModify(formValues));
    }

    handleCloseModal();
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-back"
      closeTimeoutMS={200}
    >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          {modalType === modalTypes.new
            ? 'Nuevo Tipo de documento'
            : modalType === modalTypes.modify
            ? 'Editar Tipo de documento'
            : 'Ver Tipo de documento'}
        </h1>
      </div>
      <form onSubmit={handleSave}>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${!nameValid && 'is-invalid'}`}
            id="name"
            placeholder="Nombre del tipo de documento"
            name="name"
            autoComplete="off"
            value={name}
            disabled={!modifyItem}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="shortName" className="form-label">
            Nombre corto
          </label>
          <input
            type="text"
            className={`form-control ${!shortNameValid && 'is-invalid'}`}
            id="shortName"
            placeholder="Nombre corto del tipo de documento"
            name="shortName"
            autoComplete="off"
            value={shortName}
            disabled={!modifyItem}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-outline-primary mt-4">
            <i className="far fa-save"></i>&nbsp;
            <span>{modifyItem ? 'Guardar' : 'Cerrar'}</span>
          </button>
        </div>
      </form>
    </Modal>
  );
};
