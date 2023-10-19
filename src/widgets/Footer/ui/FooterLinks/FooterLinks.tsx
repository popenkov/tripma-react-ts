import { FC } from 'react';
import { FOOTER_LINKS_DATA } from './links-data';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { HStack } from '@/shared/ui/Stack';
import { useTranslation } from 'react-i18next';

export const FooterLinks: FC = () => {
  const { t } = useTranslation();
  return (
    <HStack align="start" justify="between" gap="20" max>
      {FOOTER_LINKS_DATA.map((section) => {
        const { title, links } = section;
        return (
          <div key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map((link) => {
                const { text, Image, href } = link;

                if (Image) {
                  return (
                    <li>
                      <a href={href}>
                        <Image />
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={href}>
                    <AppLink to={href}> {t(text)} </AppLink>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </HStack>
  );
};
