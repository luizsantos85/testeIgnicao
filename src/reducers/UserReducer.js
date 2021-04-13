const initialState = {
  token: '',
  name: 'Maria Elza',
  status: 'Cliente VIP',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SET_TOKEN':
      return { ...state, token: action.playload.token };
      // eslint-disable-next-line no-unreachable
      break;
    case 'SET_NAME':
      return { ...state, name: action.playload.name };
      // eslint-disable-next-line no-unreachable
      break;
    case 'SET_STATUS':
      return { ...state, status: action.playload.status };
      // eslint-disable-next-line no-unreachable
      break;
  }
  return state;
};
