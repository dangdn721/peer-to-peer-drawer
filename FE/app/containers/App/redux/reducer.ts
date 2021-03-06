import MQTTService from 'services/MQTTService';
import { createReducer } from 'typesafe-actions';
import { createUserAsync } from './actions';
import { ContainerState, ContainerActions } from '../types';

// The initial state of the App
export const initialState: ContainerState = {
  currentUser: JSON.parse(localStorage.getItem('user')!) || {
    id: '',
    name: '',
  },
};

const homeReducer = createReducer(initialState).handleAction(
  createUserAsync.success,
  (state: ContainerState, action: ContainerActions) => ({
    ...state,
    currentUser: action.payload.user,
  }),
);

export default homeReducer;
