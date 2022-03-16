import { collection, getDocs, query, orderBy } from "firebase/firestore";
import db from "./firebaseConfig";

const firestoreFetch = async (inOffers) => {
  console.log("fetch ejecutado");
  const q = query(collection(db, "products"), orderBy("name"));
  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestore;
};

export default firestoreFetch;
