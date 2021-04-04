import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { permissionStartList } from '../../actions/permissionActions';
import { DataTable } from '../ui/DataTable';

export const PermissionsScreen = () => {
  const { list, loading } = useSelector((state) => state.permission);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(permissionStartList());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Permisos</h1>
      </div>
      <DataTable list={list} loading={loading} />
    </>
  );
};
