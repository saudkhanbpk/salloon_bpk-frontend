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
  apiKey: "AIzaSyD98LczGiCRpLxHV5kmp1o311YGADO1MXo",
  authDomain: "salloon-frontend.firebaseapp.com",
  projectId: "salloon-frontend",
  storageBucket: "salloon-frontend.appspot.com",
  messagingSenderId: "961520707258",
  appId: "1:961520707258:web:9d7d744345202662f34483",
  measurementId: "G-ZER7YJC1E5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);
const Provider = new GoogleAuthProvider();
export { Auth, Provider };
