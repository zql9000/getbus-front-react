import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import './provinceModal.css';
import { closeModal } from '../../actions/uiActions';
import { modalTypes } from '../../types/modalTypes';
import {
  provinceStartAddNew,
  provinceStartModify,
} from '../../actions/provinceActions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const initForm = {
  name: '',
};

export const ProvinceModal = () => {
  const { openModal, modalType, active } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const modifyItem =
    modalType === modalTypes.new || modalType === modalTypes.modify;
  const [titleValid, setTitleValid] = useState(true);

  const [formValues, setFormValues] = useState(initForm);
  const { name } = formValues;

  useEffect(() => {
    setFormValues(active ? active : initForm);
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

    if (name.trim().length < 2) {
      return setTitleValid(false);
    }
    setTitleValid(true);

    if (modalType === modalTypes.new) {
      dispatch(provinceStartAddNew(formValues));
    } else if (modalType === modalTypes.modify) {
      dispatch(provinceStartModify(formValues));
    }

    handleCloseModal();
  };

  return (
    <Modal
      isOpen={openModal}
      onRequestClose={handleCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          {modalType === modalTypes.new
            ? 'Nueva Provincia'
            : modalType === modalTypes.modify
            ? 'Editar Provincia'
            : 'Ver Provincia'}
        </h1>
      </div>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            id="name"
            placeholder="Nombre de la provincia"
            name="name"
            autoComplete="off"
            value={name}
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
