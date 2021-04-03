import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import '../modal.css';
import { closeModal } from '../../actions/uiActions';
import { modalTypes } from '../../types/modalTypes';
import {
  busStationStartAddNew,
  busStationStartModify,
} from '../../actions/busStationActions';
import { cityStartList } from '../../actions/cityActions';

const customStyles = {
  content: {
    maxHeight: '350px',
    maxWidth: '500px',
  },
};

Modal.setAppElement('#root');

const initForm = {
  name: '',
  cityId: '',
};

export const BusStationModal = () => {
  const { openModal, modalType, active } = useSelector((state) => state.ui);
  const { list: cities } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const modifyItem =
    modalType === modalTypes.new || modalType === modalTypes.modify;
  const [nameValid, setNameValid] = useState(true);
  const [cityIdValid, setProvinceIdValid] = useState(true);

  const [formValues, setFormValues] = useState(initForm);
  const { name, cityId } = formValues;

  useEffect(() => {
    setFormValues(active ? active : initForm);
  }, [active]);

  useEffect(() => {
    dispatch(cityStartList());
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
    if (cityId.trim().length < 1) {
      setProvinceIdValid(false);
      error = true;
    }
    if (error) {
      return;
    }

    if (modalType === modalTypes.new) {
      dispatch(busStationStartAddNew(formValues));
    } else if (modalType === modalTypes.modify) {
      dispatch(busStationStartModify(formValues));
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
            ? 'Nueva Terminal'
            : modalType === modalTypes.modify
            ? 'Editar Terminal'
            : 'Ver Terminal'}
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
          <label htmlFor="cityId" className="form-label">
            Ciudad
          </label>
          <select
            className={`form-select ${!cityIdValid && 'is-invalid'}`}
            id="cityId"
            name="cityId"
            value={cityId}
            disabled={!modifyItem}
            onChange={handleInputChange}
          >
            <option value>Seleccione</option>
            {cities.map((city) => (
              <option value={city.id} key={city.id}>
                {city.name}
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
