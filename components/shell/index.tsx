import { FunctionComponent } from 'react';
import Footer from './footer';
import Portals from './portals';

import css from './shell.module.scss';
import Topbar from './topbar';

const Shell: FunctionComponent = ({ children }) => (
  <div className={css.shell}>
    <Topbar />
    {children}
    <Footer />
    <Portals />
  </div>
);

export default Shell;
