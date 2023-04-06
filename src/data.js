import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        {
          text: 'Website Development',
          href: getPermalink('/landing/saas'),
        },
        {
          text: 'Mobile Applications',
          href: getPermalink('/landing/startup'),
        },
        {
          text: 'SEO',
          href: getPermalink('/landing/mobile-app'),
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