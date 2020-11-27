/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import css from './topbar.module.scss';
import Button from '../button';
import { openModal } from '../../store/actions';
import SignupFormWidget from '../formwidget/signup';

interface TopbarProps {

}

const Topbar: FunctionComponent<TopbarProps> = () => {
  const [elevated, setElevated] = useState(false);
  const dispatch = useDispatch();

  const elevateOnScroll = () => setElevated(window.scrollY > 36);
  useEffect(() => {
    window.addEventListener('scroll', elevateOnScroll);
    return () => {
      window.removeEventListener('scroll', elevateOnScroll);
    };
  }, []);

  const displaySignupModal = () => {
    dispatch(openModal('modal', SignupFormWidget));
  };

  return (
    <div className={css.topbar} sa-box-elevated={elevated.toString()}>
      <div className={css['topbar-content']}>
        <div>
          <nav>
            <ul className={css['topbar-nav']}>
              <li>
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
              </li>
              <li>
                <Link href="/features">
                  <a>Features</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Resources</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={css['topbar-cta']}>
          <Button type="button" action={{ type: 'action', cb: () => alert('Login was pressed!') }} label="Login" priority="secondary" />
          <Button type="button" action={{ type: 'action', cb: displaySignupModal }} label="Sign up" priority="primary" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
