import { FunctionComponent } from 'react';

import css from './heading.module.scss';

interface HeadingProps {
  title: string;
  level?: number;
  fontSize?: string;
}

const Heading: FunctionComponent<HeadingProps> = ({
  title,
  level = 1,
  fontSize = 'm',
}) => {
  const classList = [
    css.heading,
  ].join(' ');

  switch (level) {
    case 6:
      return <h6 className={classList} sa-font-size={fontSize}>{title}</h6>;
    case 5:
      return <h5 className={classList} sa-font-size={fontSize}>{title}</h5>;
    case 4:
      return <h4 className={classList} sa-font-size={fontSize}>{title}</h4>;
    case 3:
      return <h3 className={classList} sa-font-size={fontSize}>{title}</h3>;
    case 2:
      return <h2 className={classList} sa-font-size={fontSize}>{title}</h2>;
    case 1:
    default:
      return <h1 className={classList} sa-font-size={fontSize}>{title}</h1>;
  }
};

export default Heading;
