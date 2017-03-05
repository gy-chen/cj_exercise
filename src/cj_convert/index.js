import _ from 'lodash';
import cj_origin from './cj5-origin.json';
import cj_keycodes from './keycode.json';
let cj_keycodes_invert = _.invert(cj_keycodes);

export function convert_to_cj5(word) {
  return cj_origin[word];
}

export function convert_to_code(key) {
  return cj_keycodes[key];
}

export function convert_to_key(code) {
  return cj_keycodes_invert[code];
}
