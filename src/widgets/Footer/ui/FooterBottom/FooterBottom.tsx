import { FC } from 'react';

import { FooterCopyright } from '../FooterCopyright/FooterCopyright';
import { FooterSocials } from '../FooterSocials/FooterSocials';
import { HStack } from '@/shared/ui/Stack';

export const FooterBottom: FC = () => {
  return (
    <HStack justify="between">
      <FooterSocials />
      <FooterCopyright />
    </HStack>
  );
};
