import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import { signOutThunk} from '@/entities/user';
import { ROUTES } from '@/shared/enums/routes';
import { Button } from '@/shared/ui/Button';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';

export function Navbar(): React.ReactElement {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state)=>state.user.user)
  const navigate = useNavigate();

  const signOutHandler = async (): Promise<void> => {
    dispatch(signOutThunk())
   
  };

  return (
    <div className={styles.container}>
      <Button text="Главная" color="green" type="button" onClick={() => navigate(ROUTES.HOME)} />
      {user ? (
        <>
          {/* <Button text="Вещи" color="green" type="button" onClick={() => navigate(ROUTES.ITEMS)} /> */}
          <Button text="Выход" color="red" type="button" onClick={signOutHandler} />
        </>
      ) : (
        <>
          <Button
            text="Вход"
            color="green"
            type="button"
            onClick={() => navigate(`${ROUTES.AUTH_ROOT}/signin`)}
          />
          <Button
            text="Регистрация"
            color="green"
            type="button"
            onClick={() => navigate(`${ROUTES.AUTH_ROOT}/signup`)}
          />
        </>
      )}
    </div>
  );
}
