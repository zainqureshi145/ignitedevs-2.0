import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Website Development',
          href: getPermalink('/landing/web-app'),
        },
        {
          text: 'Mobile Applications',
          href: getPermalink('/landing/mobile-app'),
        },
        {
          text: 'Marketing',
          href: getPermalink('/landing/marketing'),
        },
      ],
    },
    {
      text: 'Technologies',
      href: '/technologies',
    },
    {
      text: 'Portfolio',
      href: '/portfolio',
    },
    {
      text: 'Contact',
      href: '/contact',
    },
  ],
};