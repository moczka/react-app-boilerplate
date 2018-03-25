// select photo
function selectPhoto(id) {
  return {
    type: 'SELECT_PHOTO',
    payload: {
      id
    }
  };
}

// deselect photo
function deselectPhoto(id) {
  return {
    type: 'DESELECT_PHOTO',
    payload: {
      id
    }
  };
}

export {
  selectPhoto,
  deselectPhoto
};