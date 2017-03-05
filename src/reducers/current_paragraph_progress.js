const current_paragraph_progress = (state=null, action) => {
  switch (action.type) {
  case 'NEXT_PARAGRAPH_PROGRESS':
    return state === null ? state : state + 1;
  case 'SET_CURRENT_PARAGRAPH':
    return 0;
  case 'NEXT_WORD':
    return state === null ? state : state + 1;
  case 'RESET':
    return null;
  default:
    return state;
  }
};

export default current_paragraph_progress;
