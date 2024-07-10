import React from 'react';
import { directory } from './constants';

export function getNextPage(pageUrl) {
  let nextPage;
  directory.forEach(item => {
    if (pageUrl === item) {
      nextPage = directory[(directory.indexOf(item)) + 1];
    }
  })
  return nextPage;
}