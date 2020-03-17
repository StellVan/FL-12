import { formatDate } from '../../Utilities/formatDate';
import RNG from '../../Utilities/RNG';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_ELEMENT': {
      let { date, title, description, duration } = action.props;

      let elementToPush = {
        title: title,
        description: description,
        duration: duration,
        date: formatDate(date),
        id: RNG()
      };
      return [...state, elementToPush];
    }

    case 'DELETE_ELEMENT': {
      let { id } = action;

      let filtered = state.filter(el => el.id !== id);
      return filtered;
    }

    case 'EDIT_ELEMENT': {
      let newArray = state;
      let index = action.data.index;
      action.data.date = formatDate(action.data.date);
      newArray[index] = action.data;
      return newArray;
    }

    default:
      return state;
  }
};

export default reducer;
