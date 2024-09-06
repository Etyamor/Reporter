import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3GVg6etcU2FNvEMsyYOfKp34UyLc1D2M",
    authDomain: "reporter-30601.firebaseapp.com",
    databaseURL: "https://reporter-30601-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "reporter-30601",
    storageBucket: "reporter-30601.appspot.com",
    messagingSenderId: "620128511316",
    appId: "1:620128511316:web:954a5eca9f123ba03f14c1"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };