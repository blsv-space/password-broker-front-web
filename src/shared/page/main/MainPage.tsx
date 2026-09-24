import { type FC, useState } from 'react';

import { useAuth } from '@core/module/identity/context/Auth';

import LoginPage from '../../../module/identity/page/login/LoginPage';
import s from './style/MainPage.module.css';
import { Route, Routes } from 'react-router-dom';
import PasswordBrokerLeftMenu
  from '../../../module/passwordBroker/widget/PasswordBrokerLeftMenu/PasswordBrokerLeftMenu';

const MainPage: FC = () => {
  const [leftMenuVisible, setLeftMenuVisible] = useState<boolean>(true);

  const visibleToggle = () => {
    setLeftMenuVisible(!leftMenuVisible);
  }

  const auth = useAuth();
  return (
    <>
      <div className={s.container}>
        <div className={[s.leftMenu, leftMenuVisible ? '' : s.invisible].join(' ')}>
          <div onClick={visibleToggle}>{leftMenuVisible ? 'Visible' : 'Invisible'}</div>
          <Routes>
            <Route path="/*" element={<PasswordBrokerLeftMenu />} />
          </Routes>
        </div>
        <div className={s.main}>

        </div>
      </div>
      {auth.showLogin && <LoginPage />}
    </>
  );
};

export default MainPage;
