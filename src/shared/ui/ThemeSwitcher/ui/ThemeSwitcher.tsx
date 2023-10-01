import classNames from 'classnames';
import React from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-switcher-svg.svg';
import DarkIcon from '@/shared/assets/icons/theme-switcher-svg.svg';
import { Button, ButtonTheme } from '@/shared//ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
