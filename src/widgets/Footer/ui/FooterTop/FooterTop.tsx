import { FC } from 'react';
import LogoIcon from '@/shared/assets/images/logos/logo-large-w-padding.svg';
import cls from '../Footer.module.scss';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { getRouteMain } from '@/shared/const/router';
import { Icon } from '@/shared/ui/Icon';
import { FooterLinks } from '../FooterLinks/FooterLinks';
import { HStack } from '@/shared/ui/Stack';

export const FooterTop: FC = () => {
  return (
    <HStack justify="between">
      <AppLink to={getRouteMain()}>
        <Icon className={cls.icon} Svg={LogoIcon} />
      </AppLink>
      <FooterLinks />
    </HStack>
  );
};
