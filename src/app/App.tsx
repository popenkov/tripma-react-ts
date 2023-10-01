import { Suspense } from 'react';
import './styles/index.scss';
import classNames from 'classnames';
import { Header } from '@/widgets/Header';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Header />
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
