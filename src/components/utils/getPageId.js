import { directory } from "../../data/directory"

export function getPageId(pageUrl) {
  let pageId
  directory.forEach(item => {
    if (pageUrl === item) {
      pageId = directory.indexOf(item)
    }
  })
  return pageId
}