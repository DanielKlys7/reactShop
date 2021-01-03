import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(6, 'Username must be atleast 6 letters long.')
    .max(32, 'Username must be maximally 32 letters long.'),
  password: yup
    .string()
    .required()
    .min(6, 'Password must be atleast 6 letters long.')
    .max(32, 'Password must be maximally 32 letters long.'),
});
