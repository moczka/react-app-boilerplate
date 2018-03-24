// select photo
function selectPhoto(id) {
  return {
    type: 'SELECT_PHOTO',
    id
  };
}

// deselect photo
function deselectPhoto(id) {
  return {
    type: 'DESELECT_PHTO',
    id
  };
}

export {
  selectPhoto,
  deselectPhoto
};