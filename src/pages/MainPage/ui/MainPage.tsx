import { Reviews } from '@/entities/Reviews';
import { HeroBanner } from '@/widgets/HeroBanner/ui/HeroBanner';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <HeroBanner />
      <Reviews />
    </div>
  );
};

export default MainPage;
