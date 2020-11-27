/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FunctionComponent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SlugcloudState } from '../../store/init';
import { closeModal } from '../../store/actions';

import css from './portals.module.scss';

const Portals: FunctionComponent = () => {
  const [portals] = useSelector((store: SlugcloudState) => store.portals);
  const dispatch = useDispatch();
  const Component = portals?.component;
  const handleCloseModal = () => {
    dispatch(closeModal('any'));
  };

  const handleEsc = (e) => {
    if (e.key === 'Escape') {
      dispatch(closeModal('any'));
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('keyup', handleEsc);
    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, [portals]);

  return (
    <>
      {
        Component && (
          <div className={css.portals} onClick={handleCloseModal}>
            <div className={css['portals-window']} onClick={stopPropagation}>
              <Component />
            </div>
          </div>
        )
      }
    </>
  );
};

export default Portals;
