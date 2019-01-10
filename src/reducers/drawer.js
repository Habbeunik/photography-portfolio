import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

export default function drawer(state = { isOpen: false }, action) {
  switch (action.type) {
    case OPEN_DRAWER:
      return { isOpen: true };
    case CLOSE_DRAWER:
      return { isOpen: false };
    default:
      return state;
  }
}

export const selectDrawerState = state => {
  return state.drawer.isOpen;
};
