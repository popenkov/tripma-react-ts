import React, { memo } from 'react';
import classNames from 'classnames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={classNames(cls.Icon, className, {
        [cls.inverted]: inverted,
      })}
      {...otherProps}
    />
  );
});