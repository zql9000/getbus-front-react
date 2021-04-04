import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import '../modal.css';
import { closeModal } from '../../actions/uiActions';
import { modalTypes } from '../../types/modalTypes';
import {
  seatTypeStartAddNew,
  seatTypeStartModify,
} from '../../actions/seatTypeActions';

const customStyles = {
  content: {
    maxHeight: '260px',
    maxWidth: '500px',
  },
};

Modal.setAppElement('#root');

const initForm = {
  name: '',
};

export const SeatTypeModal = () => {
  const { openModal, modalType, active } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const modifyItem =
    modalType === modalTypes.new || modalType === modalTypes.modify;
  const [nameValid, setNameValid] = useState(true);

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
      return setNameValid(false);
    }
    setNameValid(true);

    if (modalType === modalTypes.new) {
      dispatch(seatTypeStartAddNew(formValues));
    } else if (modalType === modalTypes.modify) {
      dispatch(seatTypeStartModify(formValues));
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
            ? 'Nuevo Tipo de asiento'
            : modalType === modalTypes.modify
            ? 'Editar Tipo de asiento'
            : 'Ver Tipo de asiento'}
        </h1>
      </div>
      <form onSubmit={handleSave}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${!nameValid && 'is-invalid'}`}
            id="name"
            placeholder="Nombre de la tipo de asiento"
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
