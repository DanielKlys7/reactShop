import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { httpService } from 'core/services';
import { AppRoute } from 'routing/AppRoute.enum';
import { userContext } from 'modules/user/contexts/user';
import { reactFormValueSetter } from 'common/helpers/reactFormValueSetter';

export const Login = () => {
    const { setCurrentUser } = useContext(userContext);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <>
            <Link to={AppRoute.home}>Products page</Link>
            <h2>Login</h2>
            <form>
                <div>
                    <label>
                        username:
                        <input
                            name="username"
                            value={username}
                            onChange={reactFormValueSetter(setUsername)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        password:
                        <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={reactFormValueSetter(setPassword)}
                        />
                    </label>
                </div>
                <button type="submit" onClick={e => {}}>
                    submit
                </button>
            </form>
        </>
    );
};
