import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthError,
  User,
  sendEmailVerification,
  Auth,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { AuthType, UserType } from "../types";

const firebaseConfig = {
  // removed
};

const app = initializeApp(firebaseConfig);

/*
 *Authentication Api
 * */
const auth = getAuth(app);

export async function signUp(
  email: string,
  password: string
): Promise<AuthType> {
  return await createUserWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      return {
        info: userCred,
        status: "success",
      } as const;
    })
    .catch((err: AuthError) => {
      return {
        info: err,
        status: "error",
      } as const;
    });
}

export async function signIn(
  email: string,
  password: string
): Promise<AuthType> {
  return await signInWithEmailAndPassword(auth, email, password)
    .then((userCred) => {
      return {
        info: userCred,
        status: "success",
      } as const;
    })
    .catch((err: AuthError) => {
      return {
        info: err,
        status: "error",
      } as const;
    });
}

export function $getAuth(): Auth {
  return auth;
}

/*
 * Database api
 * */
const db = getDatabase(app);

export async function createUser(user: UserType) {
  const uid = user.uid;
  await set(ref(db, "/users" + uid), {
    ...user,
  });
}

export async function getUserData(uid: string) {
  const snapshot = await get(ref(db, "/users" + uid));
  if (snapshot.exists()) {
    return snapshot.val() as UserType;
  } else {
    return null;
  }
}

/*
 * user management
 * */
export async function verifyEmail(user: User) {
  await sendEmailVerification(user);
}
