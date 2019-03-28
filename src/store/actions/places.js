import { ADD_PLACE , DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE, SET_NAME } from './actionTypes'
export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
}
export const deletePlace = () => {
    return {
        type: DELETE_PLACE,
    };
}
export const selectPlace = (index) => {
    return {
        type: SELECT_PLACE,
        index: index
    };
}
export const deselectPlace = () => {
    return {
        type: UNSELECT_PLACE,
    };
}
export const setName = (event) => {
    return {
        type: SET_NAME,
        name: event
    };
}