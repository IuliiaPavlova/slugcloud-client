/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IndexAction } from '../../types';

import css from './button.module.scss';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  label: string;
  action: IndexAction;
  priority: 'primary' | 'secondary';
}

const Button: FunctionComponent<ButtonProps> = ({
  type,
  label,
  action,
  priority,
}) => {
  const classList = [
    css.button,
    css[`button-${priority}`],
  ];

  const ButtonSubcomponent = (
    <button className={classList.join(' ')} type={type} onClick={action.cb}>
      { label }
    </button>
  );

  const LinkSubcomponent = (
    <Link href={action.href}>
      <a className={classList.join(' ')}>
        { label }
      </a>
    </Link>
  );

  return action.type === 'link' ? LinkSubcomponent : ButtonSubcomponent;
};

export default Button;
