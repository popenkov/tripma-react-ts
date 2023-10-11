import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';
import { ThemeSwitcher } from '@/shared/ui/ThemeSwitcher';
import { Navbar } from './NavBar/Navbar';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/LangSwitcher';
import LogoIcon from '@/shared/assets/images/logos/logo-large-w-padding.svg';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { getRouteMain } from '@/shared/const/router';
import { Icon } from '@/shared/ui/Icon';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <header className={classNames(cls.Header, 'container')}>
      <AppLink to={getRouteMain()}>
        <Icon className={cls.icon} Svg={LogoIcon} />
      </AppLink>
      <Navbar />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </header>
  );
};
