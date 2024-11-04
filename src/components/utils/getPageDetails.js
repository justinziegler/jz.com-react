import { pageDetails } from '../../data/pageDetails'

export function getPageDetails(url) {
  let details = []
  if (details !== undefined) {
    pageDetails.forEach(item => {
      if (url === item.url) {
        details.url             = item.url
        details.background      = item.background
        details.backgroundColor = item.backgroundColor
        details.title           = item.title
        details.intro           = item.intro
        details.bullets         = item.bullets
        details.toggleLinks     = item.toggleLinks || null
        details.skills          = item.skills || null
      }
    })
    return details
  }
}