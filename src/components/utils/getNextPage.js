import { directory } from '../data/directory';

export function getNextPage(pageUrl) {
  let nextPage;
  directory.forEach(item => {
    if (pageUrl === item) {
      nextPage = directory[(directory.indexOf(item)) + 1];
    }
  })
  return nextPage;
}