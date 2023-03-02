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
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC6cFrkfYQwLyFtcuebaYWozYjVMufA08o",
  authDomain: "social-login-829f1.firebaseapp.com",
  projectId: "social-login-829f1",
  storageBucket: "social-login-829f1.appspot.com",
  messagingSenderId: "553895430431",
  appId: "1:553895430431:web:23038311a71ff2a4b8082a",
  measurementId: "G-B05NX4F0FC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app)
const Provider = new GoogleAuthProvider();
export {Auth, Provider};