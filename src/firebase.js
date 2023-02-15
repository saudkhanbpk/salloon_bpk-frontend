import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCq_X_B3m5Ld0xq9NxILylJAG1mQJdu8O8",
  authDomain: "salloon-4e686.firebaseapp.com",
  projectId: "salloon-4e686",
  storageBucket: "salloon-4e686.appspot.com",
  messagingSenderId: "123630027967",
  appId: "1:123630027967:web:c6e00dcf36590a7c51f20a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
