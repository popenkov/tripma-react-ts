import { FC } from 'react';
import cls from '../Footer.module.scss';
import { FOOTER_LINKS_DATA } from './links-data';
import { AppLink } from '@/shared/ui/AppLink/AppLink';

export const FooterLinks: FC = () => {
  return (
    <div>
      {FOOTER_LINKS_DATA.map((section) => {
        const { title, links } = section;
        return (
          <div key={title}>
            <h3>{title}</h3>
            <ul>
              {links.map((link) => {
                const { text, img, href } = link;

                if (img) {
                  return (
                    <li>
                      <a href={href}>
                        <img src={img} alt={text} />
                      </a>
                    </li>
                  );
                }

                return (
                  <li key={href}>
                    <AppLink to={href}> {text} </AppLink>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
