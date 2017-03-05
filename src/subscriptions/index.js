import { store } from '../store';
import {
  is_word_progress_finished_selector,
  is_paragraph_progress_finished_selector
} from '../selectors';
import {
  nextWord,
  reset
} from '../actions';

export function next_progress_listener() {
  const state = store.getState();
  const is_paragraph_progress_finished = is_paragraph_progress_finished_selector(state);
  const is_word_progress_finished = is_word_progress_finished_selector(state);
  if (is_paragraph_progress_finished) {
    store.dispatch(reset());
  } else if (is_word_progress_finished) {
    store.dispatch(nextWord());
  }
}
