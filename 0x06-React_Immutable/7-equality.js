import { is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  if (is(map1, map2)) {
    return true;
  }
  return false;
}
