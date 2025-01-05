import { firebase } from '@/firebase/config';
import { GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
import { defineAction } from 'astro:actions';
import { z } from 'astro:content';

export const loginWithGoogle = defineAction({
  accept: 'json',
  input: z.any(),
  handler: async (credentials) => {
    const credential = GoogleAuthProvider.credentialFromResult(credentials);
    if (!credential) {
      throw new Error('Google login failed');
    }
    await signInWithCredential(firebase.auth, credential);
    return { ok: true };
  },
});
