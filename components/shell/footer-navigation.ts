import { IndexAction } from '../../types';

const footerNavigationMap: [string, IndexAction[]][] = [
  [
    'Features',
    [
      {
        type: 'link',
        href: '/',
        label: 'Link Shortening',
      },
      {
        type: 'link',
        href: '/',
        label: 'Branded Links',
      },
      {
        type: 'link',
        href: '/',
        label: 'Analytics',
      },
    ],
  ],
  [
    'Resources',
    [
      {
        type: 'link',
        href: '/',
        label: 'Blog',
      },
      {
        type: 'link',
        href: '/',
        label: 'Developers',
      },
      {
        type: 'link',
        href: '/',
        label: 'Support',
      },
    ],
  ],
  [
    'Company',
    [
      {
        type: 'link',
        href: '/',
        label: 'About',
      },
      {
        type: 'link',
        href: '/',
        label: 'Our Team',
      },
      {
        type: 'link',
        href: '/',
        label: 'Careers',
      },
      {
        type: 'link',
        href: '/',
        label: 'Contact',
      },
    ],
  ],
  [
    '',
    [
      {
        type: 'link',
        href: '/',
        icon: '/images/icon-facebook.svg',
        label: 'Slugcloud on facebook',
      },
      {
        type: 'link',
        href: '/',
        icon: '/images/icon-twitter.svg',
        label: 'Slugcloud on twitter',
      },
      {
        type: 'link',
        href: '/',
        icon: '/images/icon-pinterest.svg',
        label: 'Slugcloud on pinterest',
      },
      {
        type: 'link',
        href: '/',
        icon: '/images/icon-instagram.svg',
        label: 'Slugcloud on instagram',
      },
    ],
  ],
];

export default footerNavigationMap;
