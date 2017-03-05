import { combineReducers } from 'redux';
import current_word_progress from './current_word_progress';
import current_paragraph from './current_paragraph';
import current_paragraph_progress from './current_paragraph_progress';

const reducers = combineReducers({
  current_word_progress,
  current_paragraph,
  current_paragraph_progress
});

export default reducers;
