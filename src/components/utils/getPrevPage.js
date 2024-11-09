import { directory } from '../../data/directory';

export function getPrevPage(pageUrl) {
  let prevPage;
  directory.forEach(item => {
    if (pageUrl === item) {
      prevPage = directory[(directory.indexOf(item)) - 1];
    }
  })
  return prevPage;
}