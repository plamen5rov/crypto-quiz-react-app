import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc44vd6GNDJRcuCsFXbaEcwqeSkDe_TK4",
  authDomain: "crypto-quiz-react-app.firebaseapp.com",
  projectId: "crypto-quiz-react-app",
  storageBucket: "crypto-quiz-react-app.appspot.com",
  messagingSenderId: "584292717939",
  appId: "1:584292717939:web:9b1e3366232bfe53536106",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const auth = app.auth();

export { projectStorage, timestamp, auth, db };
export default app;
