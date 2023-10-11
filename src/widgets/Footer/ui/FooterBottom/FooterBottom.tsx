import { FC } from 'react';

import { FooterCopyright } from '../FooterCopyright/FooterCopyright';
import { FooterSocials } from '../FooterSocials/FooterSocials';
import cls from '../Footer.module.scss';

export const FooterBottom: FC = () => {
  return (
    <div className={cls.bottomContainer}>
      <FooterSocials />
      <FooterCopyright />
    </div>
  );
};
