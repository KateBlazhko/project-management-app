import { URL_SINGUP } from 'constants/constants';
import { BodyForSignUp, UserInfo } from 'types/types';

//! Create new User
export async function signUp(obj: BodyForSignUp): Promise<UserInfo> {
  try {
    const response = await fetch(URL_SINGUP, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const newUser = (await response.json()) as UserInfo;
    console.log('Created user =', newUser);
    return {
      _id: newUser._id,
      name: newUser.name,
      login: newUser.login,
    };
  } catch (e: unknown) {
    const err = e as Error;
    console.log('Catched error =', err.message);
    throw new Error(err.message);
  }
}