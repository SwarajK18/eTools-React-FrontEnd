import {
    CREATE,
    UPDATE,
    DELETE,
    ERROR,
    VIEW
  } from '../../actions/typeActions';
  
  const initialState = [];
  
  export default function noteTypeReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE:
        return {
          ...state,
          data: payload.data
        };
      case UPDATE:
        return state.map(() => {
          if (state.id === payload.id) {
            return {
              ...state,
              ...payload,
            };
          }
          return state;
        });
      // case DELETE:
        // return state.filter(({ id }) => id !== payload.id);
      case VIEW:
        return { ...state,
          data: payload.data
        };
      case ERROR:
        return {
          ...state,
          error: payload.error
        };
      default:
        return state;
    }
  }
  