import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzjgZM7uegCmkEdWPOA1_HfT_mTBFfte8",
  authDomain: "react-f34b9.firebaseapp.com",
  projectId: "react-f34b9",
  storageBucket: "react-f34b9.appspot.com",
  messagingSenderId: "49836585679",
  appId: "1:49836585679:web:9602c4fc454648e6b4fdba"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;