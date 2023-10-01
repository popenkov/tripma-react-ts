import classNames from 'classnames';
import { AppLink, AppLinkTheme } from '@/shared//ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  const { t } = useTranslation();

  return (
    <nav className={classNames(cls.Header, {}, [className])}>
      heaser
      <div className={cls.links}>/</div>
    </nav>
  );
};
