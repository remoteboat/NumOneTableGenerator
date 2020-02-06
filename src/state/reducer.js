const initialState = () => ({
    red: {
        n: 8,
        x: 1,
        m: 29,
        w: 20,
        ltr: true,
    },
    green: {
        n: 231,
        x: 1,
        m: 247,
        w: 30,
        ltr: true,
    },
    blue: {
        n: 47,
        x: 2,
        m: 81,
        w: 40,
        ltr: false,
    },
    configure: null, // this should be called configureColor
    configureFormState: null,
})

/* strings instead of ints break some calculations */
function fixupFormState(formState) {
    return {
        ...formState,
        n: parseInt(formState.n),
        x: parseInt(formState.x),
        m: parseInt(formState.m),
        w: parseInt(formState.w),
    };
}

const reducer = (state = initialState(), action)  => {
    switch (action.type) {
        case 'SHOW_CONFIGURE':
            return {
                ...state,
                configure: action.color,
                configureFormState: {...state[action.color]},
            };
        case 'CLOSE_CONFIGURE':
            return {...state, configure: null};
        case 'UPDATE_CONFIGURE_FORM':
            return {
                ...state,
                configureFormState: {...action.formState},
            };
        case 'COMMIT_CONFIGURE_CHANGE':
            console.log('its time to commit');
            console.log(state);
            return {
                ...state,
                [state.configure]: {...fixupFormState(state.configureFormState)},
                configure: null,
                configureFormState: null,
            };
        default:
            return state;
    }
}

export default reducer;