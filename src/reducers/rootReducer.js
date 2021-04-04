import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { provinceReducer } from './provinceReducer';
import { documentTypeReducer } from './documentTypes';
import { cityReducer } from './cityReducer';
import { busStationReducer } from './busStationReducer';
import { transportCompanyReducer } from './transportCompanyReducer';
import { vehicleTypeReducer } from './vehicleTypeReducer';
import { seatTypeReducer } from './seatTypeReducer';
import { permissionReducer } from './permissionReducer';
import { roleReducer } from './roleReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  province: provinceReducer,
  documentType: documentTypeReducer,
  city: cityReducer,
  busStation: busStationReducer,
  transportCompany: transportCompanyReducer,
  vehicleType: vehicleTypeReducer,
  seatType: seatTypeReducer,
  permission: permissionReducer,
  role: roleReducer,
});
