import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBSYEs_MjX3h4Gd02Oec80jtnyfbrivSlc",
    authDomain: "miniblog-4502f.firebaseapp.com",
    projectId: "miniblog-4502f",
    storageBucket: "miniblog-4502f.appspot.com",
    messagingSenderId: "871922875959",
    appId: "1:871922875959:web:4cb498dc5ff9174220c9b2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };