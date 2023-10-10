import { FC } from 'react';
import cls from './HeroBanner.module.scss';

export const HeroBanner: FC = () => {
  return (
    <section className={cls.HeroBanner}>
      <h1 className={cls.title}>It’s more than just a trip</h1>
    </section>
  );
};
