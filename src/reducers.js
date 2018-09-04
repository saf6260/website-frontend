import{
    CHANGE_EDUCATION,
    CHANGE_WORK,
    CHANGE_PROJECTS,
    CHANGE_ACTIVITIES,
    CHANGE_LOGIN,
    CHANGE_ROUTE,
    POPUP_LOGIN,
    POPUP_LOGIN_CLOSE,
    POPUP_REGISTER,
    POPUP_REGISTER_CLOSE,
    LOGIN_SWITCH,
    REGISTER_SWITCH
} from './constants.js'

const initialUser = {
    user: '',
    isSignedIn: false
}

export const login = (state = initialUser, action = {}) => {
    switch(action.type){
        case CHANGE_LOGIN:
            return Object.assign({}, state, {user: action.payload, isSignedIn: true}); 
        default:
            return state;
    }
}

const initialNumber = {
    education: '1',
    work: '1',
    projects: '1',
    activities: '1'
}

export const changeNumber = (state = initialNumber, action = {}) => {
    switch(action.type){
        case CHANGE_EDUCATION:
            return {...state, education: action.payload};
        case CHANGE_WORK:
            return {...state, work: action.payload};
        case CHANGE_PROJECTS:
            return {...state, projects: action.payload};
        case CHANGE_ACTIVITIES:
            return{...state, activities: action.payload};
        default:
            return state;
    }
}

const initialRoute = {
    route: 'home'
}

export const changeRoute = (state = initialRoute, action = {}) => {
    switch(action.type){
        case CHANGE_ROUTE:
            return {...state, route: action.payload};
        default:
            return state;
    }
}

const initialPopups = {
    registerPopup: false,
    loginPopup: false
}

export const activatePopup = (state = initialPopups, action = {}) => {
    switch(action.type){
        case POPUP_REGISTER: 
            return{...state, registerPopup: !(initialPopups.registerPopup)}
        case POPUP_LOGIN:
            return{...state, loginPopup: !(initialPopups.loginPopup)}
        case POPUP_LOGIN_CLOSE:
            return{...state, loginPopup: (initialPopups.loginPopup)}
        case POPUP_REGISTER_CLOSE:
            return{...state, registerPopup: (initialPopups.registerPopup)}
        case LOGIN_SWITCH:
            return Object.assign({}, state, {registerPopup: true, loginPopup:false});
        case REGISTER_SWITCH:
            return Object.assign({}, state, {registerPopup: false, loginPopup:true});
        default:
            return state;
    }
}
