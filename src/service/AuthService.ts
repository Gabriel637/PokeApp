'use server'
import { NextApiRequest } from "next";
import { cookies } from "next/headers";
import { encrypt } from "@/helpers/crypto";

export interface LoginForm extends NextApiRequest {
  user: string;
  password: string;
}

export interface LoginResponse extends Response {
  token: string;
}

export const LoginUser = async (req: LoginForm) => {
  try {
    if (req.user === 'admin' && req.password === 'admin') {
      const body = { user: req.user, password: req.password, sessionId: 'gengar' };
      const encryptedSessionData = encrypt(JSON.stringify(body));
      const cookieStore = await cookies()
      cookieStore.set('session', encryptedSessionData)
    } else {
      throw new Error();
    }
  } catch (error) {
    throw error;
  }
}
