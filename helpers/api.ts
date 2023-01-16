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
  apiKey: process.env.NEXT_API_KEY,
  authDomain: process.env.NEXT_DOMAIN,
  projectId: process.env.NEXT_PROJECT_ID,
  storageBucket: process.env.NEXT_STORAGE,
  messagingSenderId: process.env.NEXT_SENDER_ID,
  appId: process.env.NEXT_APP_ID,
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
