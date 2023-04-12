import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Intro',
      href: getPermalink('/')
    },
    {
      text: 'Services',
      href: getPermalink('/services')
    },
    {
      text: 'Technologies',
      href: getPermalink('/technologies'),
    },
    {
      text: 'Portfolio',
      href: getPermalink('/portfolio'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
};