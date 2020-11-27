/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IndexAction } from '../../types';
import Heading from '../heading';

import css from './linkstack.module.scss';

interface LinkStackProps {
  title: string;
  links: IndexAction[];
  direction: 'row' | 'column';
}

const LinkStack: FunctionComponent<LinkStackProps> = ({ title, links, direction }) => {
  const LinkSubcomponent = (label) => (<span>{ label }</span>);
  const IconSubcomponent = (label, iconUrl) => (
    <Image src={iconUrl} alt={label} width={24} height={24} />
  );

  return (
    <div className={css.linkstack}>
      { title && <Heading level={4} title={title} fontSize="s" />}
      <ul className={css['linkstack-list']} sa-list-direction={direction}>
        {
          links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>
                <a>
                  {
                    link.icon
                      ? IconSubcomponent(link.label, link.icon)
                      : LinkSubcomponent(link.label)
                  }
                </a>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default LinkStack;
