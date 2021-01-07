import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { authService } from 'core/services';
import { SingleFormField } from 'common/components';
import Avatar from 'common/assets/Avatar.png';
import { useUserContext } from 'modules/user/contexts/user';
import { validationSchema } from '../config/validationSchema';
import {
  LoginPage,
  LoginWrapper,
  Image,
  Logo,
  Text,
  Input,
  StyledButton,
  RetrivePassword,
} from '../styles/Login';

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
    <LoginPage>
      <Image />
      <LoginWrapper>
        <Logo>join.tsh.io</Logo>
        <Text>Login</Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SingleFormField fieldName="Username">
            <>
              <Input name="username" ref={register} placeholder="Enter username" />
              {errors.username?.message && <p>{errors.username.message}</p>}
            </>
          </SingleFormField>
          <SingleFormField fieldName="Uassword">
            <>
              <Input name="password" type="password" ref={register} placeholder="Enter password" />
              {errors.password?.message && <p>{errors.password.message}</p>}
            </>
          </SingleFormField>
          <StyledButton type="submit">Log in</StyledButton>
          {error && <p>{error}</p>}
        </form>
        <RetrivePassword>Forgot password?</RetrivePassword>
      </LoginWrapper>
    </LoginPage>
  );
};
