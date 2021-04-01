import React from 'react';
import { translateHeaderToSpanish } from '../../helpers/translateHeaderToSpanish';

export const DataTable = ({
  list = [],
  loading,
  handleView,
  handleModify,
  handleDelete,
}) => {
  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (list.length === 0) {
    return (
      <div className="alert alert-primary mt-4" role="alert">
        No hay datos para mostrar
      </div>
    );
  }

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {Object.keys(list[0]).map((name, index) =>
            name !== 'id' ? (
              <th key={index}>{translateHeaderToSpanish(name)}</th>
            ) : null
          )}
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            {Object.keys(item).map((name, index) =>
              name !== 'id' ? <td key={item.id + index}>{item[name]}</td> : null
            )}
            <td>
              <i
                className="fas fa-eye me-3 text-primary pointer"
                onClick={() => handleView(item)}
              ></i>
              <i
                className="fas fa-pencil-alt me-3 text-primary pointer"
                onClick={() => handleModify(item)}
              ></i>
              <i
                className="fas fa-trash-alt text-danger pointer"
                onClick={() => handleDelete(item.id)}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};