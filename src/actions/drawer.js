export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export function openDrawer() {
  console.log('open drawer');
  return {
    type: OPEN_DRAWER
  };
}

export function closeDrawer() {
  console.log('close drawer');
  return {
    type: CLOSE_DRAWER
  };
}
