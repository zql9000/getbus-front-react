import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openModalAddNew,
  openModalModify,
  openModalView,
} from '../../actions/uiActions';
import {
  documentTypeStartDelete,
  documentTypeStartList,
} from '../../actions/documentTypeActions';
import { DataTable } from '../ui/DataTable';
import { DocumentTypeModal } from './DocumentTypeModal';
import Swal from 'sweetalert2';

export const DocumentTypesScreen = () => {
  const { list, loading } = useSelector((state) => state.documentType);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(documentTypeStartList());
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
      title: 'Eliminar Tipo de documento',
      html: `¿Está seguro de eliminar el tipo de documento ${data.name}?`,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      customClass: {
        confirmButton: 'order-1',
        cancelButton: 'order-2',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(documentTypeStartDelete(data.id));
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Tipos de documento</h1>
      </div>
      <div className="text-end">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddNew}
        >
          Nuevo Tipo de documento
        </button>
      </div>
      <DataTable
        list={list}
        loading={loading}
        handleView={handleView}
        handleModify={handleModify}
        handleDelete={handleDelete}
      />
      <DocumentTypeModal />
    </>
  );
};
