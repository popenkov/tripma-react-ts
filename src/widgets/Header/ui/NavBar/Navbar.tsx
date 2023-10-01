import classNames from 'classnames';
import { AppLink, AppLinkTheme } from '@/shared//ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>/</div>
    </nav>
  );
};