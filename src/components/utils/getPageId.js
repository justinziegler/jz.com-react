export function getPageId(pageUrl) {
  let pageId;
  const directory = await module.exports.getDirectory();
  directory.forEach(item => {
    if (pageUrl === item) {
      pageId = directory.indexOf(item);
    }
  })
  return pageId;
}