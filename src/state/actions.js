export const showConfigure = color => ({
  type: 'SHOW_CONFIGURE',
  color
});

export const closeConfigure = () => ({
    type: 'CLOSE_CONFIGURE',
});

export const updateConfigureForm = (formState) => ({
    type: 'UPDATE_CONFIGURE_FORM',
    formState
});

export const commitConfigureChange = () =>({
    type: 'COMMIT_CONFIGURE_CHANGE',
})
