import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4Gjtqeo4aYsCVhn0gXU-t_IZmv3TLHpQ",
    authDomain: "node-server-3d477.firebaseapp.com",
    projectId: "node-server-3d477",
    storageBucket: "node-server-3d477.appspot.com",
    messagingSenderId: "74666042997",
    appId: "1:74666042997:web:d56c64fb02acbae47b7a3c"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;