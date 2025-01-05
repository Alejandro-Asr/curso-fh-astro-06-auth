import { firebase } from '@/firebase/config';
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { signOut } from 'firebase/auth';

export const logout = defineAction({
  accept: 'json',
  handler: async (_, { cookies }) => {
    console.log('hacemos logout');
    return await signOut(firebase.auth);
  },
});
