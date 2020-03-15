import formatDate from '../../Utilities/formatDate';
import RNG from '../../Utilities/RNG';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NEW_ELEMENT': {
      let { date, title, description, duration } = action.props;

      let elementToPush = {
        date: formatDate(date),
        name: title,
        subjects: description,
        time: duration,
        id: RNG()
      };
      return [...state, elementToPush];
    }

    case 'DELETE_ELEMENT': {
      let { id } = action;
      let aaa = state.filter(el => el.id !== id);
      return aaa;
    }

    case 'EDIT_ELEMENT': {
      break;
    }

    default:
      return state;
  }
};

export default reducer;
