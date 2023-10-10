import { HeroBanner } from '@/widgets/HeroBanner/ui/HeroBanner';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <HeroBanner />
    </div>
  );
};

export default MainPage;
