import { ADD_GROUP } from "../actions/type";

const initialState = {
  group: [],
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_GROUP:
      return { ...state, group: state.group.concat(actions.payload) };

    default:
      return state;
  }
};
