
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBH2qDXyWMv7ybb_aJ315v8E1G6_ypgVUk",
  authDomain: "mern-estate-2d2b5.firebaseapp.com",
  projectId: "mern-estate-2d2b5",
  storageBucket: "mern-estate-2d2b5.appspot.com",
  messagingSenderId: "293917491133",
  appId: "1:293917491133:web:0f9a43b585c9a4e5c69cd4",
  measurementId: "G-71G7ER5Z2Q"
};


export const app = initializeApp(firebaseConfig);

