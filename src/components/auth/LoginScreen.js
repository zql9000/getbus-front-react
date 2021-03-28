import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/authActions';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    username: 'administrador',
    password: 'administrador',
  });

  const { username, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(startLogin(username, password));
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-sm-6 mt-5 text-center">
          <img alt="Get Bus" src="GetBus.png" />
          <h3 className="mb-3 mt-5">Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de usuario"
                name="username"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 text-end">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
