import type { FC } from 'react';

import useLogin from '@core/module/identity/hook/useLogin';

import s from './style/Login.module.css';

const LoginPage: FC = () => {
  const {
    userName,
    setUserName,
    password,
    setPassword,
    passwordVisible,
    isLoading,

    toggleVisibility,
    login,
    error,
  } = useLogin();

  return (
    <div className={s.container}>
      <div>
        <div>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            disabled={isLoading}
          />
        </div>
        <div>
          <input
            type={passwordVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            disabled={isLoading}
          />
        </div>
        <div>
          <button onClick={toggleVisibility} disabled={isLoading}>
            {passwordVisible ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      <div>
        <button onClick={login} disabled={isLoading}>
          Login
        </button>
      </div>
      <div>{error?.message}</div>
    </div>
  );
};

export default LoginPage;
