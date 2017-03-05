const current_paragraph = (state=null, action) => {
  switch (action.type) {
  case 'SET_CURRENT_PARAGRAPH':
    return action.payload;
  case 'RESET':
    return null;
  default:
    return state;
  }
};

export default current_paragraph;
