import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAc44vd6GNDJRcuCsFXbaEcwqeSkDe_TK4",
  authDomain: "crypto-quiz-react-app.firebaseapp.com",
  projectId: "crypto-quiz-react-app",
  storageBucket: "crypto-quiz-react-app.appspot.com",
  messagingSenderId: "584292717939",
  appId: "1:584292717939:web:9b1e3366232bfe53536106",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
