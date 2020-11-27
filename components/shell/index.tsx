import { FunctionComponent } from 'react';

import css from './shell.module.scss';

const Shell: FunctionComponent = ({ children }) => (
  <div className={css.shell}>
    {children}
  </div>
);

export default Shell;
