import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const newPage1 = List(page1);
  const newPage2 = List(page2);
  return newPage1.concat(newPage2);
}
export function mergeElements(page1, page2) {
  const newPage1 = Map(page1);
  const newPage2 = Map(page2);
  return newPage1.merge(newPage2);
}
