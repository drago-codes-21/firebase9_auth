import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe_iAIQ0Da3nFCrHqX5NPj96EB0pl_jLk",
  authDomain: "todoist-project-d89f7.firebaseapp.com",
  projectId: "todoist-project-d89f7",
  storageBucket: "todoist-project-d89f7.appspot.com",
  messagingSenderId: "728259295806",
  appId: "1:728259295806:web:de2fe218942e9378da2f6f",
  measurementId: "G-SGX1CXKR2Q",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
