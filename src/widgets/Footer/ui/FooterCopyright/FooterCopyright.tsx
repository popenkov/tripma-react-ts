import { FC } from 'react';
import cls from '../Footer.module.scss';

export const FooterCopyright: FC = () => {
  const currentYear = new Date().getFullYear();
  return <p>© {currentYear} Tripma incorporated</p>;
};
