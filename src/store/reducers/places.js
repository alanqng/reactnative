import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  UNSELECT_PLACE,
  SET_NAME
} from "../actions/actionTypes";
import placeImage from "../../assets/download1.jpg";

const initialState = {
  places: [],
  selectedPlace: null
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          place: action.placeName,
          image: placeImage
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((el, index) => {
          return el.key !== action.placeKey;
        }),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find((place, index) => {
          return action.index === index;
        })
      };
    case UNSELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
        };
    case SET_NAME:
        return {
            ...state,
            placeName: action.name
        }
    default:
      return state;
  }
};

export default placesReducer;
