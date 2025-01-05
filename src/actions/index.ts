import { loginUser, loginWithGoogle, logout, registerUser } from './auth';

export const server = {
  // auth
  registerUser,
  loginUser,
  loginWithGoogle,
  logout,
};
