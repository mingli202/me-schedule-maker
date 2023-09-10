import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  AuthError,
  User,
  sendEmailVerification,
  Auth,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
  DataSnapshot,
  off,
  remove,
} from "firebase/database";
import { AuthType, Saved, UserType } from "../types";

const app = initializeApp();

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
  return getAuth(app);
}

export async function $signOut() {
  return signOut(auth);
}

export async function resetPassEmail(email: string) {
  return await sendPasswordResetEmail(auth, email)
    .then(() => null)
    .catch((err: AuthError) => err);
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

export async function getUserData<T>(uid: string, child?: string) {
  const path = `/users${uid}${child ? "/" + child : ""}`;
  const snapshot = await get(ref(db, path));
  if (snapshot.exists()) {
    return snapshot.val() as T;
  } else {
    return null;
  }
}

export async function updateSaved(uid: string, saved: Saved[]) {
  const dbRef = ref(db, "/users" + uid + "/schedules");
  await set(dbRef, saved);
}

export async function updateName(uid: string, name: string, path: number) {
  const dbRef = ref(db, `/users${uid}/schedules/${path}/name`);
  await set(dbRef, name);
}

export function listenForChange(
  uid: string,
  callback: (snapshot: DataSnapshot) => unknown,
  child?: string
) {
  const path = `/users${uid}${child ? "/" + child : ""}`;
  onValue(ref(db, path), callback);
}

export function detach(uid: string, child?: string) {
  const path = `/users${uid}${child ? "/" + child : ""}`;
  off(ref(db, path));
}

export async function deleteUserData(uid: string) {
  await remove(ref(db, `/users${uid}`));
}

/*
 * user management
 * */
export async function verifyEmail(user: User) {
  await sendEmailVerification(user);
}
