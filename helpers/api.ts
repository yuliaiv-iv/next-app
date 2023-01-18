import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  QueryDocumentSnapshot,
  DocumentData,
  doc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getCollectionData(arg: string) {
  const ref = collection(db, arg);
  const snap = await getDocs(ref);

  const data: any = {};
  snap.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    data[doc.id] = doc.data();
  });
  return data;
}

export async function getDocData(
  collection: string,
  document: string,
  alias: string
) {
  const snap = await getDoc(doc(db, collection, document));
  const field = snap.get(alias);
  return field;
}
