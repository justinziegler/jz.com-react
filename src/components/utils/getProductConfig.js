import { pageMattress } from '../data/pageMattress';
import { pageFrame } from '../data/pageFrame';
import { pageSheets } from '../data/pageSheets';

export function getProductConfig(pageUrl) {
	switch (pageUrl) {
    case 'mattress': return pageMattress[0];
    case 'frame': return pageFrame[0];
    case 'sheets': return pageSheets[0];
  }
}

