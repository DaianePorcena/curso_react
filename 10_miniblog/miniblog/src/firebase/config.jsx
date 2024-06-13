import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAuILXhHSTXkyQyXRU4qgNbKwkeTbDHetM",
  authDomain: "miniblog-react-59cce.firebaseapp.com",
  projectId: "miniblog-react-59cce",
  storageBucket: "miniblog-react-59cce.appspot.com",
  messagingSenderId: "451636826237",
  appId: "1:451636826237:web:a6259909c13bc05d6fa114",
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db, app };
