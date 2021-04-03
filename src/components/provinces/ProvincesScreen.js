import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openModalAddNew,
  openModalModify,
  openModalView,
} from '../../actions/uiActions';
import {
  provinceStartDelete,
  provinceStartList,
} from '../../actions/provinceActions';
import { DataTable } from '../ui/DataTable';
import { ProvinceModal } from './ProvinceModal';
import Swal from 'sweetalert2';

export const ProvincesScreen = () => {
  const { list, loading } = useSelector((state) => state.province);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(provinceStartList());
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
      title: 'Eliminar Provincia',
      html: `¿Está seguro de eliminar la provincia ${data.name}?`,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'order-1',
        cancelButton: 'order-2',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(provinceStartDelete(data.id));
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Provincias</h1>
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddNew}
        >
          Nueva Provincia
        </button>
      </div>
      <DataTable
        list={list}
        loading={loading}
        handleView={handleView}
        handleModify={handleModify}
        handleDelete={handleDelete}
      />
      <ProvinceModal />
    </>
  );
};
