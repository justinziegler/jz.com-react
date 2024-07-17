export function getPrevPage(pageUrl) {
  const directory = await module.exports.getDirectory();
  let prevPage;
  directory.forEach(item => {
    if (pageUrl === item) {
      prevPage = directory[(directory.indexOf(item)) - 1];
    }
  })
  return prevPage;
}
