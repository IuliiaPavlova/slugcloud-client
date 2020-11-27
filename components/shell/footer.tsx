/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkStack from '../linkstack';
import footerNavigationMap from './footer-navigation';

import css from './footer.module.scss';

const Footer: FunctionComponent = () => (
  <div className={css.footer}>
    <div className={css['footer-content']}>
      <div className={css['footer-logo']}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.svg"
              alt="Slugcloud logo"
              width={32}
              height={32}
            />
          </a>
        </Link>
      </div>
      <div className={css['footer-nav']}>
        {
          footerNavigationMap.map(([title, links], i) => (
            <LinkStack
              key={title}
              title={title}
              links={links}
              direction={i === footerNavigationMap.length - 1 ? 'row' : 'column'}
            />
          ))
        }
      </div>
    </div>
  </div>
);

export default Footer;
