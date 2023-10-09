import classNames from 'classnames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  FILLED = 'filled',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  isActive?: boolean;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    isActive,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  console.log(theme);

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, className, {
        [cls[theme]]: true,
        [cls.active]: isActive,
      })}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
