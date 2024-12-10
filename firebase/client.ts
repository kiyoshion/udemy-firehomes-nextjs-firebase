// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { FirebaseStorage, getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLDTG0apUr0oIhCXsPj-1znagsUS8pP5A",
  authDomain: "udemy-firehomes.firebaseapp.com",
  projectId: "udemy-firehomes",
  storageBucket: "udemy-firehomes.firebasestorage.app",
  messagingSenderId: "587023697558",
  appId: "1:587023697558:web:705618373046efef3e24b7"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const currentApps = getApps();
let auth: Auth;
let storage: FirebaseStorage;

if (!currentApps.length) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

export { auth, storage };