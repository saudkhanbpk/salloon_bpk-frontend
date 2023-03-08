// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCq_X_B3m5Ld0xq9NxILylJAG1mQJdu8O8",
//   authDomain: "salloon-4e686.firebaseapp.com",
//   projectId: "salloon-4e686",
//   storageBucket: "salloon-4e686.appspot.com",
//   messagingSenderId: "123630027967",
//   appId: "1:123630027967:web:c6e00dcf36590a7c51f20a",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const Auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMTLaPTPYe0al0dhZJ4XbE0YHFCqAx494",
  authDomain: "reminder-app-95f04.firebaseapp.com",
  projectId: "reminder-app-95f04",
  storageBucket: "reminder-app-95f04.appspot.com",
  messagingSenderId: "937378119577",
  appId: "1:937378119577:web:b8982cb2717fbdf7c91d08",
  measurementId: "G-PC3MMJZPN6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
export { Auth, Provider };
