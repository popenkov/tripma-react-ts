import classNames from 'classnames';
import { AppLink, AppLinkTheme } from '@/shared//ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
import {
  getRouteFlights,
  getRouteHotels,
  getRoutePackages,
} from '@/shared/const/router';
import { useLocation } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ul className={cls.links}>
        <li>
          <AppLink
            to={getRouteFlights()}
            isActive={location.pathname === getRouteFlights() || isMainPage}
            className={cls.navLink}
          >
            {t('Полеты')}
          </AppLink>
        </li>
        <li>
          <AppLink
            to={getRouteHotels()}
            isActive={location.pathname === getRouteHotels()}
            className={cls.navLink}
          >
            {t('Отели')}
          </AppLink>
        </li>
        <li>
          <AppLink
            to={getRoutePackages()}
            isActive={location.pathname === getRoutePackages()}
            className={cls.navLink}
          >
            {t('Путевки')}
          </AppLink>
        </li>
        <li>
          <AppLink to={getRouteFlights()} className={cls.navLink}>
            {t('Войти')}
          </AppLink>
        </li>
        <li>
          <AppLink
            to={getRouteFlights()}
            theme={AppLinkTheme.FILLED}
            className={cls.navLink}
          >
            {t('Зарегистрироваться')}
          </AppLink>
        </li>
      </ul>
    </nav>
  );
};
