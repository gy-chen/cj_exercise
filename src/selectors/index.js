import _ from 'lodash';
import { createSelector } from 'reselect';
import {
  convert_to_code,
  convert_to_cj5
 } from '../cj_convert';

const current_word_progress_selector = state => state.current_word_progress;
const current_paragraph_selector = state => state.current_paragraph;
const current_paragraph_progress_selector = state => state.current_paragraph_progress;

export const current_word_selector = createSelector(
  current_paragraph_selector,
  current_paragraph_progress_selector,
  (paragraph, progress) => _.get(paragraph, progress)
);

export const current_word_cjcodes_selector = createSelector(
  current_word_selector,
  word => convert_to_cj5(word)
);

export const current_word_keycodes_selector = createSelector(
  current_word_cjcodes_selector,
  cjcodes => _.join(_.map(cjcodes, value => convert_to_code(value)), '')
);

export const is_word_progress_finished_selector = createSelector(
  current_paragraph_selector,
  current_word_cjcodes_selector,
  current_word_progress_selector,
  (paragraph, cjcodes, progress) => paragraph && _.get(cjcodes, 'length', 0) === _.toInteger(progress)
);

export const is_paragraph_progress_finished_selector = createSelector(
  current_paragraph_selector,
  current_paragraph_progress_selector,
  (paragraph, paragraph_progress) => _.get(paragraph, 'length', null) === _.toInteger(paragraph_progress)
);

export const current_word_cjcode_selector = createSelector(
  current_word_cjcodes_selector,
  current_word_progress_selector,
  (cjcodes, progress) => _.get(cjcodes, progress)
);
