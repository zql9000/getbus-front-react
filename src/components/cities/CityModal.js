import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import '../modal.css';
import { closeModal } from '../../actions/uiActions';
import { modalTypes } from '../../types/modalTypes';
import { cityStartAddNew, cityStartModify } from '../../actions/cityActions';
import { provinceStartList } from '../../actions/provinceActions';

const customStyles = {
  content: {
    maxHeight: '350px',
    maxWidth: '500px',
  },
};

Modal.setAppElement('#root');

const initForm = {
  name: '',
  provinceId: '',
};

export const CityModal = () => {
  const { openModal, modalType, active } = useSelector((state) => state.ui);
  const { list: provinces } = useSelector((state) => state.province);
  const dispatch = useDispatch();

  const modifyItem =
    modalType === modalTypes.new || modalType === modalTypes.modify;
  const [nameValid, setNameValid] = useState(true);
  const [provinceIdValid, setProvinceIdValid] = useState(true);

  const [formValues, setFormValues] = useState(initForm);
  const { name, provinceId } = formValues;

  useEffect(() => {
    setFormValues(active ? active : initForm);
  }, [active]);

  useEffect(() => {
    dispatch(provinceStartList());
  }, [dispatch]);

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

    setNameValid(true);
    setProvinceIdValid(true);
    let error = false;
    if (name.trim().length < 2) {
      setNameValid(false);
      error = true;
    }
    if (provinceId.trim().length < 1) {
      setProvinceIdValid(false);
      error = true;
    }
    if (error) {
      return;
    }

    if (modalType === modalTypes.new) {
      dispatch(cityStartAddNew(formValues));
    } else if (modalType === modalTypes.modify) {
      dispatch(cityStartModify(formValues));
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
            ? 'Nueva Ciudad'
            : modalType === modalTypes.modify
            ? 'Editar Ciudad'
            : 'Ver Ciudad'}
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
            placeholder="Nombre de la ciudad"
            name="name"
            autoComplete="off"
            value={name}
            disabled={!modifyItem}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="provinceId" className="form-label">
            Provincia
          </label>
          <select
            className={`form-select ${!provinceIdValid && 'is-invalid'}`}
            id="provinceId"
            name="provinceId"
            value={provinceId}
            disabled={!modifyItem}
            onChange={handleInputChange}
          >
            <option value>Seleccione</option>
            {provinces.map((province) => (
              <option value={province.id} key={province.id}>
                {province.name}
              </option>
            ))}
          </select>
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
