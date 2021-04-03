import { combineReducers } from 'redux';
import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { provinceReducer } from './provinceReducer';
import { documentTypeReducer } from './documentTypes';

export const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  province: provinceReducer,
  documentType: documentTypeReducer,
});
