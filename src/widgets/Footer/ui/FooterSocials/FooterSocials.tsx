import { FC } from 'react';

import cls from '../Footer.module.scss';
import { FOOTER_SOCIALS_DATA } from './footer-socials-data';
import { HStack } from '@/shared/ui/Stack';

export const FooterSocials: FC = () => {
  return (
    <HStack gap="20">
      {FOOTER_SOCIALS_DATA.map((link) => {
        const { Image, href } = link;

        return (
          <li>
            <a href={href}>
              <Image />
            </a>
          </li>
        );
      })}
    </HStack>
  );
};
