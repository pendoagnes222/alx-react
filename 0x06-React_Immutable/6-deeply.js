import { Map, mergeDeep } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  return mergeDeep(Map(page1), Map(page2));
}
