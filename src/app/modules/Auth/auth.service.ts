/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';
import { TUser } from '../user/user.interface';

const registerUser = async (payload: TUser) => {
  try {
    // checking if the user is exist
    const user = await User.findOne({ email: payload.email });

    if (user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is already exist !');
    }
    const registerUser = await User.create(payload);
    return registerUser;
  } catch (err) {
    throw new Error(err as string);
  }
};

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user: any = await User.isUserExistsByCustomUsername(payload.username);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  //checking if the password is correct
  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //create token and sent to the  client

  const jwtPayload = {
    _id: user._id,
    role: user.role,
    email: user.email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    user: { ...jwtPayload, username: payload.username },
    accessToken,
    refreshToken,
  };
};

export const AuthServices = {
  registerUser,
  loginUser,
};
