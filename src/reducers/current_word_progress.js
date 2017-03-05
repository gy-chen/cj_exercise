const current_word_progress = (state=null, action) => {
  switch(action.type) {
  case 'NEXT_WORD_PROGRESS':
    return state === null ? null : state + 1;
  case 'SET_CURRENT_PARAGRAPH':
  case 'NEXT_WORD':
    return 0;
  case 'RESET':
    return null;
  default:
    return state;
  }
};

export default current_word_progress;
