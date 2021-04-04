import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import '../modal.css';
import { closeModal } from '../../actions/uiActions';
import { modalTypes } from '../../types/modalTypes';
import { userStartAddNew, userStartModify } from '../../actions/userActions';
import { roleStartList } from '../../actions/roleActions';
import { documentTypeStartList } from '../../actions/documentTypeActions';

const customStyles = {
  content: {
    maxHeight: '600px',
    maxWidth: '900px',
  },
};

Modal.setAppElement('#root');

const initForm = {
  username: '',
  name: '',
  lastName: '',
  password: '',
  password2: '',
  roleId: '',
  documentTypeId: '',
  documentNumber: '',
  birthdate: '',
};

export const UserModal = () => {
  const { openModal, modalType, active } = useSelector((state) => state.ui);
  const { list: roles } = useSelector((state) => state.role);
  const { list: documentTypes } = useSelector((state) => state.documentType);
  const dispatch = useDispatch();

  const modifyItem =
    modalType === modalTypes.new || modalType === modalTypes.modify;

  customStyles.content.maxHeight = modifyItem ? '600px' : '515px';

  const [usernameValid, setUsernameValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [password2Valid, setPassword2Valid] = useState(true);
  const [roleIdValid, setRoleIdValid] = useState(true);
  const [documentTypeIdValid, setDocumentTypeIdValid] = useState(true);
  const [documentNumberValid, setDocumentNumberValid] = useState(true);

  const [formValues, setFormValues] = useState(initForm);
  const {
    username,
    name,
    lastName,
    password,
    password2,
    roleId,
    documentTypeId,
    documentNumber,
    birthdate,
  } = formValues;

  useEffect(() => {
    setFormValues(active ? active : initForm);
  }, [active]);

  useEffect(() => {
    dispatch(roleStartList());
    dispatch(documentTypeStartList());
  }, [dispatch]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    setValid();
    setFormValues(initForm);
  };

  const setValid = () => {
    setUsernameValid(true);
    setNameValid(true);
    setLastNameValid(true);
    setPasswordValid(true);
    setPassword2Valid(true);
    setRoleIdValid(true);
    setDocumentTypeIdValid(true);
    setDocumentNumberValid(true);
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!modifyItem) {
      handleCloseModal();
    }

    setValid();
    let error = false;
    if (username.trim().length < 2) {
      setUsernameValid(false);
      error = true;
    }
    if (name.trim().length < 2) {
      setNameValid(false);
      error = true;
    }
    if (lastName.trim().length < 2) {
      setLastNameValid(false);
      error = true;
    }
    if (
      modalType === modalTypes.new ||
      password?.length > 0 ||
      password2?.length > 0
    ) {
      if (password?.length < 8) {
        setPasswordValid(false);
        error = true;
      }
      if (password2?.length < 8) {
        setPassword2Valid(false);
        error = true;
      }
      if (
        password?.length > 7 &&
        password2?.length > 7 &&
        password !== password2
      ) {
        setPasswordValid(false);
        setPassword2Valid(false);
        error = true;
      }
    }
    if (roleId.trim().length < 1) {
      setRoleIdValid(false);
      error = true;
    }
    if (documentTypeId.trim().length < 1) {
      setDocumentTypeIdValid(false);
      error = true;
    }
    if (documentNumber.trim().length < 1) {
      setDocumentNumberValid(false);
      error = true;
    }
    if (error) {
      return;
    }

    if (modalType === modalTypes.new) {
      dispatch(userStartAddNew(formValues));
    } else if (modalType === modalTypes.modify) {
      dispatch(userStartModify(formValues));
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
            ? 'Nuevo Usuario'
            : modalType === modalTypes.modify
            ? 'Editar Usuario'
            : 'Ver Usuario'}
        </h1>
      </div>
      <form onSubmit={handleSave}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">
                Nombre de usuario
              </label>
              <input
                type="text"
                className={`form-control ${!usernameValid && 'is-invalid'}`}
                id="username"
                placeholder="Nombre de usuario"
                name="username"
                autoComplete="off"
                value={username}
                disabled={!modifyItem}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className={`form-control ${!nameValid && 'is-invalid'}`}
                id="name"
                placeholder="Nombre"
                name="name"
                autoComplete="off"
                value={name}
                disabled={!modifyItem}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastName" className="form-label">
                Apellido
              </label>
              <input
                type="text"
                className={`form-control ${!lastNameValid && 'is-invalid'}`}
                id="lastName"
                placeholder="Apellido"
                name="lastName"
                autoComplete="off"
                value={lastName}
                disabled={!modifyItem}
                onChange={handleInputChange}
              />
            </div>
            {modifyItem && (
              <>
                <div className="form-group mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className={`form-control ${!passwordValid && 'is-invalid'}`}
                    id="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2" className="form-label">
                    Reingrese Contraseña
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      !password2Valid && 'is-invalid'
                    }`}
                    id="password2"
                    placeholder="Contraseña"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                  />
                </div>
              </>
            )}
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <label htmlFor="roleId" className="form-label">
                Rol
              </label>
              <select
                className={`form-select ${!roleIdValid && 'is-invalid'}`}
                id="roleId"
                name="roleId"
                value={roleId}
                disabled={!modifyItem}
                onChange={handleInputChange}
              >
                <option value>Seleccione</option>
                {roles.map((role) => (
                  <option value={role.id} key={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="documentTypeId" className="form-label">
                Tipo de documento
              </label>
              <select
                className={`form-select ${
                  !documentTypeIdValid && 'is-invalid'
                }`}
                id="documentTypeId"
                name="documentTypeId"
                value={documentTypeId}
                disabled={!modifyItem}
                onChange={handleInputChange}
              >
                <option value>Seleccione</option>
                {documentTypes.map((documentType) => (
                  <option value={documentType.id} key={documentType.id}>
                    {documentType.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="documentNumber" className="form-label">
                Número de documento
              </label>
              <input
                type="text"
                className={`form-control ${
                  !documentNumberValid && 'is-invalid'
                }`}
                id="documentNumber"
                placeholder="Número de documento"
                name="documentNumber"
                autoComplete="off"
                value={documentNumber}
                disabled={!modifyItem}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthdate" className="form-label">
                Fecha de nacimiento
              </label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                name="birthdate"
                value={birthdate}
                disabled={!modifyItem}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-end">
            <button type="submit" className="btn btn-outline-primary mt-4">
              <i className="far fa-save"></i>&nbsp;
              <span>{modifyItem ? 'Guardar' : 'Cerrar'}</span>
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
