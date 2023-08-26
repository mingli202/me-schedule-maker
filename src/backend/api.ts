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
  apiKey: "AIzaSyAG8LJPNXNgDKnfopB-c1CVX-Uew4uRyqU",
  authDomain: "schedule-maker-8675b.firebaseapp.com",
  projectId: "schedule-maker-8675b",
  storageBucket: "schedule-maker-8675b.appspot.com",
  messagingSenderId: "198447247334",
  appId: "1:198447247334:web:f009e6e7b0b144923cf027",
  measurementId: "G-2NLFWYGS09",
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
