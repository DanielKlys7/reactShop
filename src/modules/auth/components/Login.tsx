import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useUserContext } from 'modules/user/contexts/user';
import { authService } from 'core/services';
import { SingleFormField } from 'common/components/singleFormField';
import Avatar from 'common/assets/Avatar.png';
import { validationSchema } from '../config/validationSchema';

export interface LoginFormData {
  username: string;
  password: string;
}

export const Login = () => {
  const [error, setError] = useState<null | string>(null);
  const history = useHistory();

  const { setCurrentUser } = useUserContext();
  const { register, handleSubmit, errors } = useForm<LoginFormData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async ({ username, password }: { username: string; password: string }) => {
    const data = await authService.login(username, password);

    setError(() => (data.errorMessage ? data.errorMessage : null));

    if (data && !data.errorMessage) {
      setCurrentUser({
        username: data.username!,
        id: data.uid!,
        avatar: Avatar,
      });

      history.push('/');
    }
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SingleFormField fieldName="username">
          <>
            <input name="username" ref={register} />
            {errors.username?.message && <p>{errors.username.message}</p>}
          </>
        </SingleFormField>
        <SingleFormField fieldName="password">
          <>
            <input name="password" type="password" ref={register} />
            {errors.password?.message && <p>{errors.password.message}</p>}
          </>
        </SingleFormField>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};
