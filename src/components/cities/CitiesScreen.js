import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openModalAddNew,
  openModalModify,
  openModalView,
} from '../../actions/uiActions';
import { cityStartDelete, cityStartList } from '../../actions/cityActions';
import { DataTable } from '../ui/DataTable';
import { CityModal } from './CityModal';
import Swal from 'sweetalert2';

export const CitiesScreen = () => {
  const { list, loading } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cityStartList());
  }, [dispatch]);

  const handleAddNew = (e) => {
    e.preventDefault();

    dispatch(openModalAddNew());
  };

  const handleView = (data) => {
    dispatch(openModalView(data));
  };

  const handleModify = (data) => {
    dispatch(openModalModify(data));
  };

  const handleDelete = (data) => {
    Swal.fire({
      title: 'Eliminar Ciudad',
      html: `Está seguro de eliminar la ciudad ${data.name}?`,
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: 'No',
      customClass: {
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(cityStartDelete(data.id));
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Ciudades</h1>
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddNew}
        >
          Nueva Ciudad
        </button>
      </div>
      <DataTable
        list={list}
        loading={loading}
        handleView={handleView}
        handleModify={handleModify}
        handleDelete={handleDelete}
      />
      <CityModal />
    </>
  );
};
