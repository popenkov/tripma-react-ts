import { FC } from 'react';
import cls from './Footer.module.scss';
import { FooterBottom } from './FooterBottom/FooterBottom';
import { FooterTop } from './FooterTop/FooterTop';
import classNames from 'classnames';

export const Footer: FC = () => {
  return (
    <footer className={classNames(cls.Footer, 'container')}>
      <div className={cls.container}>
        <FooterTop />
        <FooterBottom />
      </div>
    </footer>
  );
};
